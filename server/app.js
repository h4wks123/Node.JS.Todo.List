const express = require("express");
const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.set("views", "./client/views");

// Allows static configuration for public files
app.use(express.static(__dirname.replace("/server", "") + "/client/public"));

app.use(express.json());

const addTodoList = require("./routes/addTodoList");
app.use("/addTodoList", addTodoList);

// Renders view page from ejs file
app.get("/", (req, res) => {
  res.render("login", { nigger: "Hello World!" });
});

// Runs server with port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
