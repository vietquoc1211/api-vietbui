var express = require("express");
var dmtinhthanh = require("./DanhMuc/TinhThanh");
var dmphuongxa = require("./DanhMuc/PhuongXa");
var dmquanhuyen = require("./DanhMuc/QuanHuyen");
var user = require("./AppUser/AppUser");
var routes = express();

//auth
routes.use("/auth/user", user);

//danh muc
routes.use("/danhmuc/tinhthanh", dmtinhthanh);
routes.use("/danhmuc/phuongxa", dmphuongxa);
routes.use("/danhmuc/quanhuyen", dmquanhuyen);

module.exports = routes;