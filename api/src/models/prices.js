module.exports = function (sequelize, DataTypes) {   //module.exports exporta; y se importa con "require"
    const Prices = sequelize.define('Prices',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        basePrice: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        current: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      }, {
        sequelize,
        tableName: 'prices',
        timestamps: true,
        paranoid: true,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [
              { name: 'id' }
            ]
          }
        ]
      }
    )
  
    Prices.associate = function (models) { //Aqui van las relaciones con otros modelos
     
    }
  
    return Prices
  }