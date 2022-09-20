const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const env = require("dotenv").config()
const register = require("./router/Register")
const login = require("./router/Login")

const app = express()

mongoose.connect(env.parsed.CONNECTION_URL).then(() => console.log("connected to db"))

app.use(bodyparser.json())
app.use(cors())

app.use("/register", register)
app.use("/login", login)

app.listen(env.parsed.PORT, (req, res) => {console.log("server is running port 4000")})
