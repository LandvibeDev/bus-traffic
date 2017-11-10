//server connect
const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
bodyParser = require('body-parser');


app.set('views', './src/views'); //views와 연결
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static('src')); //src를 static하게 사용할 수 있게 한다.
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/index', (req,res) =>res.render('index.html'));

app.listen(port);

console.log('inharo started on: ' + port);