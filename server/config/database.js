const mongoose = require('mongoose')
require('dotenv').config()

exports.dbConnect = async() =>{
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>console.log("Db connected success ✅")).catch((err)=>console.error(err))
}