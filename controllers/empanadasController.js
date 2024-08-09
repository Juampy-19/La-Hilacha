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
  }
}
