const db = require('../../helpers/db');
const _phuongxa = db.phuongxa;

module.exports = {
    getall,
    getbyid,
    add,
    update,
    addmany,
    _delete
};
async function getall() {
    return await _phuongxa.find();
}
async function getbyid(id) {
    return await _phuongxa.findById(id);
}

async function add(phuongxaParam) {
    if (await _phuongxa.findOne({ name: phuongxaParam.name,parent_code: phuongxaParam.parent_code  })) {
        throw '"' + phuongxaParam.name + '" đã tồn tại';
    }
    // save user
    await _phuongxa(phuongxaParam).save();
}
async function addmany(listphuongxa) {
     var newarray = [];
    for (const key in listphuongxa) {
        newarray.push(req.body[key]);
    }
    await _phuongxa.insertMany(newarray);
}
async function update(id, phuongxaParam) {
    const phuongxa = await _phuongxa.findById(id);

    // validate
    if (!phuongxa) throw 'Phường xã không tồn tại!';
    if (phuongxa.name !== phuongxaParam.name && await _phuongxa.findOne({ name: phuongxaParam.name,parent_code:phuongxaParam.parent_code })) {
        throw 'Phường xã:  "' + phuongxaParam.name + '" đã tồn tại';
    }
    Object.assign(phuongxa, phuongxaParam);

    await phuongxa.save();
}

async function _delete(id) {
    await _phuongxa.findByIdAndRemove(id);
}
