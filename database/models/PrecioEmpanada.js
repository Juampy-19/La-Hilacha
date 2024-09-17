module.exports = (sequelize, dataTypes) => {
  const alias = 'PrecioEmpanada'
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    categoria_id: {
      type: dataTypes.INTEGER
    },
    precio: {
      type: dataTypes.DECIMAL(10, 2)
    }
  }
  const config = {
    tableName: 'precio_empanada',
    timestamps: false
  }
  const PrecioEmpanada = sequelize.define(alias, cols, config)

  PrecioEmpanada.associate = function (models) {
    PrecioEmpanada.belongsTo(models.CategoriaEmpanada, {
      as: 'CategoriaEmpanada',
      foreignKey: 'categoria_id'
    })
  }

  return PrecioEmpanada
}
