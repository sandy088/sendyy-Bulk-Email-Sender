const mongoose = require('mongoose');

const emailListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  emails: [{
    type: String,
    required: true
  }]
});

const EmailList = mongoose.model('EmailList', emailListSchema);

module.exports = EmailList;
