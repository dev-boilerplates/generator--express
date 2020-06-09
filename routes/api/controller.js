const db = require('../actions/db')

// Route Controller methods for /api 

exports.test = async (req, res) => {
    res.json({ status: 200, message: "successful test response"})
}

exports.getId = async (req, res) => {
    const data = await db.myDuffPromise(req.params.id)
    res.json(data)
}
exports.getVIP = async (req, res) => {
    const data = await db.myDuffPromise(req.params.id)
    res.json(data)
}