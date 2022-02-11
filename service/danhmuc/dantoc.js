const db = require('../../helpers/db')
const _dantoc = db.dantoc;


module.exports = {
    getall,
    getbyid,
    add,
    update,
    addmany,
    _delete
}

async function getall () {
    return await _dantoc.find();
}

async function getbyid(id) {
    return await _dantoc.findById(id);
}

async function add(dantoc) {
    if (await _dantoc.findOne({ name: dantoc.name,code: dantoc.code  })) {
        throw '"' + dantoc.name + '" đã tồn tại';
    }
    return await _dantoc(dantoc).save();
}

async function addmany(listdantoc) {
    var newarray = [];
   for (const key in listdantoc) {
       newarray.push(req.body[key]);
   }
   await _dantoc.insertMany(newarray);
}
async function update(code, dantocParam) {
   const dantoc = await _dantoc.findById(code);

   // validate
   if (!dantoc) throw 'dân tộc không tồn tại!';
   if (dantoc.name !== dantocParam.name && await _dantoc.findOne({ name: dantocParam.name,code:dantocParam.code })) {
       throw 'dân tộc:  "' + dantocParam.name + '" đã tồn tại';
   }
   Object.assign(dantoc, dantocParam);

   await dantoc.save();
}

async function _delete(id) {
    await _phuongxa.findByIdAndRemove(id);
}