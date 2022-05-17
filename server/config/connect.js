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

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
  },
  dialectOptions: {
    useUTC: false, // for reading from database
    ssl: {
      // DO NOT DO THIS
      // set up your ca correctly to trust the connection
      rejectUnauthorized: false,
    },
  },
  timezone: "-05:00", // for writing to database
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.sequelize.sync({ force: true }).then(() => console.log("Sync complete"));

export default db;
