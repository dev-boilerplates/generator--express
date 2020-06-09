const router = require('express').Router(),
    errorHandler = require('../utils/errors'),
    { catchErrors } = require('../utils/middleware'),
    controller = require('./controller')

router
.get('/', catchErrors(controller.test))
.get('/:id', catchErrors(controller.getId))
.use(errorHandler)

module.exports = router