var apiRouter = require("./controllers/routes");
var indexRouter = require("./controllers/index");
var apiResponse = require("./helpers/apiResponse");
var cors = require("cors");
var express = require("express");
var app = express();
const port = process.env.PORT || 3000; 

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// body-parser
var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(bodyParser.json({
    limit: '50mb'
  }));
  
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true 
  }));

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

//Route Prefixes
app.use("/", indexRouter);
app.use("/api/", apiRouter);



//To allow cross-origin requests
app.use(cors());

// throw 404 if URL not found
app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Page not found");
});

app.use((err, req, res) => {
	if(err.name == "UnauthorizedError"){
		return apiResponse.unauthorizedResponse(res, err.message);
	}
});