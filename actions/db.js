// FAKE DB CRUD actions
exports.myDuffPromise = target => {
    console.log("looking for", target)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({status:500, data: "hooray"})
        }, 500)
    })
}