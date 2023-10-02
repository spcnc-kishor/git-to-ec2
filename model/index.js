import dbConfig from "../config/dbConfig.js";
import { Sequelize, DataTypes } from "sequelize";
import UserModel from "./usersModel.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
try {
  await sequelize.authenticate();
  // console.log("CONNECTED TO DB");
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.users = UserModel(sequelize, DataTypes);
  sequelize.sync().then(() => {
    console.log("RE-SYNC DONE");
  });
} catch (error) {
  console.error("Unable to connect to DB --->", error);
}

export default db;
