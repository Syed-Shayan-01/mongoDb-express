const jwt = require('jsonwebtoken');
const secret_key = require('../secret/Key');

const Verify = (req, res, next) => {
    const token = req.headers.token;
    if (token) {
        jwt.verify(token, secret_key, function (err) {
            if (err) {
                res.send('Authentication Failed')
            }
        });
        next();
    }

};

module.exports = Verify;