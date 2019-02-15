const express = require('express')
const consign = require('consign')
var expressValidator = require('express-validator');

const app = express()

app.use(expressValidator()); 

app.get('/', (req, res) => {
    res.status(200).send()
})

consign({ cwd: 'src', verbose: false })
    .include('controller')
    .then('middlewares')
    .then('routes')
    .then('app.js')
    .into(app)

module.exports = app