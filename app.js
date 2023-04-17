const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/', function(request,response){
	response.render('index');
});

app.listen(3000,function(){
	console.log('Listening at port 3000...');
});

module.exports = app;