module.exports = {
    inject:function(req,res, next) {
        req.io = this
        next()
    },
    handshake: function(socket, next) {
        socket.CUSTOM_HEADERS = socket.handshake.query // from client
        next()
    },
    simpleAuth: function(req, res, next) {
        console.log('example middleware--->', req.app.get('jwt-secret'))
        /**/
        next()
    }
}
