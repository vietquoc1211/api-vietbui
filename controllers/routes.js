var express = require("express");
var dmtinhthanh = require("./danhmuc/tinhthanh");
var dmphuongxa = require("./danhmuc/phuongxa");
var dmquanhuyen = require("./danhmuc/quanhuyen");
var dmdantoc = require("./danhmuc/dantoc");
var user = require("./appuser/appuser");
var routes = express();

//auth
routes.use("/auth/user", user);

//danh muc
routes.use("/danhmuc/tinhthanh", dmtinhthanh);
routes.use("/danhmuc/phuongxa", dmphuongxa);
routes.use("/danhmuc/quanhuyen", dmquanhuyen);
routes.use("/danhmuc/dantoc", dmdantoc);

module.exports = routes;