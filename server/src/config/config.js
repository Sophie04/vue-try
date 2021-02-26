module.exports = {
    port: process.env.PORT || 8081,
    db: {
      database: process.env.DB_NAME || 'vue-try',
      user: process.env.DB_USER || 'vue-try',
      password: process.env.DB_PASSWORD ||'vue-try',
      options: {
        dialect: process.env.DIALECT || { dialect: 'sqlite' },
        host: process.env.HOST || 'localhost',
        storage: './vue-try.sqlite'
      }
    }
}
