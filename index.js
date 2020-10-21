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


const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://vietbq:vietbq@cluster0.zentx.mongodb.net/ONLINESHOP?retryWrites=true&w=majority"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   client.db("ONLINESHOP").collection("categories").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    client.close();
  });
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