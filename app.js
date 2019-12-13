const connectDB = require('./DB/Connection')
const express = require('express')
const app = express()
const path = require('path')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')

connectDB();
app.use(express.json({ extended: false }))
app.use('/api/userModel', require('./API/User'))

app.listen(5000)