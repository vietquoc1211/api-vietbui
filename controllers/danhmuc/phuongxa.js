const express = require('express');
const router = express.Router();
const phuongxaService = require('../../service/danhmuc/phuongxa.js');
const authorize = require('../../helpers/authorize');

router.post('/add', authorize(), phuongxaService.add);
router.post('/addmany', authorize(), phuongxaService.addmany);
router.post('/getbyid', authorize(), phuongxaService.getbyid);
router.get('/getall', authorize(), phuongxaService.getall);

module.exports = router;

