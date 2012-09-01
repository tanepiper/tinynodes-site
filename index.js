var express = require('express');

var server = express();

server.set('view engine', 'jade');
server.set('views', __dirname + '/views');

server.use('/static', express.static(__dirname + '/static'));

server.get('/', function(req, res, next) {
  res.render('index');
});


server.listen(3800);