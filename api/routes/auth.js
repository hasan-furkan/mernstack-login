const express = require("express")
const {body} = require("express-validator")
const sanitize = require('mongo-sanitize');
const {User} = require("../schema/user")
const router = express.Router()
const mail_functions = require("../functions/mail_functions")
const jwt = require("jsonwebtoken");

router.post("/register", [
    body('email').notEmpty(),
    body('password').notEmpty(),
    body('fullName').notEmpty(),
    body('kvkk').notEmpty(),
], (req, res) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    User.findOne({email: sanitize(req.body.email)}, async (err, user) => {
        if(err) return res.status(404).json({status: false, message: err.toString()})
        if(user) return res.status(401).json({status: false, message: 'user already in exists'})
        try{
            const newUser = await new User(req.body);
            const token = jwt.sign({ email: req.body.email }, process.env.SECRET);
            let createdUser = await newUser.save({...newUser, confirmationCode: token})
            await mail_functions(
                req.body.email,
                "confirm-email",
                {
                    product: "Only Learning Management",
                    name: req.body.fullName,
                    subject: "Only Learning Management Email Verification",
                    token: token
                }
            )
            return res.status(201).json({status: true, message: createdUser})
        }catch (e) {
            return res.status(400).send({status: false, message: e.message})
        }
    })
})

router.get("/confirmation/:confirmationCode",  async (req, res) => {
   await User.findOne({confirmationCode: req.params.confirmationCode},  async function (err, user) {
        try{
            if (err) return res.status(404).json({status: false, message: err.toString()})
            if (user) return res.status(404).json({status: false, message: "user not found"})
            await jwt.verify(req.params.confirmationCode, process.env.SECRET)
             await User.updateOne({status: "Active"})
            return res.status(200).json({status: true, message: "user verification successful"})
        }catch (e) {
            console.log("catch error", e)
        }
        res.redirect("http://localhost:3000/login")
    })

})

module.exports = router
