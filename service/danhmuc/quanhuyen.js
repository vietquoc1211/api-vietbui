const db = require('../../helpers/db');
const _quanhuyen = db.quanhuyen;

module.exports = {
    getall,
    getbyid,
    add,
    update,
    addmany,
    _delete
};
async function getall() {
    return await _quanhuyen.find();
}
async function getbyid(id) {
    return await _quanhuyen.findById(id);
}

async function add(quanhuyenParam) {
    if (await _quanhuyen.findOne({ name: quanhuyenParam.name,parent_code: quanhuyenParam.parent_code  })) {
        throw '"' + quanhuyenParam.name + '" đã tồn tại';
    }
    // save user
    await _quanhuyen(quanhuyenParam).save();
}
async function addmany(listquanhuyen) {
     var newarray = [];
    for (const key in listquanhuyen) {
        newarray.push(req.body[key]);
    }
    await _quanhuyen.insertMany(newarray);
}
async function update(id, quanhuyenParam) {
    const quanhuyen = await _quanhuyen.findById(id);

    // validate
    if (!quanhuyen) throw 'Phường xã không tồn tại!';
    if (quanhuyen.name !== quanhuyenParam.name && await quanhuyen.findOne({ name: quanhuyenParam.name,parent_code:quanhuyenParam.parent_code })) {
        throw 'Phường xã:  "' + quanhuyenParam.name + '" đã tồn tại';
    }
    Object.assign(quanhuyen, quanhuyenParam);

    await quanhuyen.save();
}

async function _delete(id) {
    await _quanhuyen.findByIdAndRemove(id);
}
