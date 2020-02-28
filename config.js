module.exports = {
  api: {
    url: 'http://localhost',
    port: process.env.PORT,
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASS,
    port: +process.env.MYSQL_PORT,
  },
};