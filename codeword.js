var express = require('express');
var path = require('path');
var cors = require('cors');
require('dotenv').config();
var app = express();
//var router = express.Router();
const bodyParser = require('body-parser');

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// view engine setup
app.set('views', path.join(__dirname, 'views/dist/codeword'));
app.use(express.static(path.join(__dirname, 'views/dist/codeword')));
app.engine("html", require('ejs').renderFile)
app.set('view engine', 'html');


module.exports = app;
