var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const authRouter = require('./routes/auth')
const indexRouter = require('./routes/')
const mongoose = require('./models/db/connnectDb')
const Verify = require('./middlewares/verify')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", Verify, indexRouter)
app.use("/auth", authRouter)

app.listen(3000);