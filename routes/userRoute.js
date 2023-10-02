import express from "express";
import { signin, signup } from "../controller/userController.js";
const Router = express.Router();

Router.get("/sigin", signin);
Router.get("/signup", signup);

export default Router;
