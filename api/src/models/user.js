module.exports = function (sequelize, DataTypes) {   //module.exports exporta; y se importa con "require"
    const User = sequelize.define('User',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
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
        tableName: 'users',
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
  
    User.associate = function (models) { 
      User.hasMany(models.SentEmail, { as: 'sentEmail', foreignKey: 'userId' })
      User.hasMany(models.UserActivationToken, { as: 'userActivationTokens', foreignKey: 'userId' })
      User.hasMany(models.UserCredential, { as: 'userCredentials', foreignKey: 'userId' })
      User.hasMany(models.UserResetPasswordToken, { as: 'userResetPasswordTokens', foreignKey: 'userId' })
    }
  
    return User
  }