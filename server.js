var express = require('express'), 
    jade = require('jade'),
    bodyParser = require('body-parser'),
    inspect = require('eyespect').inspector();
    
var app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server);

app
  .set('view engine', jade)
  .set('jwt-secret', 'monster mash')
  .locals.pretty = true;

// middleware
app
  .use(express.static(__dirname + '/public'))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

// routes
app
  .use(require('./routes/api'));

inspect('server started on port 3000');
server.listen(3000);