const momgoose = require("mongoose");
const categorySchema = new momgoose.Schema({
    CategoryId:Number,
    DepartmentId:Number,
    Name:String,
    Description:String
});

module.exports = momgoose.model("category", categorySchema);