const db = require('../database/models')

module.exports = {
  pizzas: (req, res) => {
    const eternas = db.Pizza.findAll({ where: { categoria_id: 1 } })
    const clasicas = db.Pizza.findAll({ where: { categoria_id: 2 } })
    const tradicionales = db.Pizza.findAll({ where: { categoria_id: 3 } })
    const especiales = db.Pizza.findAll({ where: { categoria_id: 4 } })
    Promise
      .all([eternas, clasicas, tradicionales, especiales])
      .then(([eternas, clasicas, tradicionales, especiales]) => {
        return res.render('pizzas', {
          eternas,
          clasicas,
          tradicionales,
          especiales,
          loading: false
        })
      })
      .catch(error => {
        console.error(error)
        res.render('pizzas', {
          eternas: [],
          clasicas: [],
          tradicionales: [],
          especiales: [],
          loading: true
        })
      })
  }
}
