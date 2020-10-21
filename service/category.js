const Category = require('../models/category.js');
const db = require('../helpers/connectDB');

module.exports = {
    getall,
    add,
};

async function getall(req, res, next) {
    try {
        let mongoDB = await db;
        mongoDB.db("ONLINESHOP").collection("categories").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);

            res.send(result);
        });
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
}
// function getbyid(req, res, id) {
//     try {
//         Category.find({ "_id": new ObjectId(request.params.id) }, (error, result)
//         {
//             if(err)
//             {
//                 res.send("error");
//             }
//             else{
//                 res.json({
//                     status: 200,
//                     message: 'success',
//                     items: items
//                 });
//             }
//         });
//     } catch (error) {
//         if (error != null) response.status(500).send({ error: error.message });
//     }
// }
function add(req, res) {
    var newCate = new Category({
        name: req.body.txtCate,
        Books_id: []
    });
    res.json(newCate);
    newCate.save(function(err){
        if(err)
        {
            console.log("Save error:" +err);
        }
        else{
            console.log("Save Succsesfully");
        }
    });
}
