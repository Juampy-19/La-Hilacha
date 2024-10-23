const express = require('express')
const router = express.Router()
const validations = require('../middlewares/validationFormDatos.js')

const formDatosController = require('../controllers/formDatosController.js')

router.get('/FormDatos', validations, formDatosController.formDatos)

router.post('/formDatos', validations, formDatosController.validationFormDatos)

router.post('/confirmarPedido', formDatosController.confirmarPedido)

module.exports = router
