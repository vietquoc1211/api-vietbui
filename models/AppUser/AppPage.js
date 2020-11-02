const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    Name: { type: String,  required: true },
    Url: { type: String, required: true },
    Icon: { type: String, required: false },
    Parent: { type: String, required: true },
    Hide: { type: String, required: true },
    Section: { type: String, required: true },
    Submenu: { type: String, required: true },
}, { collection: 'apppage' });

module.exports = mongoose.model('apppage', schema);