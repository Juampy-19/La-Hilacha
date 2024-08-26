const express = require('express')
const router = express.Router()

const seleccionProductosController = require('../controllers/seleccionProductosController.js')

router.get('/seleccionProductos', seleccionProductosController.seleccionProductos)

module.exports = router
