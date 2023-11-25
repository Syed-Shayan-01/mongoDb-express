// const { secret } = require("../secret/Key");
// const jwt = require('jsonwebtoken');

// exports.verify = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

//         jwt.verify(token, secret, (err, decoded) => {
//             if (err) {
//                 console.error('Token verification failed:', err);
//                 return res.status(401).json({ message: 'Token verification failed', error: err.message });
//             }

//             // Attach the decoded user information to the request object for later use
//             req.user = decoded;

//             // Call next() to move to the next middleware or route handler
//             next();
//         });
//     } catch (err) {
//         console.error('Error during token verification:', err);
//         res.status(401).json({ message: 'Token verification failed', error: err.message });
//     }
// };
