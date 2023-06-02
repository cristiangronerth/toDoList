const S =  require ("sequelize");
const { dbp } =require('../src/config')

const db = new S (dbp.database, null, null,{
  host: "localhost",
  dialect: "postgres",
  logging: false
})

module.exports = db

