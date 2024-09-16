module.exports = {
  development: {
    username: 'root',
    // password: null,
    password: 'rootpassword',
    database: 'hilacha_db',
    host: 'mysql-container',
    // host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    // password: null,
    password: 'rootpassword',
    database: 'database_test',
    host: 'mysql-container',
    // host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    // password: null,
    password: 'rootpassword',
    database: 'database_production',
    host: 'mysql-container',
    // host: '127.0.0.1',
    dialect: 'mysql'
  }
}
