module.exports = app => {
    // app views
    // app.use('/app', require('./frontend'))    
    app.use('/api', require('./api'))
}