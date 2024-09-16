const db = require('../database/models')

module.exports = {
  empanadas: (req, res) => {
    const tradicionales = db.Empanada.findAll({
      where: {
        categoria_empanada_id: 1
      }
    })

    const canastitas = db.Empanada.findAll({
      where: {
        categoria_empanada_id: 2
      }
    })

    const premium = db.Empanada.findAll({
      where: {
        categoria_empanada_id: 3
      }
    })
    Promise
      .all([tradicionales, canastitas, premium])
      .then(([tradicionales, canastitas, premium]) => {
        return res.render('empanadas', { tradicionales, canastitas, premium })
      })
  },

  preciosEmpanadas: (req, res) => {
    const precioTradicionales = db.PrecioEmpanada.findAll({
      where: {
        categoria_id: 1
      }
    })

    const precioCanastitas = db.PrecioEmpanada.findAll({
      where: {
        categoria_id: 2
      }
    })

    const precioPremium = db.PrecioEmpanada.findAll({
      where: {
        categoria_id: 3
      }
    })
    Promise
      .all([precioTradicionales, precioCanastitas, precioPremium])
      .then(([precioTradicionales, precioCanastitas, precioPremium]) => {
        return res.render('empanadas', { precioTradicionales, precioCanastitas, precioPremium })
      })
  }
}
