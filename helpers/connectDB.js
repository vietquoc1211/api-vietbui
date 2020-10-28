const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://vietbq:vietbq@cluster0.zentx.mongodb.net/VietBui?retryWrites=true&w=majority"

const mongodb = MongoClient.connect(uri, {});

module.exports = mongodb;


