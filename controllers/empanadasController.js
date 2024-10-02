module.exports = {
  empanadas: (req, res) => {
    const { empanadasData, loading } = res.locals

    res.render('empanadas', {
      ...empanadasData,
      loading
    })
  }
}
