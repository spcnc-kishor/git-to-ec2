import express from "express";
import { getAllToDo } from "../controller/todoController.js";
const Router = express.Router();

Router.get("/get-all-todo", getAllToDo);

export default Router;
