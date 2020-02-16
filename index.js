var express = require('express');

var userRoutes = require('./routes/user.route');
var authRoutes = require('./routes/auth.route');

var authMiddleware = require('./middlewares/auth.middleware');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); //
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index', {
		name: 'AAA'
	});
});

app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);
app.listen(port, function(req, res) {
	console.log('Server listening on port ' + port);
});
