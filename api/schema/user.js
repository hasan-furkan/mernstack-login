const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const config = require("../config")

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    phone: {
      type: String,
      unique: true
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
    confirmationCode: {
        type: String,
        unique: true,
    },
    deleted: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
    loginAttempt: {type: Number},

    },
    {
        timestamps: true
    }
)

userSchema.pre('save', function(next) {
    let user = this
     bcrypt.hash(config.random_secret_key, bcrypt.genSaltSync(config.salt), (err, hash) => {
        if (err) return next(err)
        user.password = hash
        next()
    })
})

const User = mongoose.model('user', userSchema)
module.exports = {User: User}
