module.exports = function(socket) {
    console.log(
        '========socket-connected==========', 
        socket.CUSTOM_HEADERS,
        this.app.get('jwt-secret')
    )
    // route logic events
    socket.on('$event', payload => {
        //**//
    })
}