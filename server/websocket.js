var actions = {}

module.exports = {
    io: null,
    socket: null,
    init(io) {
        this.io = io
        this.io.on('connection', socket => {
            console.log('client connected');
            this.socket = socket
            attachListeners.call(this)
            client(socket)
        })
    },
    emit(name, data) {
        if(!this.socket) return
        this.socket.emit(name, data)
    },
    listen(name, callback) {
        actions[name] = callback
    }
}
// modular socket logic from 
function attachListeners() {
    for(let trigger in actions) {
        this.socket.on(trigger, data => {
            actions[trigger](data)
        })
    }
}
// main app socket logic
function client(socket) {
    socket.on('register', data => {
        //***//
    })
}