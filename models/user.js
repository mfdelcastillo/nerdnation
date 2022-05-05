const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please add an email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)