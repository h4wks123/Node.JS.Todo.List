import express from "express";
import displayTodoLists from "./routers/displayTodoList";
import addTodoLists from "./routers/addTodoList";
import { todoListValues } from "./store/todoListValues";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./client/views");

app.use(express.static(__dirname.replace("server", "") + "client/public"));
app.use(express.json());

app.use("/displayTodoList", displayTodoLists);
app.use("/addTodoList", addTodoLists);

app.get("/", (req: any, res: any) => {
  res.render("index", { test: todoListValues });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
