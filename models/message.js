const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    title: { type: String, required: true, maxLength: 50 },
    text: { type: String, required: true, maxLength: 1000 },
    date_posted: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);