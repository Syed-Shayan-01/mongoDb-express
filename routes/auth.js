const User = require('../models/authSchema')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const secret_key = require('../secret/Key');
const jwt = require('jsonwebtoken')


router.post("/signup", async (req, res) => {
  try {

    const { username, email, password } = req.body;
    const hashPass = await bcrypt.hash(password, 12);
    const auth = new User({
      username, email, password: hashPass
    });
    const userCheck = await User.findOne({ email });
    if (userCheck) {
      return res.status(401).json({ message: 'User Already Exist' });
    }
    const response = await auth.save()
    res.status(201).send(response);
  } catch (err) {
    throw err;
  }
})


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    const passCom = await bcrypt.compare(password, !!user && user.password);   //  bcrypt.compare password Method
    if (!passCom) {
      return res.status(401).json({ message: 'Invalid Password' });
    }

    const token = jwt.sign(email, secret_key);
    res.status(200).send(token)
  } catch (err) {
    throw err;
  }
})


module.exports = router;