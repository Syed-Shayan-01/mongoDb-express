const { secret } = require("../secret/Key");
const jwt = require('jsonwebtoken');

exports.Verify = async (req, res, next) => {
    try {
        const token = req.headers['authorization'] || req.body.token || req.query.token;

        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        jwt.verify(token, secret, (_, decoded) => {
            res.user = decoded;
            next();
        });
    } catch (err) {
        console.error('Error during token verification:', err);
        res.status(401).json({ message: 'Token verification failed', error: err.message });
    }
};
