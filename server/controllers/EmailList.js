const emailList = require('../models/EmailListModel')
const SMTPConfig = require('../models/SMTPConfig')
const mongoose = require('mongoose')

const User = require('../models/User')
const { mailSender } = require('../utils/mailSender')

let totalEmailsSent = 0

exports.createEmailList = async (req, res) => {
    try {
        //fetch data
        const { name, emails } = req.body
        const userId = req.user.id
        console.log(req.user)

        //validation
        if (!name || !emails || !Array.isArray(emails)) {
            return res.status(400).json({
                success: false,
                message: "All Fieds ar required⚠️ Make sure to pass Emails as Array"
            })
        }

        const user = await User.findById({ _id: userId }).populate('lists')
        // Find the email list with the desired name
        if(user.lists.find(list => list.name === name)){
            return res.status(401).json({
                success: false,
                message: "Duplicate Email List name not allowed⚠️"
            })
        }
        //create entry

        const updatedEmailList = await emailList.create({
            name,
            emails
        })

        //push into user

        user.lists.push(updatedEmailList._id)
        await user.save()

        return res.status(200).json({
            success: true,
            message: "Email list Created Successfull✅",
            data: updatedEmailList
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error occured here: ",error
        })
    }
}

exports.getEmailList = async (req, res) => {
    try {
        //fetch Data
        const user = await User.findById({ _id: req.user.id }).populate('lists')


        //validation data
        if (!user) {
            return res.status(403).json({
                success: false,
                message: "User not found⚠️"
            })
        }

        const emailsListsData = user.lists
        const emailListCount = emailsListsData.length;
        const emailSent = user.emailsSent
        console.log(user)

        return res.status(200).json({
            success: true,
            data: emailsListsData,
            emailsent:emailSent,
            totalLists: emailListCount
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

exports.deleteEmailList = async(req,res) => {
    try {
        //fetch Data
        const {emailListName} = req.body
        const userId = req.user.id

        //validation
        const user = await User.findById({_id: userId}).populate('lists')
        if(!user){
            return res.status(403).json({
                success:false,
                message: "You are not a valid user⚠️"
            })
        }

        //emailList present validation

        const listIndex = user.lists.findIndex((list)=> list.name === emailListName)
        const listId = user.lists.find((list)=> list.name === emailListName)
        

        if(listIndex === -1 || !listId){
            return res.status(404).json({
                success:false,
                message: "Such Email list not present⚠️"
            })
        }

        //delete emailList
        user.lists.splice(listIndex,1)

        //update User
        await user.save()

        await emailList.findByIdAndDelete({_id: listId._id})

        return res.status(200).json({
            success: true,
            message: "Email Deleted Successful✅",
            deletedEmail: emailListName
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

exports.sendEmailToList = async (req, res) => {
    try {
        
        //fetch data
        const { from, emailName, subject, body } = req.body
        const userId = req.user.id

        const smtpConfigId = new mongoose.Types.ObjectId(userId);
        
        const smptpConfig = await SMTPConfig.findOne({ userId:smtpConfigId })
       
        if(!smptpConfig){
            return res.status(400).json({
                success: false,
                message: "Setup your SMTP, before sending message to your Email-list⚠️"
            })
        }

        const user = await User.findById({ _id: userId }).populate('lists')
        const emails = user.lists.find(list => list.name === emailName);
        // const emails = await user.lists[0].emails
        console.log(emails)
        //validation of data

        if (!from || !emails || !subject || !body) {
            return res.status(400).json({
                success: false,
                message: "All the fields are required⚠️"
            })
        }

        //send mail to all email lists

        const emailSent = await mailSender(from, emails.emails, subject, body,smptpConfig.host, smptpConfig.user, smptpConfig.pass)
        if (!emailSent) {
            return res.status(403).json({
                success: false,
                message: "Email not sent⚠️"
            })
        }

        
        totalEmailsSent++;
        console.log("Hey is it workingg")
        if (user.emailsSent === undefined) {
            console.log("Here I am ", user.emailsSent)
            user.emailsSent = 1; // Set the default value if undefined
        } else {
            console.log("working File", user.emailsSent)
            user.emailsSent++; // Increment if defined
            await user.save();
        }

        return res.status(200).json({
            success: true,
            message: "Email Sent Successfully✅"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


exports.totalEmailsSent = (req,res)=>{
    try {
        return res.status(200).json({
            success: true,
            totalEmails: totalEmailsSent
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Update the getAllUsers function
exports.getAllUsers = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Get the page number from query parameter
      const limit = parseInt(req.query.limit) || 10; // Set the number of users per page
  
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
  
      // Fetch users with pagination
      const users = await User.find()
        
        .populate('lists')
        .skip(startIndex)
        .limit(limit);
  
      const totalUsers = await User.countDocuments();
  
      const response = {
        data: users,
        currentPage: page,
        totalPages: Math.ceil(totalUsers / limit)
      };
  
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };
  

  exports.getTopUsers = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Get the page number from query parameter
      const limit = parseInt(req.query.limit) || 5; // Set the number of users per page
  
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
  
      // Fetch and sort users by emailsSent in descending order
      const users = await User.find()
        .sort({ emailsSent: -1 }) // Sort by emailsSent in descending order
        .skip(startIndex)
        .limit(limit);
  
      const totalUsers = await User.countDocuments();
  
      const response = {
        data: users,
        currentPage: page,
        totalPages: Math.ceil(totalUsers / limit)
      };
  
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };
  