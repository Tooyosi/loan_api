const should = require('should')
const sinon = require('sinon')
const loanDb = require('../db/loans')
const loansController = require('../controllers/loansController')
const loginController = require('../controllers/loginController')
const registerController = require('../controllers/registerController')

const res = {
    status: sinon.spy(),
    send: sinon.spy(),
    json: sinon.spy()
}
describe('Controllers Test: ', () => {
    describe('POST Register', () => {
        it('should register a new user to the application', () => {
            let req = {
                body: {
                    firstName : "Unit",
                    lastName : "Tester",
                    username : "unit01",
                    age : "23",
                    sex : "female",
                    occupation : "tester",
                    maritalStatus : "single",
                    income : "50000",
                    state : "tests",
                    password : "test",
                    confirmPassword : "test"
                },
                headers: {
                    host: 'localhost/3000'
                }
            }

            let controller = registerController(req, res)
            res.status.calledWith(200).should.equal(true)
            res.json.calledWith('Welcome Unit Tester kindly login at localhost:3000/login')
        })
    }),

    describe('POST login', () => {
        it('should login already registered user', () => {
            let req = {
                body: {
                    username : "unit01",
                    password : "test"
                }
            }

            let controller = loginController(req, res)
            res.status.calledWith(200).should.equal(true)
        })
    }),

    describe('Get loans', () => {
        it('should return all loans in the db', () => {
            let req = {}

            let controller = loansController.get(req, res)
            res.status.calledWith(200).should.equal(true)
        })
    }),

    describe('POST loans', () => {
        it('should not allow invalid user and loan selection', () => {
            let req = {
                body: {
                    userId : "g1FNBBWZFFJWa",
                    loanId : "BM4It2hJaQiiB"
                }
            }

            let controller = loansController.post(req, res)
            res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`)
            res.send.calledWith('Kindly Login with a valid user').should.equal(true)
        })
    })
})