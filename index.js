var express = require("express");
var app = express();
const port = process.env.PORT || 3000; 

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//mongoose connect DB
const mongoose = require('mongoose');
const uri = "mongodb+srv://vietbq:vietbq@cluster0.zentx.mongodb.net/OnlineShop?retryWrites=true&w=majority";
mongoose.connect(uri,function(err)
{
    if(err)
    {
        console.log('Connect Fail!');
    }
    else{
        console.log('Connect MongoDB sussces!')
    }
});

// import routes
const categoryRoutes = require('./routes/category');

// set routes to api
app.use('/api/category', categoryRoutes);

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

app.get("/",function(req,res){
    res.render("home");
});