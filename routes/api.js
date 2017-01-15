var express = require('express'),
    router = express.Router();

// Landing
router.route('/')
  .get(function (req, res){

    res.render('index.jade');

  })
  


module.exports = router;