const mongoose = require('mongoose');

const smtpConfigSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  host: {
    type: String,
    required: true,
  },
  port: {
    type: Number,
   
  },
  secure: {
    type: Boolean,
    
  },
  user: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

const SMTPConfig = mongoose.model('SMTPConfig', smtpConfigSchema);

module.exports = SMTPConfig;
