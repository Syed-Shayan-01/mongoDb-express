const jwt = require('jsonwebtoken')
const secret_key = require('../secret/Key')
const Verify = (req, res, next) => {
    const token = req.headers.token;
    if (token) {
        jwt.verify(token, secret_key, function (err, decoded) {
            if (err) {
                res.send('Authentication failed');
            }
            console.log(decoded.email)
        });
    }
    next();

}
module.exports = Verify;