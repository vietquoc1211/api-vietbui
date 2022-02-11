const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // appfunctionid: { type: String, unique: true, required: true },
    functioncode: { type: String, required: true },
    functionName: { type: String, required: true },
    description: { type: String },
    lock: { type: Boolean },
}, { collection: 'appfunctions' });

module.exports = mongoose.model('appfunctions', schema);