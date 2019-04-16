var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var request = require("request");
var cors = require("cors");
var cookieParser = require("cookie-parser");


var app = express();

app.use(express.static(path.join(__dirname + "./static")));
app.use(bodyParser.urlencoded({extended : true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app)

var server = app.listen(9000, function() {
	console.log("listening on port 9000");
});