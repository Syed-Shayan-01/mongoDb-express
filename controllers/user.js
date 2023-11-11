const User = require('../models/authSchema')
const bcrypt = require('bcryptjs');
const secret_key = require('../secret/Key');
const jwt = require('jsonwebtoken');
const handleUserSignup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashPass = await bcrypt.hash(password, 12);
    const auth = new User({
        username, email, password: hashPass
    });
    const userCheck = await User.findOne({ email });
    if (userCheck) {
        return 'User Already Exist';
    }
    const response = await auth.save()
    res.status(201).send(response);
}


const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return {
                error: "Invalid Email"
            }
        }
        const passCom = await bcrypt.compare(password, !!user && user.password);   //  bcrypt.compare password Method
        if (!passCom) {
            return res.status(401).send('Incorrect Password')
        }
        const token = jwt.sign({ email: user.email }, secret_key)
        res.status(200).send(token)
    } catch (err) {
        throw err;
    }
}

const Verify = (req, res, next) => {
    jwt.verify(req.headers.token, secret_key, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token verification failed' });
      }
      next();
    });
  };
  

module.exports = { handleUserSignup, handleUserLogin, Verify }