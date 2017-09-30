//server connect
const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
Store = require('./server/models/storeModel'); //created model loading here


app.set('views', './src/views'); //views와 연결
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static('src')); //src를 static하게 사용할 수 있게 한다.
app.use(bodyParser.urlencoded({ extended: false }));

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
const uri = "mongodb://wongeunsong:k7413284@cluster0-shard-00-00-8yz0a.mongodb.net:27017,cluster0-shard-00-01-8yz0a.mongodb.net:27017,cluster0-shard-00-02-8yz0a.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
mongoose.connect(uri,{
    useMongoClient: true,
    /* other options */
  });

const routes = require('./server/routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('inharo started on: ' + port);