var express = require("express");
var category = require("./category");
var dmtinhthanh = require("./danhmuc/tinhthanh");
var dmphuongxa = require("./danhmuc/phuongxa");
var dmquanhuyen = require("./danhmuc/quanhuyen");
var routes = express();

routes.use("/category", category);
//danh muc
routes.use("/danhmuc/tinhthanh", dmtinhthanh);
routes.use("/danhmuc/phuongxa", dmphuongxa);
routes.use("/danhmuc/quanhuyen", dmquanhuyen);

module.exports = routes;