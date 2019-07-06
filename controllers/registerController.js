const UserModel = require('../models/user')
const userDb = require('../db/users')

module.exports = (req, res) => {
    if (req.body.password !== req.body.confirmPassword) {
        return res.status(400).send('Password dont match')
    }
    // create new user from the incoming payload
    let user = new UserModel(req.body);

    // save in the database
    userDb.push(user)
    res.status(200)
    return res.json(`Welcome ${user.firstName} ${user.lastName} kindly login at ${req.headers.host}/login`)
}