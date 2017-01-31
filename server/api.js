var express = require('express'),
    router = express.Router(),
    middleware = require('./middleware'),
    rootController = require('./rootController')

// add middleware to all routes
router.use(middleware.simpleAuth)

// index 
router.route('/')
  .get(function (req, res) {
    // add specific sockets to this route
    req.io.on('connection', rootController.bind(req))
    res.render('index.jade')
  })
  

module.exports = router