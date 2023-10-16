import dotenv from "dotenv";
import Utility from "../common/utility.js";

dotenv.config();
const dbConfig = {
  HOST: Utility.getEnvVar("HOST"),
  USER: Utility.getEnvVar("USER"),
  PASSWORD: Utility.getEnvVar("PASSWORD"),
  DB: Utility.getEnvVar("DB"),
  dialect: Utility.getEnvVar("DIALECT"),
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
};

export default dbConfig;
