const { validationResult } = require('express-validator')

module.exports = {
  formDatos: (req, res) => {
    res.render('formDatos')
  },

  validationFormDatos: async (req, res) => {
    const resultValidation = validationResult(req)

    if (resultValidation.errors.length > 0) {
      return res.render('formDatos', {
        errors: resultValidation.mapped(),
        oldData: req.body
      })
    } else {
      console.log('Formulario válido: ', req.body)
      res.redirect('confirmarPedido')
    }
  },

  confirmarPedido: (req, res) => {
    const { name, phone, street, altura, piso, dpto, message } = req.body

    console.log('Pedido Confirmado: ', req.body)

    res.render('confirmarPedido', {
      name,
      phone,
      street,
      altura,
      piso,
      dpto,
      message
    })
  }
}
