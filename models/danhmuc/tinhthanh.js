const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String,  required: true },
    slug: { type: String, required: true },
    type: { type: String, required: true },
    name_with_type: { type: String, required: true },
    code: { type: String, unique: true, required: true },
}, { collection: 'tinhthanh' });

module.exports = mongoose.model('tinhthanh', schema);