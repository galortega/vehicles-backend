import Sequelize from "sequelize";
import "dotenv/config";

const config = {
  HOST: process.env.HOST,
  USER: process.env.USERDB,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: process.env.DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

console.log(process.env.HOST)
console.log(process.env.USERDB)
console.log(process.env.PASSWORD)
console.log(process.env.DB)
console.log(process.env.DIALECT)

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
  },
  dialectOptions: {
    useUTC: false, // for reading from database
  },
  timezone: "-05:00", // for writing to database
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
