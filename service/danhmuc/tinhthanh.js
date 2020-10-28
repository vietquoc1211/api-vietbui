const db = require('../../helpers/connectDB');

module.exports = {
    getall,
    getbyid,
    add,
    addmany
};
async function getall(req, res, next) {
    try {
        let mongoDB = await db;
        mongoDB.db("VietBui").collection("tinhthanh").find({}).toArray(function(err, result) {
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
        mongoDB.db("VietBui").collection("tinhthanh").find({query}).toArray(function(err, result) {
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
    mongoDB.db("VietBui").collection("tinhthanh").insertOne(req.body, function(err, resdb) {
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
async function addmany(req, res, next) {
    try {
    let mongoDB = await db;

    var newarray = [];
    for (const key in req.body) {
        newarray.push(req.body[key]);
    }
    mongoDB.db("VietBui").collection("tinhthanh").insertMany(newarray, function(err, resdb) {
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
        if (error != null) res.status(500).send({ error: error.message });
    }
}
