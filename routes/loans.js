const express = require('express')
const router = express.Router({ mergeParams: true })
const middleware = require('../middleware/index')
const loansController = require('../controllers/loansController')

router.get('/', loansController.get)

router.post('/', middleware.validateBody, loansController.post)

module.exports = router;