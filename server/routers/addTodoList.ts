import express from "express";
import { todoListValues } from "../store/todoListValues";

let addTodoList = express.Router();

addTodoList.post("/", (req: any, res: any) => {
  const receivedData = req.body.data;
  todoListValues.push(receivedData);
  res.json({ message: "Data received successfully ", data: receivedData });
});

export default addTodoList;