const db = require('../database/models')

const empanadas = async (req, res, next) => {
  try {
    const tradicionales = await db.Empanada.findAll({ where: { categoria_empanada_id: 1 } })
    const canastitas = await db.Empanada.findAll({ where: { categoria_empanada_id: 2 } })
    const premium = await db.Empanada.findAll({ where: { categoria_empanada_id: 3 } })

    const precioTradicionales = await db.PrecioEmpanada.findAll({ where: { categoria_id: 1 } })
    const precioCanastitas = await db.PrecioEmpanada.findAll({ where: { categoria_id: 2 } })
    const precioPremium = await db.PrecioEmpanada.findAll({ where: { categoria_id: 3 } })

    res.locals.empanadasData = {
      tradicionales,
      canastitas,
      premium,
      precioTradicionales,
      precioCanastitas,
      precioPremium
    }

    res.locals.loading = false

    next()
  } catch (error) {
    console.error(error)

    res.locals.loading = true

    res.locals.empanadasData = {
      tradicionales: [],
      canastitas: [],
      premium: [],
      precioTradicionales: [],
      precioCanastitas: [],
      precioPremium: []
    }
    next()
  }
}

module.exports = empanadas
