const express = require('express');
const router = express.Router();
const categoryService = require('../service/category.js');
const authorize = require('../helpers/authorize');

router.post('/add', authorize(), categoryService.add);
router.post('/getbyid', authorize(), categoryService.getbyid);
router.get('/getall', authorize(), categoryService.getall);

module.exports = router;
