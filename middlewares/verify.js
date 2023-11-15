const { secret } = require("../secret/Key");
const jwt = require('jsonwebtoken')
exports.verify = async (req, res, next) => {
    try {
        const token = req.headers.token;
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                console.error('Token verification failed:', err);
                return res.status(401).json({ message: 'Token verification failed', error: err.message });
            }
            res.status(200).json({ message: 'Protected route accessed', user: decoded });
            next();
        })

    } catch (err) {
        res.status(401).json({ message: 'Token verification failed', error: err.message });
    }
};