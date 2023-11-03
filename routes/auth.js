const User = require('../models/authSchema')
const express = require('express');
const router = express.Router();


router.post("/signup", async (req, res) => {
  try {
    const auth = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    const response = await auth.save()

    res.status(200).send(response);
  } catch (err) {
    throw err;
  }
})

module.exports = router;