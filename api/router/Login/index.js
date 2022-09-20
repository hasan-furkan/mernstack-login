const express = require("express");
const Register = require("../../schema/Register");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const env = require("dotenv").config();

const router = express.Router();

router.post("/verifyLogin", async (req, res) => {
  try {
    const user = await Register.findOne({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (req.body.email !== user.email)
      return res.status(400).json({ msg: "Email not found" });
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    const userId = user._id;
    const name = user.name;
    const email = user.email;
    const accessToken = jwt.sign(
      { userId, name, email },
      env.parsed.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, name, email },
      env.parsed.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await Register.findOneAndUpdate(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email not found" });
  }
});

module.exports = router;
