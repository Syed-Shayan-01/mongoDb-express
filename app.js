var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors');
var app = express()
const authRouter = require('./routes/auth')
const indexRouter = require('./routes/')
const jwt = require('jsonwebtoken');
const mongoose = require('./models/db/connnectDb');
const Verify = require('./middlewares/verify');
var cookieParser = require('cookie-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.json());
app.use(cookieParser())
app.use(cors())
app.use("/", indexRouter)
app.use("/auth", authRouter)

app.listen(3000);