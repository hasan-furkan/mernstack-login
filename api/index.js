const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
require("dotenv").config();

const auth = require("./routes/auth")

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/auth', auth)

mongoose.connect(process.env.DB, () => console.log("connected to database."))

app.listen(process.env.PORT || 4000, () => console.log(`${process.env.PORT} portu dinleniyor`))
