const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.status(200).send()
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('app started')
})

module.exports = app