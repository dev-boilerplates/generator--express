console.log('clientside')
var token = 'this-id'
var socket = io.connect(window.location.href, {
    query: { token }
})