import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
let port = process.env.PORT_SERVER;
app.get("/home", (req, res) => {
  return res.send("Hello");
});
app.listen(port, () => {
  console.log("web is running on port: ", port);
});
