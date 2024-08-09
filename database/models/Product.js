module.exports = (sequelize, dataTypes) => {
  const alias = 'Product'
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo_producto: {
      type: dataTypes.STRING
    }
  }
  const config = {
    tableName: 'producto',
    timestamps: false
  }

  const Product = sequelize.define(alias, cols, config)

  Product.associate = function (models) {
    Product.hasMany(models.Pizza, {
      as: 'Pizza',
      foreignKey: 'producto_id'
    })

    Product.hasMany(models.Empanada, {
      as: 'Empanada',
      foreignKey: 'producto_id'
    })
  }

  return Product
}
