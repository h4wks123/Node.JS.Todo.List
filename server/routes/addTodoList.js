const express = require("express");
const router = express.Router();

router.post("/", (request, response) => {
  const receivedData = request.body.data;
  console.log("Data received: ", receivedData);
  response.json({ message: "Data received successfully", data: receivedData });
});

module.exports = router;
