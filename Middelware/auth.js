
function authorization(req, res, next) {
    try {
        const headers = req.headers["authorization"]

        if (headers === undefined) {
            return res.status(404).json("Token doesn't match !")
        } else {
            const bearer = headers.split(" ")

            const token = bearer[1]

            req.token = token
        }
            next()

    } catch (error) {
        return res.json({msg : "Server error !"})
    }
}

module.exports = {authorization}