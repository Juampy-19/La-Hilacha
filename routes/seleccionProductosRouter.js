const express = require('express')
const router = express.Router()

const seleccionProductosController = require('../controllers/seleccionProductosController.js')
const empanadas = require('../middlewares/empanadas.js')

router.get('/seleccionProductos', empanadas, seleccionProductosController.seleccionProductos)

module.exports = router
