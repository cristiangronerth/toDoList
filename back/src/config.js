const { config } = require('dotenv')
config()

module.exports = {
  dbp: {
    database: process.env.DB_DATABASE,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // port : process.env.DB_PORT,
    // host: process.env.DB_HOST,
  },
  port:4000
}


/* 
module.exports = {
  SECRET: process.env.TOKEN_SECRET,
  dbName: process.env.DB_NAME,
  passwordPostgres: process.env.PASSWORD_POSTGRES,
  userPostgres: process.env.USER_POSTGRES,
  port: process.env.PORT
};

*/