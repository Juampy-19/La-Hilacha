module.exports = {
  seleccionProductos: async (req, res) => {
    const { empanadasData, pizzasData, loading } = res.locals

    res.render('seleccionProductos', {
      ...empanadasData,
      ...pizzasData,
      loading
    })
  },

  resumenCarrito: async (req, res) => {
    // Capturo los datos enviados del formulario
    const productosSeleccionados = req.body

    if (!productosSeleccionados || Object.keys(productosSeleccionados).length === 0) {
      console.log('No se seleccionó ningun producto')
      return res.redirect('seleccionProductos')
    } else {
      // Filtro las empanadas seleccionadas
      const empanadasSeleccionadas = Object.keys(productosSeleccionados).filter(key => key.startsWith('empanada_'))
      const cantidadEmpanadas = empanadasSeleccionadas.map(emp => {
        const sabor = emp.replace('empanada_', '')
        const cantidad = productosSeleccionados[`cantidad_${sabor}`]
        return { sabor, cantidad }
      })

      // Filtro las pizzas seleccionadas
      const pizzasSeleccionadas = Object.keys(productosSeleccionados).filter(key => key.startsWith('pizza_'))
      const cantidadPizzas = pizzasSeleccionadas.map(pizza => {
        const sabor = pizza.replace('pizza_', '')
        const cantidad = productosSeleccionados[`cantidad_${sabor}`]
        return { sabor, cantidad }
      })

      console.log('Datos del formulario: ', productosSeleccionados)
      res.render('resumenPedido', { cantidadEmpanadas, cantidadPizzas })
    }
  }
}
