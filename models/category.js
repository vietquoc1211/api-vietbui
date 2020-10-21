const momgoose = require("mongoose");
const categorySchema = new momgoose.Schema({
    id:Number,
    DepartmentId:Number,
    Name:String,
    Description:String
});

module.exports = momgoose.model("category", categorySchema);