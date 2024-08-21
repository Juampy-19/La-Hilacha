const express = require('express')
const router = express.Router()

const formDatosController = require('../controllers/formDatosController.js')

router.get('/FormDatos', formDatosController.formDatos)

module.exports = router
