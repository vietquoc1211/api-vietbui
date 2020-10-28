const express = require('express');
const router = express.Router();
const quanhuyenService = require('../../service/danhmuc/quanhuyen.js');
const authorize = require('../../helpers/authorize');

router.post('/add', authorize(), quanhuyenService.add);
router.post('/addmany', authorize(), quanhuyenService.addmany);
router.post('/getbyid', authorize(), quanhuyenService.getbyid);
router.get('/getall', authorize(), quanhuyenService.getall);

module.exports = router;

