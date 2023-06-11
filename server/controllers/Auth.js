const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signup = async(req,res) => {
    try {
        //fetch data
        const {name,email,password,role} = req.body

        //validation
        if(!name || !email || !password || !role){
            return res.status(400).json({
                success:false,
                message: "All the fields are required"
            })
        }
        //check if user already exists or not

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(401).json({
                success:false,
                message:"User already exists⚠️"
            })

        }

        //hash the password
        let hashedPassword
        try {
            hashedPassword = await bcrypt.hash(password,10)
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error while hashing the password: "+error.message
            })
        }
        //save entry in database
        const user = await User.create({
            name,email,password:hashedPassword,role
        })
        //return the response
        return res.status(200).json({
            success:true,
            message:"User registered Successfully ✅"
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message: "Error while regsitering" + error.message
        })
    }
}

exports.login = async(req,res)=>{
    try {
        //fetch data
        const {email, password} = req.body
        //validation
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Some fields are empty⚠️ check and try again"
            })
        }
        //find user from DB
        let user= await User.findOne({email})


        const payload={
            email:user.email,
            id: user._id,
            role: user.role
        }
        //verify password and create jwt token
        if( await bcrypt.compare(password, user.password)){

            let token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: "2hr"})

            user.token = token
            user.password = undefined

            const options = {
                expires: new Date( Date.now()+ 3*24*60*60*1000),
                httpOnly: true  //It will make cookie not accessible on clinet side -> good way to keep hackers away
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                message:"User logged in successfully✅"
            })

        }else{
            return res.status(403).json({
                success:false,
                message: "Login Failure⚠️"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
} 