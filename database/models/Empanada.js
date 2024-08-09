module.exports = (sequelize, dataTypes) => {
  const alias = 'Empanada'
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    producto_id: {
      type: dataTypes.INTEGER
    },
    sabor: {
      type: dataTypes.STRING
    },
    categoria_empanada_id: {
      type: dataTypes.INTEGER
    }
  }
  const config = {
    tableName: 'empanadas',
    timestamps: false
  }
  const Empanada = sequelize.define(alias, cols, config)

  Empanada.associate = function (models) {
    Empanada.belongsTo(models.Product, {
      as: 'Product',
      foreignKey: 'producto_id'
    })

    Empanada.belongsTo(models.CategoriaEmpanada, {
      as: 'CategoriaEmpanada',
      foreignKey: 'categoria_empanada_id'
    })

    Empanada.hasOne(models.PrecioEmpanada, {
      as: 'PrecioEmpanada',
      foreignKey: 'categoria_empanada_id'
    })
  }

  return Empanada
}
