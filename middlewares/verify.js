const { secret } = require("../secret/Key");
const jwt = require('jsonwebtoken');

exports.verify = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        jwt.verify(token, secret, { algorithms: ['HS256'] }, (err, decoded) => {
            if (err) {
                console.error('Token verification failed:', err);
                return res.status(401).json({ message: 'Token verification failed', error: err.message });
            }

            // Attach the decoded user information to the request object for later use
            req.user = decoded;

            // Call next() to move to the next middleware or route handler
            next();
        });
    } catch (err) {
        console.error('Error during token verification:', err);
        res.status(401).json({ message: 'Token verification failed', error: err.message });
    }
};
