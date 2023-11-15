const jwt = require('jsonwebtoken');
const { secret_key } = require('../secret/Key');
exports.Verify = (req, res, next) => {
    const token = req.headers.token;
    jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token verification failed' });
        }
        next();
    });
}