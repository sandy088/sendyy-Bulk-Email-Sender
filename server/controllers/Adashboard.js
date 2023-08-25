const user = require('../models/User')
const emailList = require('../models/EmailListModel')
const {ContactUsMessage} = require('../models/ContactUsMessage')

exports.totalUsers = async(req,res)=>{
    try {
        const totalUsers = await user.countDocuments()
        console.log(totalUsers)

        return res.status(200).json({
            success: true,
            totalUsers: totalUsers
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Server error: "+ error.message
        })
    }
}

exports.totalEmailLists = async(req,res)=>{
    try {
        const totalEmailsLists = await emailList.countDocuments()
        console.log(totalEmailsLists)

        return res.status(200).json({
            success: true,
            emailsList: totalEmailsLists
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Server error: "+ error.message
        })
    }
}


exports.contactUsController = async(req,res)=>{
    try {
        const {name, email, message} = req.body

        if(!name || !email || !message){
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }

        console.log("It is working")
        const newMessage = await ContactUsMessage.create({ name, email, message})

        return res.status(200).json({
            success: true,
            message: "Message sent successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Server error: "+ error.message
        })
    }
}