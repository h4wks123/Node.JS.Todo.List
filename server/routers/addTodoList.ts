const router = require("express").Router();

router.post("/", (req: any, res: any) => {
  const receivedData = req.body.data;
  console.log("Data received: ", receivedData);
  res.json({ message: "Data received successfully ", data: receivedData });
});

module.exports = router;
