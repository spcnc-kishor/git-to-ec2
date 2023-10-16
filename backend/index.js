import express from "express";
import "./model/index.js";
import Router from "./routes/index.js";
import { constRoutes } from "./common/constants.js";
import log4js from "log4js";
import cookie from "cookie-parser";
import multer from "multer";
import { checkToken } from "./middleware/auth.js";
const multers = multer();

// log4js.configure({
//   appenders: { cheese: { type: "file", filename: "cheese.log" } },
//   categories: { default: { appenders: ["cheese"], level: "error" } },
// });

// const logger = log4js.getLogger("cheese");
// logger.trace("Entering cheese testing");
// logger.debug("Got cheese.");
// logger.info("Cheese is Comté.");
// logger.warn("Cheese is quite smelly.");
// logger.error("Cheese is too ripe!");
// logger.fatal("Cheese was breeding ground for listeria.");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

let upload = multer({ storage });

const { BASE_API } = constRoutes;
const app = express();
const port = process.env.PORT || 8001;

app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", upload.array("img", 3), (req, res) => {
//   try {
//     console.log(req.file ? req.file : req.files);
//     return res.status(200).json({ msg: true });
//   } catch (error) {
//     console.log(error);
//   }
// });

app.get("/", checkToken, (req, res) => {
  console.log("OK");
});

app.use(BASE_API, Router);

app.listen(port, () => {
  console.log("User microservice running on port - " + port);
});
