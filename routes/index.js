import express from "express";
import userRouter from "./userRoute.js";
import todoRouter from "./todoRoute.js";
import { constRoutes } from "../common/constants.js";

const Router = express.Router();

const { USER, TODO } = constRoutes;
Router.get("/", () => {
  console.log("ok");
});
Router.use(USER, userRouter);
Router.use(TODO, todoRouter);

export default Router;
