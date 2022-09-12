const express = require("express")
const Register = require("../../schema/Register")

const router = express.Router();

router.get("/callUser", (req, res, next) => {
    Register.find().lean().then(user => {
        return res.status(200).json({ data: user });
    })
})

router.post("/addUser", (req, res) => {
    Register.create(req.body, (err, user) => {
    })
})

router.delete("/deleteUser:id", (req, res) => {
    const id = req.params.id
    Register.findOneAndDelete(id)
        .then((res) => {
        })
})

router.put("/changeUser:id", (req,res) => {
    const id = req.params.id
    Register.findOneAndUpdate(id)
        .then((res) => {

        })
})

module.exports = router