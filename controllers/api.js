const server = require('../server')
const db = require('../actions/db')

// Route Controller methods for /api 

exports.getId = async (req, res, next) => {
    const data = await db.myDuffPromise(req.params.id)
    res.json(data)
}
exports.getVIP = async (req, res, next) => {
    const data = await db.myDuffPromise(req.params.id)
    res.json(data)
}