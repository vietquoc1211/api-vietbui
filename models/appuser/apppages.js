const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // AppPageID: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    url: { type: String },
    icon: { type: String },
    parent: { type: String },
    hide: { type: Boolean },
    section: { type: Boolean },
    submenu: { type: Boolean },
    stt: { type: Number },
    lock: { type: Boolean },
}, { collection: 'apppages' });

module.exports = mongoose.model('apppages', schema);