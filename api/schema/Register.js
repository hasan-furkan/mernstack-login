const mongoose = require("mongoose")

const RegisterSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phone : {
        type: Number,
        required: true,
        unique: true
    },
    gender : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Register", RegisterSchema)