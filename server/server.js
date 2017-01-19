var express = require('express'), 
    jade = require('jade'),
    bodyParser = require('body-parser'),
    inspect = require('eyespect').inspector(),
    sockets = require('./websocket')
    
var app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server)

app
  .set('view engine', jade)
  .set('jwt-secret', 'monster mash')
  .locals.pretty = true

// middleware
app
  .use(express.static(__dirname + '/../public')) // improve paths pls
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

// routes
app
  .use(require('./api'))

sockets.init(io)
server.listen(3000)

inspect('server started on port 3000')