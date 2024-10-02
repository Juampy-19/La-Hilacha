module.exports = {
  pizzas: async (req, res) => {
    const { pizzasData, loading } = res.locals

    res.render('pizzas', {
      ...pizzasData,
      loading
    })
  }
}
