import express from "express";
import { config } from "dotenv";

const app = express();

const port = process.env.PORT || 3333;

app.get("/test", (req, res) => {
  res.status(200).json("WORKED!!!");
});

app.listen(port, () => console.log("App running on port " + port));
