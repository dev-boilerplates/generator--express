#__PROJECTNAME

Start Server
    
    nodemon server/app.js


Develop JS and CSS

    gulp

===

By including `sockets = require(./websocket)` you can pre set up `socket.io` event listeners, which will get instantiated once a connection has been made with the server. 

    ``` 
    sockets.listen('from-client', function(data) {
        console.log('recieved from client', data)
    })