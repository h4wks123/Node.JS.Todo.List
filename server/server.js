const mysql = require("mysql");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

app.get("/todo_list_read", (req, res) => {
  const sql = "SELECT * FROM todo_list_db.todo_list";
  con.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed!" });
    }
    res.json(result);
  });
});

app.post("/todo_list_insert", (req, res) => {
  const { todo_list_text } = req.body;
  if (!todo_list_text) {
    return res.status(400).json({ error: "Missing todo_list_text" });
  }

  const sql = "INSERT INTO todo_list_db.todo_list (todo_list_text) VALUES (?)";
  con.query(sql, [todo_list_text], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database insert failed!" });
    }
    res.json({ message: "Inserted successfully", result });
  });
});

app.delete("/todo_list_delete", (req, res) => {
  const { todo_list_id } = req.body;
  if (!todo_list_id) {
    return res.status(400).json({ error: "Missing todo_list_id" });
  }

  const sql = `DELETE FROM todo_list_db.todo_list WHERE todo_list.todo_list_id = ${todo_list_id}`;
  con.query(sql, [todo_list_id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: `Deleting message ID: ${todo_list_id} has failed` });
    }
    res.json({ message: `Deleted ${todo_list_id} successfully!`, result });
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
