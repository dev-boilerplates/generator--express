// Handle Errors -> next use stauts lookup
module.exports = (err, req, res, next) => {
    // handling server error
    errorLookup[err.status].call(res, err.data)
}

const errorLookup = {
    500(data) {
        this.json(data)
    }
}