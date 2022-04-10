const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = async (req, res, next) =>{
    // check header
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('Authentification invalid')
    }
    const token = authHeader.split(' ')[1]

    try {
        const playload = jwt.verify(token, process.env.JWT_SECRET)
        // attach the user to the job routes
        req.user = { userId: playload.userId, name: playload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Authentification invalid')
    }
}

module.exports = auth