const express = require('express')
const router = express.Router()

const empanadasController = require('../controllers/empanadasController.js')

router.get('/empanadas', empanadasController.empanadas)

module.exports = router
