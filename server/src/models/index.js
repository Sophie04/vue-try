const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize({
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
  option: config.db.option,
  dialect : 'sqlite'
})

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file != 'index.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db 

