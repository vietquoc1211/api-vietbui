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
    parent_code: { type: String, required: true }
}, { collection: 'phuongxa' });
schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});
module.exports = mongoose.model('phuongxa', schema);