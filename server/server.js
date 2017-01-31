var express = require('express'), 
    jade = require('jade'),
    bodyParser = require('body-parser'),
    inspect = require('eyespect').inspector(),
    middleware = require('./middleware')
    
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
  .use(middleware.inject.bind(io)) // attach io to req.io

// routes
app
  .use(require('./api'))

io.use(middleware.handshake.bind(app)) // attach clientside headers to sockets

server.listen(3000)
inspect('server started on port 3000')

