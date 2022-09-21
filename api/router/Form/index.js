const express = require("express");
const Contact = require("../../schema/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, country, gender } = req.body;
  try {
    await Contact.create({
      name: name,
      email: email,
      phone: phone,
      country: country,
      gender: gender,
    });
    res.status(200).json("Transaction successful");
  } catch (e) {
    console.log(e);
    res.status(404).json("Unknown Error");
  }
});

router.get("/", (req, res) => {
  Contact.find()
    .lean()
    .then((contact) => {
      res.status(200).json({ data: contact });
    });
});

module.exports = router;
