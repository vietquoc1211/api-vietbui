const Category = require('../models/category.js');
const db = require('../helpers/connectDB');

module.exports = {
    getall,
    getbyid,
    add,
};
async function getall(req, res, next) {
    try {
        let mongoDB = await db;
        mongoDB.db("ONLINESHOP").collection("categories").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            const response = {
                "code":"200",
                "message":"",
                "data": result
            }
            res.send(response);
        });
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
}
async function getbyid(req, res, id) {
    try {
        let mongoDB = await db;
        var query = { id: id };
        mongoDB.db("ONLINESHOP").collection("Category").find({query}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            const response = {
                "code":"200",
                "message":"",
                "data": result
            }
            res.send(response);
        });
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
}
async function add(req, res, next) {
    try {
    let mongoDB = await db;
    var newCate = { name: req.body.Name, address: req.body.Description };
    mongoDB.db("ONLINESHOP").collection("Category").insertOne(newCate, function(err, resdb) {
        if (err) throw err;
        else{
            const response = {
                "code":"200",
                "message":"Number of documents inserted: " + resdb.insertedCount,
                "data": req.body.Name
            }
            res.send(response);
            mongoDB.close();
        }
    });
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
}
