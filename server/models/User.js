const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      emailsSent : {
        type: Number,
        default: 0
      },
      templates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmailTemplate'
      }],
      lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmailList'
      }],
    role:{
        type: String,
        role:['Admin','User']
    },
})

module.exports = mongoose.model('User', userSchema)