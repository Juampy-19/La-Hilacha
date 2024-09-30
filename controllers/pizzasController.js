const db = require('../database/models')

module.exports = {
  pizzas: async (req, res) => {
    const eternas = db.Pizza.findAll({ where: { categoria_id: 1 } })
    const clasicas = db.Pizza.findAll({ where: { categoria_id: 2 } })
    const tradicionales = db.Pizza.findAll({ where: { categoria_id: 3 } })
    const especiales = db.Pizza.findAll({ where: { categoria_id: 4 } })

    const precioEternas = db.PrecioPizza.findAll({ where: { categoria_id: 1 }, include: [{ model: db.TamañoPizza, as: 'TamañoPizza' }] })
    const precioClasicas = db.PrecioPizza.findAll({ where: { categoria_id: 2 }, include: [{ model: db.TamañoPizza, as: 'TamañoPizza' }] })
    const precioTradicionales = db.PrecioPizza.findAll({ where: { categoria_id: 3 }, include: [{ model: db.TamañoPizza, as: 'TamañoPizza' }] })
    const precioEspeciales = db.PrecioPizza.findAll({ where: { categoria_id: 4 }, include: [{ model: db.TamañoPizza, as: 'TamañoPizza' }] })

    Promise
      .all([eternas, clasicas, tradicionales, especiales, precioEternas, precioClasicas, precioTradicionales, precioEspeciales])
      .then(([eternas, clasicas, tradicionales, especiales, precioEternas, precioClasicas, precioTradicionales, precioEspeciales]) => {
        return res.render('pizzas', {
          eternas,
          clasicas,
          tradicionales,
          especiales,
          precioEternas,
          precioClasicas,
          precioTradicionales,
          precioEspeciales,
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
          precioEternas: [],
          precioClasicas: [],
          precioTradicionales: [],
          precioEspeciales: [],
          loading: true
        })
      })
  }
}
