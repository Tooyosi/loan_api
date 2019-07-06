const randomString = require('randomstring')

class Loans {
    constructor(param) {
        this.id = randomString.generate(13)
        this.name = param.name
        this.description = param.description
        this.rate = param.rate
        this.amount = param.amount
        this.tenure = param.tenure
    }
}

module.exports = (param1, param2) => {
    const renMoney = new Loans(param1)
    const kiaKia = new Loans(param2)
    return [
        renMoney,
        kiaKia
    ]
} 