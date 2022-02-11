const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    code: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    lock: { type: Boolean },
}, { collection: 'dantoc' });

module.exports = mongoose.model('dantoc', schema);