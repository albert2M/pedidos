module.exports = function (sequelize, DataTypes) {   //module.exports exporta; y se importa con "require"
    const Sale = sequelize.define('Sale',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        customerId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        reference: {
          type: DataTypes.STRING,
          allowNull: false
        },
        totalBasePrice: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        saleDate: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        saleTime: {
          type: DataTypes.TIME,
          allowNull: true
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      }, {
        sequelize,
        tableName: 'Sales',
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
  
    Sale.associate = function (models) { //Aqui van las relaciones con otros modelos
     
    }
  
    return Sale
  }