const express = require('express')
const router = express.Router()
const validations = require('../middlewares/validationFormDatos.js')

const formDatosController = require('../controllers/formDatosController.js')

router.get('/FormDatos', validations, formDatosController.formDatos)

router.post('/confirmarPedido', validations, formDatosController.validationFormDatos)

router.get('/confirmarPedido', formDatosController.confirmarPedido)

// Ruta para eliminar las sessions.
router.get('/limpiarSessions', (req, res) => {
  // Destruir las sessions.
  req.session.destroy(err => {
    if (err) {
      console.log(err)
      res.redirect('/confirmarPedido')
    }
    // Redirigir a la home luego de borrar las sessions.
    res.redirect('/')
  })
})

module.exports = router
