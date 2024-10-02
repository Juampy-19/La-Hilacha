const db = require('../database/models')

const pizzas = async (req, res, next) => {
  try {
    const eternas = await db.Pizza.findAll({ where: { categoria_id: 1 } })
    const clasicas = await db.Pizza.findAll({ where: { categoria_id: 2 } })
    const tradicionales = await db.Pizza.findAll({ where: { categoria_id: 3 } })
    const especiales = await db.Pizza.findAll({ where: { categoria_id: 4 } })

    const precioEternas = await db.PrecioPizza.findAll({ where: { categoria_id: 1 }, include: [{ model: db.TamañoPizza, as: 'TamañoPizza' }] })
    const precioClasicas = await db.PrecioPizza.findAll({ where: { categoria_id: 2 }, include: [{ model: db.TamañoPizza, as: 'TamañoPizza' }] })
    const precioTradicionales = await db.PrecioPizza.findAll({ where: { categoria_id: 3 }, include: [{ model: db.TamañoPizza, as: 'TamañoPizza' }] })
    const precioEspeciales = await db.PrecioPizza.findAll({ where: { categoria_id: 4 }, include: [{ model: db.TamañoPizza, as: 'TamañoPizza' }] })

    res.locals.pizzasData = {
      eternas,
      clasicas,
      tradicionales,
      especiales,
      precioEternas,
      precioClasicas,
      precioTradicionales,
      precioEspeciales
    }

    res.locals.loading = false

    next()
  } catch (error) {
    console.error(error)

    res.locals.loading = true

    res.locals.pizzasData = {
      eternas: [],
      clasicas: [],
      tradicionales: [],
      especiales: [],
      precioEternas: [],
      precioClasicas: [],
      precioTradicionales: [],
      precioEspeciales: []
    }

    next()
  }
}

module.exports = pizzas
