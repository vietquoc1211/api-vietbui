const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String,  required: true },
    type: { type: String, required: true },
    slug: { type: String, required: true },
    name_with_type: { type: String, required: true },
    path: { type: String, required: true },
    path_with_type: { type: String, required: true },
    code: { type: String, unique: true, required: true },
    parent_code: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
}, { collection: 'quanhuyen' });

module.exports = mongoose.model('quanhuyen', schema);