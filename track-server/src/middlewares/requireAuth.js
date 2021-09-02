const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    
    if (! authorization){
        return res.status(401).send({ error: 'You must be Logged In' })
    }

    const token = authorization.replace('Bearer ', '');

    jwt.verify(token, 'My_Secret_Key', async (err, payload) => {
        if (err){
            return res.status(401).send({ error: 'You must be Logged In' })
        }

        const { userId } = payload
        const user = await User.findById(userId)

        req.user = user
        next()
    })
}