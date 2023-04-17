const express = require('express');
const path = require('path');
const app = express();

const convertToStatic = require("ejs-static-converter")

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/bootstrap-icons', express.static(__dirname + '/node_modules/bootstrap-icons/font'));

app.get('/', function(request,response){
	response.render('index');
});

app.listen(3000,function(){
	console.log('Listening at port 3000...');
});

const pages = ["index"];

convertToStatic(pages);

module.exports = app;