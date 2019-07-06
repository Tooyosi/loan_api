const userDb = require('../db/users')

let first = {
    name: 'Ren Money',
    description: 'Salary earners discounted loan',
    rate: 3,
    amount: 50000,
    tenure: '1.5 years'
}

let second = {
    name: 'Kia Kia',
    description: 'Easy small Loan',
    rate: 5,
    amount: 5000,
    tenure: '3 months'
}

const loanDb = require('../db/loans')(first, second)

module.exports = {
    get: (req, res) => {
        res.status(200)
        return res.json(loanDb)
    },

    post: (req, res) => {
        let loan, user
        // check for loans and locate by id
        loanDb.forEach((loans) => {
            if (req.body.loanId === loans.id) {
                loan = loans
            }
        })
    
        // check for loggedin users by id
        userDb.forEach((users) => {
            if (req.body.userId === users.id) {
                user = users
            }
        })
    
    
        if (loan !== undefined && user !== undefined) {
            // check if user has a previous loan
            if (user.loan_id) {
                let userLoan
                loanDb.forEach((loans) => {
                    if (user.loan_id === loans.id) {
                        userLoan = loans
                    }
                })
                return res.send(`You are still on ${userLoan.name}`)
            }
    
            // set loan to user profile from selected loan
            user.approvedLoan(loan)
            return res.send(`${loan.name} application successful`)
        } else if (user == undefined) {
    
            res.status(400)
            return res.send(`Kindly Login with a valid user`)
    
        } else if (loan === undefined) {
    
            res.status(400)
            return res.send(`Invalid Loan Selection`)
    
        }
    } 
}