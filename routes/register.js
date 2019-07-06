const express = require('express');
const middleware = require('../middleware/index')
const registerController = require('../controllers/registerController')
const router = express.Router({mergeParams: true})

router.post('/', middleware.validateBody, registerController)

module.exports = router;