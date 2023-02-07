const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const env = require('dotenv').config()
require("dotenv").config();

const auth = require("./routes/auth")

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/auth', auth)

mongoose.connect(process.env.DB, () => console.log("connected to database."))

app.listen(process.env.PORT || 6000, () => console.log(`6000 portu dinleniyor`))
