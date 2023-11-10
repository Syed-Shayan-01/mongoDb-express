const jwt = require('jsonwebtoken');
const secret_key = require('../secret/Key');

const Verify = (req, res, next) => {
    const authcookie = req.cookies.token;
    jwt.verify(authcookie, secret_key, (err, data) => {
        if (err) {
            res.sendStatus(403)
        }
        else if (data.user) {
            req.email = data.user;
            next();
        }
    })

}

module.exports = Verify;