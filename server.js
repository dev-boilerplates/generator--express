const express = require('express'), 
    jade = require('jade'),
    bodyParser = require('body-parser'),
    inspect = require('eyespect').inspector(),
    Router = require('./routes/router'),
    session = require('express-session'),
    config = require('./config')

const app = express(),
    server = require('http').createServer(app)
    io = require('socket.io')(server)

app
  .set('view engine', jade)
  .set('jwt-secret', 'monster mash')
  .locals.pretty = true

// middleware
app
  .use(express.static(`${__dirname}/public`))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(session(config.session))


// routes
Router(app)

// io.use(middleware.handshake.bind(app)) // attach clientside headers to sockets

server.listen(config.port)
inspect(`server started on port ${config.port}`)

exports.io = io
exports.app = app
