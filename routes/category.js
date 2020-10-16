const express = require('express');
const router = express.Router();
const categoryService = require('../service/category.js');
const cors = require('cors');
const authorize = require('../helpers/authorize');
const corsOptionsDelegate = require('../helpers/cors');
const Category = require('../models/category.js');

// router.all('*', cors(corsOptionsDelegate));

// routes
router.post('/add', authorize(), categoryService.add);


router.get("/getall", (request, response) => {
    Category.find((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

module.exports = router;
