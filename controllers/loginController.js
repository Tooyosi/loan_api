const userModel = require('../db/users');

module.exports = (req, res) => {
    let user
    let err = []
    // checks if there are registered users
    if (userModel.length > 0) {
        // finds user by inputted username and password
        userModel.forEach((dbUser) => {
            if (req.body.username === dbUser.username && req.body.password === dbUser.password) {
                user = dbUser
            } else {
                err.push(`Invalid username or password`)
            }
        })

        // if there are errors, return the errors
        if (err.length > 0) {

            res.status(400)
            return res.send(err)

        }

        res.status(200)
        return res.send(user)

    } else {

        res.status(400)
        return res.send(`No registered User Yet`)

    }
}