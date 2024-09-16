module.exports = function (sequelize, DataTypes) { // module.exports exporta; y se importa con "require"
  const Fingerprint = sequelize.define('Fingerprint',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      fingerprint: {
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
      tableName: 'fingerprints',
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
          name: 'fingerprints_customerId_fk',
          using: 'BTREE',
          fields: [
            { name: 'customerId' }
          ]
        }
      ]
    }
  )

  Fingerprint.associate = function (models) {
    Fingerprint.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' })
    Fingerprint.hasMany(models.Contact, { as: 'contact', foreignKey: 'fingerprintId' })
  }

  return Fingerprint
}
