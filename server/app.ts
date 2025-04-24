const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./client/views");

app.use(express.static(__dirname.replace("server", "") + "client/public"));
app.use(express.json());

const addTodoLists = require("./routers/addTodoList");
app.use("/addTodoList", addTodoLists);

app.get("/", (req: any, res: any) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
