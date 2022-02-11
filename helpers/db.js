const config = require('../config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    user: require('../models/appuser/appuser'),
    // danhmuc
    tinhthanh: require('../models/danhmuc/tinhthanh'),
    quanhuyen: require('../models/danhmuc/quanhuyen'),
    phuongxa: require('../models/danhmuc/phuongxa'),
    dantoc: require('../models/danhmuc/dantoc'),
};