const mongoose = require('mongoose')

const {Schema, model}  = mongoose;

const userProfileSchema = new Schema ({
    userName: String,
    age: String,
    identity: Number,
    location: Number,
    orientation: Number,
    lookingFor: String,
    profileText: String,
    hobbies: Number,
})

const userProfile = model('User Profile', userProfileSchema)

module.exports = userProfile;