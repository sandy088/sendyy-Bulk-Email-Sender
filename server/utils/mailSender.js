const nodemailer = require('nodemailer')

require('dotenv').config()
exports.mailSender = async(from,emails,subject,body,host,user,pass) => {console.log(emails)
    try {

        let transporter = nodemailer.createTransport({
            host: host,
            
            auth:{
                user: user,
                pass: pass
            }
        })

        

        let info = await transporter.sendMail({
            from: from,
            to: emails,
            sender: from,
            subject: `${subject}`,
            html: `${body}`
        })

        console.log(info)
        return info
    } catch (error) {
        console.log(error.message)
    }
}