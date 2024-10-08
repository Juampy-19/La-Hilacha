module.exports = {
  seleccionProductos: async (req, res) => {
    const { empanadasData, pizzasData, loading } = res.locals

    res.render('seleccionProductos', {
      ...empanadasData,
      ...pizzasData,
      loading
    })
  }
}
