var express = require('express');
var path = require('path');
var engine = require('ejs-locals');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/bootstrap-icons', express.static(__dirname + '/node_modules/bootstrap-icons/font'));

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));



app.get('/', function(request,response){
	response.redirect('/photos');
});

app.get('/photos', function(request,response){
	response.render('index');
});

app.get('/videos', function(request,response){
	response.render('index');
});

app.get('/podcasts', function(request,response){
	response.render('index');
});

app.listen(3000,function(){
	console.log('Listening at port 3000...');
});

module.exports = app;