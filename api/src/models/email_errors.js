module.exports = function (sequelize, DataTypes) {   //module.exports exporta; y se importa con "require"
    const Email_Errors = sequelize.define('Email_Errors',
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
  
    Email_Errors.associate = function (models) { //Aqui van las relaciones con otros modelos
     
    }
  
    return Email_Errors
  }