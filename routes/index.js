import express from "express";
import userRouter from "./userRoute.js";
import todoRouter from "./todoRoute.js";
const Router = express.Router();

Router.use("/user", userRouter);
Router.use("/todo", todoRouter);

export default Router