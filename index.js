var express = require('express');

var userRoutes = require('./routes/user.route');

var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); //
app.use(express.static('public'));
app.get('/', function(req, res) {
	res.render('index', {
		name: 'AAA'
	});
});
app.use('/users', userRoutes);
app.listen(port, function() {
	console.log('Server listening on port ' + port);
});
