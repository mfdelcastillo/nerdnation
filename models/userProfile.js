const mongoose = require('mongoose')

const userProfileSchema = mongoose.Schema({
    name: String,
    age: String,
    identity: Number,
    location: Number,
    orientation: Number,
    lookingFor: String,
    profileText: String,
    hobbies: Number,
    userid: {
        type: String,
        unique:true,
        required:true
            }
})

module.exports = mongoose.model('UserProfile', userProfileSchema)