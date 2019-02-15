const express = require('express')
const consign = require('consign')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send()
})

consign( { cwd: 'src', verbose: false } )
    .include('controller')
    .then('app.js')
    .into(app)

module.exports = app