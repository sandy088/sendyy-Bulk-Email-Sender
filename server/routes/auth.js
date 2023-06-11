const express = require('express')
const router = express.Router()

const {signup, login} = require('../controllers/Auth')
const{auth, isAdmin} = require('../middlewares/authMiddle')
const {createEmailList, getEmailList,sendEmailToList,deleteEmailList } = require('../controllers/EmailList')
const {setupSMTP} = require('../controllers/ConfigSMTP')

router.post('/signup', signup)
router.post('/login',login)
router.post('/createEmailList',auth, createEmailList)
router.get('/getEmailList',auth, getEmailList)
router.post('/sendMail',auth, sendEmailToList)
router.delete('/deletemail',auth, deleteEmailList)
router.post('/setup-smt',auth, setupSMTP)



router.get('/admin', auth, isAdmin, (req,res)=>{
    res.json({
        success:true,
        message: "you are an Admin💟"
    })
})

module.exports = router