const express = require('express');
const router = express.Router();
const tinhthanhService = require('../../service/danhmuc/tinhthanh.js');
const authorize = require('../../helpers/authorize');

router.post('/add', authorize(), tinhthanhService.add);
router.post('/addmany', authorize(), tinhthanhService.addmany);
router.post('/getbyid', authorize(), tinhthanhService.getbyid);
router.get('/getall', authorize(), tinhthanhService.getall);

module.exports = router;

