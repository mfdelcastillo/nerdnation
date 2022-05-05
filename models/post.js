const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Enter your message here']
    },
    tag: {
        type:String,
        required: true,
        sortOrder: Number
    },
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)