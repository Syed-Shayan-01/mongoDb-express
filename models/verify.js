const jwt = require('jsonwebtoken')
const secret_key = require('../secret/Key')
const Verify = (req, res, next) => {
    if (req.headers.token) {
        jwt.verify(req.headers.token, secret_key, (err, decoded) => {
            if (err) {
                res.send("Authentication Failed")
            }
            console.log(decoded.email)
        })
    }
    next();
}

module.exports = Verify;