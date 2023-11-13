const { secret_key } = require("../secret/Key");
const jwt = require('jsonwebtoken')
exports.Verify = (req, res, next) => {
    const token = req.headers.token;
    jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token verification failed' });
        }
        console.log(decoded.email);
        next();
    });
}