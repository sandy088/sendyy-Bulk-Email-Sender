const e = require('express');
const mongoose = require('mongoose');

const contactUsMessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type:String, required: true }
});

const ContactUsMessage = mongoose.model('ContactUsMessage', contactUsMessageSchema);
exports.ContactUsMessage = ContactUsMessage;