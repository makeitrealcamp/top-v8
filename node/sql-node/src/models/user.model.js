module.exports = (sequelize, DataTypes) => {
  const userSchema = {
    id: {
      autoincrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
  }

  const userOps = {
    timestamps: true,
    tableName: 'users',
  }

  const User = sequelize.define('User', userSchema, userOps)

  return User
}
