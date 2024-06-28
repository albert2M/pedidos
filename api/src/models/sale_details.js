module.exports = function (sequelize, DataTypes) {   //module.exports exporta; y se importa con "require"
    const Sale_Details = sequelize.define('Sale_Details',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        saleId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        priceId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        productName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        basePrice: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        quantity: {
          type: DataTypes.INTEGER,
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
        tableName: 'sales_details',
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
  
    Sale_Details.associate = function (models) { //Aqui van las relaciones con otros modelos
     
    }
  
    return Sale_Details
  }