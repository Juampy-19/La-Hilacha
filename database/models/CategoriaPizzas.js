module.exports = (sequelize, dataTypes) => {
  const alias = 'CategoriaPizza'
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
    tableName: 'categoria_pizza',
    timestamps: false
  }
  const CategoriaPizza = sequelize.define(alias, cols, config)

  CategoriaPizza.associate = function (models) {
    CategoriaPizza.belongsTo(models.Pizza, {
      as: 'Pizza',
      foreignKey: 'categoria_id'
    })

    CategoriaPizza.hasMany(models.PrecioPizza, {
      as: 'PrecioPizza',
      foreignKey: 'categoria_id'
    })
  }

  return CategoriaPizza
}
