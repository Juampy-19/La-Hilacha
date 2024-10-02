const express = require('express')
const router = express.Router()

const empanadasController = require('../controllers/empanadasController.js')
const empanadas = require('../middlewares/empanadas.js')

router.get('/empanadas', empanadas, empanadasController.empanadas)

module.exports = router
