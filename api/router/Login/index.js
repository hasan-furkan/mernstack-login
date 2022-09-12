const express = require("express")
const Register = require("../../schema/Register")

const router = express.Router()

router.post("/verifyLogin", (req, res) => {
    const email = req.params.email

    Register.findOne(email)
        .then((res) => {
            // if(email === res.email) {
            //     console.log("email dogru")
            // }else {
            //     console.log("yanlis")
            // }
            console.log(email)
            console.log(res.email)
        })
})

module.exports = router