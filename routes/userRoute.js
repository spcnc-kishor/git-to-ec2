import express from "express";
import { signin, signup } from "../controller/userController.js";
import { constRoutes } from "../common/constants.js";

const Router = express.Router();
const { SIGNIN, SIGNUP } = constRoutes;

Router.post(SIGNIN, signin);
Router.post(SIGNUP, signup);

export default Router;
