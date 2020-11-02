const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    FunctionCode: { type: String,  required: true },
    FunctionName: { type: String, required: true },
    Description: { type: String, required: false },
    Lock: { type: String, required: true },
}, { collection: 'appfunction' });

module.exports = mongoose.model('appfunction', schema);