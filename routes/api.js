const router = require('express').Router(),
    errorHandler = require('../utils/errors'),
    { catchErrors } = require('../utils/middleware'),
    controllers = require('../controllers/api')

router
.get('/:id', catchErrors(controllers.getId))
.use(errorHandler)

module.exports = router