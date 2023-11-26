const { secret } = require("../secret/Key");
const jwt = require('jsonwebtoken');

exports.Verify = async (req, res, next) => {
    try {
        const token = req.headers.token;

        if (!token) {
            res.status(401).json({ message: 'Token not provided' });
        }

        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: 'token verification failed' })
            }
            res.user = decoded;
            next();
        });
    } catch (err) {
        console.error('Error during token verification:', err);
        res.status(401).json({ message: 'Token verification failed', error: err.message });
    }
};
