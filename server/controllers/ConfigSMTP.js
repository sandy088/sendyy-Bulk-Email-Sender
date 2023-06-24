const SMTPConfig = require('../models/SMTPConfig')

exports.setupSMTP = async (req, res) => {
    try {
        //fetch data
        const { host, user, pass } = req.body;
        const userId = req.user.id

        //validation
        if (!host || !user || !pass) {
            return res.status(400).json({
                success: false,
                message: "All the fields are required"
            })
        }

         // Create an ObjectId using the userId
        

        let smtpsetup = await SMTPConfig.findOne({ userId: userId });

        if (smtpsetup) {
            smtpsetup.host = host;
            smtpsetup.user = user;
            smtpsetup.pass = pass;
        } else {
            smtpsetup = new SMTPConfig({
                userId,
                host,
                user,
                pass,
            });
        }

        await smtpsetup.save();

        res.status(200).json({success:true, message: 'SMTP configuration set up successfully'});

    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "setupSMTP error:"+error.message
        })
    }
}

exports.checkSMTP = async(req,res) =>{
    try {
        const userId = req.user.id
        if(!userId){
            return res.status(401).json({
                success:false,
                message: "User Verification failed"
            })
        }
        let smtpsetup = await SMTPConfig.findOne({ userId: userId });

        if(smtpsetup){
            return res.status(200).json({
                success:true,
                data:true
            })
        }else{
            return res.status(300).json({
                success:false,
                data:false
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Error occured while checking for smtp setup exists: ", error
        })
    }
}