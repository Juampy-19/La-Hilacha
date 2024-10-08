module.exports = {
  seleccionProductos: async (req, res) => {
    const { empanadasData, loading } = res.locals

    res.render('seleccionProductos', {
      ...empanadasData,
      loading
    })
  }
}
