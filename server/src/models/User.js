module.exports = (sequelize, DataTypes) => { 
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.TEXT,
  })

  User.associate = function (models) {
  }
  return User
}
