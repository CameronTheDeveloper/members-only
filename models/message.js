const mongoose = require('mongoose');
const { DateTime } = require('luxon');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    title: { type: String, required: true, maxLength: 50 },
    text: { type: String, required: true, maxLength: 1000 },
    date_posted: { type: Date, default: Date.now },
    author: {type: Schema.Types.ObjectId, ref: 'Member', required: true}
});

MessageSchema.virtual('date_posted_formatted').get(function () {
    return DateTime.fromJSDate(this.date_posted).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
});

module.exports = mongoose.model('Message', MessageSchema);