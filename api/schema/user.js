const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    kvkk: {
        type: Boolean,
        required: true,
        default: false
    },
    status: {
        type: String,
        enum: ["Pending", "Active"],
        default: "Pending",
    },
    deleted: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
    loginAttempt: {type: Number, default: 0},
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('user', userSchema)
module.exports = {User: User}
