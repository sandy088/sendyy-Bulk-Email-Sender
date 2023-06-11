const express = require('express')
const { dbConnect } = require('./config/database')
const router = require('./routes/auth')
const cookieParser = require('cookie-parser');

const app = express()

app.use(express.json())
app.use(cookieParser())


app.use('/api/v2',router)

dbConnect()



app.listen(3000, ()=>{
    console.log("Server Started Successfully")
})