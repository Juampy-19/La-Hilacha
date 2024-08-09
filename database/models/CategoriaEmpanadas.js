module.exports = (sequelize, dataTypes) => {
  const alias = 'CategoriaEmpanada'
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    categoria: {
      type: dataTypes.STRING
    }
  }
  const config = {
    tableName: 'categoria_empanada',
    timestamps: false
  }
  const CategoriaEmpanada = sequelize.define(alias, cols, config)

  CategoriaEmpanada.associate = function (models) {
    CategoriaEmpanada.belongsTo(models.Empanada, {
      as: 'Empanada',
      foreignKey: 'categoria_empanada_id'
    })

    CategoriaEmpanada.hasMany(models.PrecioEmpanada, {
      as: 'PrecioEmpanada',
      foreignKey: 'categoria_id'
    })
  }

  return CategoriaEmpanada
}
