const httpUtil = require('../util/httpUtil')
const { check, validationResult } = require('express-validator/check');

const validation = [
    check('email').isEmail()
]

const post = ( req, res ) => {
    res.status(201).send(req.body)
}

module.exports = {
    post
}