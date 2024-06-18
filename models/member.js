const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 35 },
    last_name: { type: String, required: true, maxLength: 35 },
    username: { type: String, required: true, maxLength: 40 },
    password: { type: String, required: true, maxLength: 75 },
    member_status: { type: String, required: true, maxLength: 35 },
});

module.exports = mongoose.model('Member', MemberSchema);