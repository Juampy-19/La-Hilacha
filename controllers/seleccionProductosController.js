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
    // Capturo los datos enviados del formulario.
    const formData = req.body

    // Creo un array para almacenar los productos seleccionados.
    const productosSeleccionados = []

    // Función auxiliar para crear un objeto de producto.
    const productCreate = (tipo, sabor, tamaño, precio, cantidad) => {
      return {
        tipo,
        sabor,
        tamaño,
        precio,
        cantidad,
        subtotal: precio * cantidad
      }
    }

    // Itero sobre los datos del formulario y agrego los productos.
    for (const key in formData) {
      if (key.startsWith('empanada_') && formData[key] === 'on') {
        const sabor = key.split('_')[1]
        const precio = parseInt(formData[`precioEmpanada_${sabor}`] || 0)
        const cantidad = parseInt(formData[`cantidad_${sabor}`] || 0)
        productosSeleccionados.push(productCreate('empanada', sabor, '-', precio, cantidad))
      } else if (key.startsWith('pizza_') && formData[key] === 'on') {
        const sabor = key.split('_')[1]
        const filtroTamaño = key.split('_')[2]
        const precioFinal = key.split('_')[3]
        const tamaño = formData[`tamañoPizza_${sabor}_${filtroTamaño}_${precioFinal}`]
        const precio = parseInt(formData[`precioPizza_${sabor}_${precioFinal}`] || 0)
        const cantidad = parseInt(formData[`cantidad_${sabor}`] || 0)
        productosSeleccionados.push(productCreate('pizza', sabor, tamaño, precio, cantidad))
      }
    }

    // Calculo el total de los productos seleccionados.
    const totalSeleccionado = productosSeleccionados.reduce((acc, producto) => acc + producto.subtotal, 0)

    // Separo los productos seleccionados en empanadas y pizzas.
    const empanadas = productosSeleccionados.filter(item => item.tipo === 'empanada')
    const pizzas = productosSeleccionados.filter(item => item.tipo === 'pizza')

    // Almaceno en las sessions.
    req.session.empanadas = empanadas
    req.session.pizzas = pizzas
    req.session.totalSeleccionado = totalSeleccionado

    // Redirección a la vista de resumen del pedido.
    console.log('Datos del pedido: ', req.session.empanadas, req.session.pizzas, req.session.totalSeleccionado)
    // console.log('Productos seleccionados: ', productosSeleccionados)
    // console.log('Total seleccionado: ', totalSeleccionado)
    // console.log('Req.body: ', req.body)
    res.render('resumenPedido', { empanadas, pizzas, totalSeleccionado })
  }
}
