module.exports = function (sequelize, DataTypes) {   //module.exports exporta; y se importa con "require"
    const EmailErrors = sequelize.define('EmailErrors',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        userType: {
          type: DataTypes.STRING,
          allowNull: false
        },
        emailTemplate: {
          type: DataTypes.STRING,
          allowNull: false
        },
        error: {
          type: DataTypes.TEXT,
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
        tableName: 'email_errors',
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
  
    EmailErrors.associate = function (models) { //Aqui van las relaciones con otros modelos
     
    }
  
    return EmailErrors
  }