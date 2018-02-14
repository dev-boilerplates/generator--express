module.exports = {
    database: "Node-FB-SDK",
    port: 8080,
    login: "4ef31ba5822d5e1998228a1115feaa59",        
    secret: "sweatlab",
    session: {
        name: "ScanLabProjects",
        secret: 'scanlab sesh',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 24, secure: false }
    }
}