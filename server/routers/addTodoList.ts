import { response } from "express";
import { request } from "http";

const router = express.Router();

router.post("/", (req: any, res: any) => {
  const receivedData = request;
  console.log("Data received: ", receivedData);
  response.json({ message: "Data received successfully ", data: receivedData });
});

module.exports = router;
