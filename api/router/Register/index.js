const express = require("express");
const Register = require("../../schema/Register");
const bcrypt = require("bcrypt");

const router = express.Router();

router.get("/callUser", (req, res, next) => {
  Register.find()
    .lean()
    .then((user) => {
      return res.status(200).json({ data: user });
    });
});

router.post("/addUser", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ msg: "Password and Confirm Password do not match" });
  }
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Register.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.status(200).json({ msg: "Registration Successful" });
  } catch (e) {
    console.log(e);
  }
});

router.delete("/deleteUser:id", (req, res) => {
  const id = req.params.id;
  Register.findOneAndDelete(id).then((res) => {});
});

router.put("/changeUser:id", (req, res) => {
  const id = req.params.id;
  Register.findOneAndUpdate(id).then((res) => {});
});

module.exports = router;
