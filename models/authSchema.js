const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});


const Auth = mongoose.model('Auth', authSchema);

module.exports = { Auth };