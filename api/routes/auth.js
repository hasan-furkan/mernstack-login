const express = require("express")
const {body} = require("express-validator")
const sanitize = require('mongo-sanitize');
const {User} = require("../schema/user")
const {Token} = require("../schema/token")
const router = express.Router()
const mail_functions = require("../functions/mail_functions")
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

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
            let createdUser = await newUser.save()
            const token = await new Token({
                userId: createdUser._id,
                token: crypto.randomBytes(32).toString('hex')
            }).save()
            await mail_functions(
                req.body.email,
                "confirm-email",
                {
                    product: "Only Mern Management",
                    name: req.body.fullName,
                    subject: "Only Mern Management Email Verification",
                    token: token.token,
                    id: createdUser._id
                }
            )
            return res.status(201).json({status: true, message: createdUser})
        }catch (e) {
            return res.status(400).send({status: false, message: e.message})
        }
    })
})

router.get("/:id/confirmation/:confirmationCode", async(req, res) => {
       try{
           const user = await User.findOne({_id: req.params.id})
           if (!user) return res.status(404).json({status: false, message: "user not found"})

           const token = await Token.findOne({
               userId: req.params.id,
               token: req.params.confirmationCode
           })
           if (!token) return res.status(404).json({status: false, message: "invalid link"})

            user.set({ status: "Active" })
            await user.save()
            await Token.findByIdAndRemove(token._id)
           res.redirect("http://localhost:3000/verification-email")
       }catch (e) {
           console.log("catch error", e)
       }
})


module.exports = router
