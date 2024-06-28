module.exports = function (sequelize, DataTypes) {   //module.exports exporta; y se importa con "require"
    const Returns = sequelize.define('Returns',
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
        returnDate: {
          type: DataTypese.DATEONLY,
          allowNull: false
        },
        returnTime: {
          type: DataTypes.TIME,
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
        tableName: 'returs',
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
  
    Returns.associate = function (models) { //Aqui van las relaciones con otros modelos
     
    }
  
    return Returns
  }