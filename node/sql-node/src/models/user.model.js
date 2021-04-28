module.exports = (sequelize, DataTypes) => {
  const userSchema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  }

  const userOps = {
    timestamps: true,
    tableName: 'users',
  }

  const User = sequelize.define('User', userSchema, userOps)

  User.associate = (db) => {
    db.User.hasMany(db.Product)
    // db.User.hasOne(db.Recipe)
    // db.User.hasOne(db.Profile)
  }

  return User
}
