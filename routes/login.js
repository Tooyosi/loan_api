const express = require('express');
const middleware = require('../middleware/index')
const loginController = require('../controllers/loginController')
const router = express.Router({ mergeParams: true });

router.post('/', middleware.validateBody, loginController)

module.exports = router