const config = require('../config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    user: require('../models/AppUser/AppUser'),
    // danhmuc
    tinhthanh: require('../models/DanhMuc/TinhThanh'),
    quanhuyen: require('../models/DanhMuc/QuanHuyen'),
    phuongxa: require('../models/DanhMuc/PhuongXa'),
};