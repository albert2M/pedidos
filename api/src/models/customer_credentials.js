module.exports = function (sequelize, DataTypes) {   //module.exports exporta; y se importa con "require"
    const CustomerCredentials = sequelize.define('CustomerCredentials',
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
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastPasswodChange: {
          type: DataTypes.DATE,
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
        tableName: 'customers_credentials',
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
          },
          {
            name: 'customers_credentials_customerId_fk',
            using: 'BTREE',
            fields: [
              { name: 'customerId' }
            ]
          }
        ]
      }
    )
  
    CustomerCredentials.associate = function (models) { 
      CustomerCredentials.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' })
    }
  
    return CustomerCredentials
  }