var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const authRouter = require('./routes/auth')
const mongoose = require('./models/db/connnectDb')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
    res.send('Hello Shayan')
})

app.use("/auth", authRouter)

app.listen(3000)