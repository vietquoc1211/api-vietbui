const Category = require('../models/category.js');


module.exports = {
    getall,
    add,
};

function getall(req, res, next) {
    try {
        Category.find(function(err,items){
            if(err)
            {
                res.send("error");
            }
            else{
                res.json({
                    status: 200,
                    message: 'success',
                    items: items
                });
            }
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
