const mongoose = require('mongoose')
const { Schema } = mongoose;

const authSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true, minlength: 6 }
});


const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;