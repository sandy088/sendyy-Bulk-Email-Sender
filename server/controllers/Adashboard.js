const user = require('../models/User')
const emailList = require('../models/EmailListModel')

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