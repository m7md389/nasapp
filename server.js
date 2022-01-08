const express = require('express');
const api = require('./server/routes/api');
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nasapp', { useNewUrlParser: true })

const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/', api);

const port = process.env.PORT || 3100;
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})
