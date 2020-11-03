const db = require('../../helpers/db');
const _tinhthanh = db.tinhthanh;

module.exports = {
    getall,
    getbyid,
    add,
    update,
    addmany,
    _delete
};
async function getall() {
    return await _tinhthanh.find();
}
async function getbyid(id) {
    return await _tinhthanh.findById(id);
}

async function add(tinhthanhParam) {
    if (await _tinhthanh.findOne({ name: tinhthanhParam.name })) {
        throw '"' + tinhthanhParam.name + '" đã tồn tại';
    }
    // save user
    await _tinhthanh(tinhthanhParam).save();
}
async function addmany(listtinhthanh) {
     var newarray = [];
    for (const key in listtinhthanh) {
        newarray.push(req.body[key]);
    }
    await _tinhthanh.insertMany(newarray);
}
async function update(id, tinhthanhParam) {
    const tinhthanh = await _tinhthanh.findById(id);

    // validate
    if (!tinhthanh) throw 'tỉnh thành không tồn tại!';
    if (tinhthanh.name !== tinhthanhParam.name && await _tinhthanh.findOne({ name: tinhthanhParam.name })) {
        throw 'tỉnh thành:  "' + tinhthanhParam.name + '" đã tồn tại';
    }
    Object.assign(tinhthanh, tinhthanhParam);

    await tinhthanh.save();
}

async function _delete(id) {
    await _tinhthanh.findByIdAndRemove(id);
}
