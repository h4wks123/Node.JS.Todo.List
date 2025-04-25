import express from "express";
import { todoListValues } from "../store/todoListValues";

let displayTodoList = express.Router();

displayTodoList.get("/", (req: any, res: any) => {
  res.send({ data: todoListValues });
});

export default displayTodoList;