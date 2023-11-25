var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth')
const indexRouter = require('./routes/')
const jwt = require('jsonwebtoken');
const mongoose = require('./models/db/connnectDb');
const { Verify } = require('./middlewares/verify')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cookieParser());
app.use("/", Verify, indexRouter)
app.use("/auth", authRouter)

app.listen(3000);