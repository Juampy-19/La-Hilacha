const express = require('express')
const router = express.Router()

const seleccionProductosController = require('../controllers/seleccionProductosController.js')
const empanadas = require('../middlewares/empanadas.js')
const pizzas = require('../middlewares/pizzas.js')

router.get('/seleccionProductos', empanadas, pizzas, seleccionProductosController.seleccionProductos)
router.post('/seleccionProductos', empanadas, pizzas, seleccionProductosController.resumenCarrito)

module.exports = router
