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
      // Almaceno los datos del cliente en la session.
      req.session.datosCliente = req.body
      console.log('Formulario válido: ', req.session.datosCliente)
      res.redirect('confirmarPedido')
    }
  },

  confirmarPedido: (req, res) => {
    // Obtendo los datos del cliente guardados en la session.
    const { name, phone, street, altura, piso, dpto, message } = req.session.datosCliente

    // Obtengo los productos seleccionados guardados en la session.
    const empanadas = req.session.empanadas
    const pizzas = req.session.pizzas
    const totalSeleccionado = req.session.totalSeleccionado

    console.log('Pedido Confirmado: ', req.session.datosCliente, req.session.empanadas, req.session.pizzas)

    res.render('confirmarPedido', {
      name,
      phone,
      street,
      altura,
      piso,
      dpto,
      message,
      empanadas,
      pizzas,
      totalSeleccionado
    })
  }
}
