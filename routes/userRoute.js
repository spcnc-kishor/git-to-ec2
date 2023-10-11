import express from "express";
import { signin, signout, signup } from "../controller/userController.js";
import { constRoutes } from "../common/constants.js";
import { checkToken } from "../middleware/auth.js";

const Router = express.Router();
const { SIGNIN, SIGNUP, SIGNOUT } = constRoutes;

Router.post(SIGNIN, signin);
Router.post(SIGNUP, signup);
Router.post(SIGNOUT, signout);

export default Router;
