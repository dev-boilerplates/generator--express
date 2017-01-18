var express = require('express'),
    router = express.Router(),
    middleware = require('./middleware')

// add middleware
router.use(middleware.simpleAuth)

// Landing
router.route('/')
  .get(function (req, res){

    res.render('index.jade');

  })
  


module.exports = router;