const randomString = require('randomstring')
class User {
    constructor(params){
        this.id = randomString.generate(13)
        this.firstName = params.firstName
        this.lastName = params.lastName
        this.age = params.age
        this.sex = params.sex
        this.occupation = params.occupation
        this.maritalStatus = params.maritalStatus
        this.income = params.income
        this.state = params.state 
        this.username = params.username
        this.password = params.password 
        this.confirmPassword = params.confirmPassword 
    }

    approvedLoan(loan){
        this.loan_id = loan.id
    }
}

module.exports = User;