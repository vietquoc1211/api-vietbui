const express = require('express');
const router = express.Router();
const categoryService = require('../service/category.js');
const cors = require('cors');
const authorize = require('../helpers/authorize');
const corsOptionsDelegate = require('../helpers/cors');
const Category = require('../models/category.js');
const db = require('../helpers/connectDB');

// router.all('*', cors(corsOptionsDelegate));

// routes
router.post('/add', authorize(), categoryService.add);

router.get('/getall', authorize(), categoryService.getall);

// router.get("/getall", (request, response) => {
//     db.default.then((mongoRes) => {
//         mongoRes.db("ONLINESHOP").collection("categories").find({}).toArray(function(err, result) {
//             if (err) throw err;
//             console.log(result);
//             client.close();
//             return result;
            
//         });
//     })
// });

module.exports = router;
