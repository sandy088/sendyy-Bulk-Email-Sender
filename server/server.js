const express = require('express')
const { dbConnect } = require('./config/database')
const router = require('./routes/auth')
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())


app.use('/api/v2',router)

dbConnect()



app.listen(4000, ()=>{
    console.log("Server Started Successfully")
})