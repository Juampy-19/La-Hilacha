module.exports = (sequelize, dataTypes) => {
  const alias = 'PrecioPizza'
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    categoria_id: {
      type: dataTypes.INTEGER
    },
    tamaño_id: {
      type: dataTypes.INTEGER
    },
    precio: {
      type: dataTypes.INTEGER(10)
    }
  }
  const config = {
    tableName: 'precio_pizza',
    timestamps: false
  }
  const PrecioPizza = sequelize.define(alias, cols, config)

  PrecioPizza.associate = function (models) {
    PrecioPizza.belongsTo(models.CategoriaPizza, {
      as: 'CategoriaPizza',
      foreignKey: 'categoria_id'
    })

    PrecioPizza.belongsTo(models.TamañoPizza, {
      as: 'TamañoPizza',
      foreignKey: 'tamaño_id'
    })
  }

  return PrecioPizza
}
