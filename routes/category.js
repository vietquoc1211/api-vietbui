const express = require('express');
const router = express.Router();
const categoryService = require('../service/category.js');
const cors = require('cors');
const authorize = require('../helpers/authorize');
const corsOptionsDelegate = require('../helpers/cors');
const Category = require('../models/category.js');
const db = require('../helpers/connectDB');


router.post('/add', authorize(), categoryService.add);
router.post('/getbyid', authorize(), categoryService.getbyid);
router.get('/getall', authorize(), categoryService.getall);

module.exports = router;
