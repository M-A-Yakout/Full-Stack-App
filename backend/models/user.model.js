const mongoose = require('mongoose');

const { Users } = mongoose;

const userSchema = new Users({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    passwordConfirm: { type: String, required: true }
})

module.exports = mongoose.model('Users', userSchema)