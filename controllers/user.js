const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Auth } = require('../models/authSchema');
const { secret } = require('../secret/Key');

const handleUserSignup = async (req, res) => {
    try {

        const { username, email, password } = req.body;
        const hashPass = await bcrypt.hash(password, 12);
        const auth = new Auth({
            username, email, password: hashPass
        });
        const userCheck = await Auth.findOne({ email });
        if (userCheck) {
            return 'User Already Exist';
        }
        const response = await auth.save()
        res.status(201).send(response);
    } catch (err) {
        throw err;
    }
}


const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Auth.findOne({ email });
        if (!user) {
            return {
                error: "Invalid Email"
            }
        }
        const passCom = await bcrypt.compare(password, !!user && user.password);   //  bcrypt.compare password Method
        if (!passCom) {
            return res.status(401).send('Incorrect Password')
        }
        const token = jwt.sign({ email: user.email }, secret)
        if (token) res.cookie('token', token, { httpOnly: true, secure: true });
        res.status(200).send(token);
    } catch (err) {
        throw err;
    }
}

module.exports = { handleUserSignup, handleUserLogin }