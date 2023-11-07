var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors');
var app = express()
const authRouter = require('./routes/auth')
const indexRouter = require('./routes/')
const jwt = require('jsonwebtoken');
const mongoose = require('./models/db/connnectDb');
const Verify = require('./middlewares/verify');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())
app.use("/", Verify, indexRouter)
app.use("/auth", authRouter)

app.listen(8000);