/**
 * Route Middleware
 */

// Wraps async Routes and evaluates if there is an error caught
exports.catchErrors = fn => {  
    return (req, res, next) => {
        const routePromise = fn(req, res, next)
        if(routePromise.catch) routePromise.catch(err => next(err))
    }
}

exports.handshake = (socket, next) => {
    socket.CUSTOM_HEADERS = socket.handshake.query // from client
    next()
}
exports.simpleAuth = (req, res, next) => {
    console.log('example middleware--->', req.app.get('jwt-secret'))
    next()
}
