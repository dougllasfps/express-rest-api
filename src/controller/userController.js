const httpUtil = require('../util/httpUtil')

const post = ( req, res ) => {
    res.status(201).send(req.body)
}

module.exports = {
    post
}