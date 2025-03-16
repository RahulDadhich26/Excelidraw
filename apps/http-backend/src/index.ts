import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";

const app = express();

app.post("/signup", async (req, res) => {

});
app.post("/signin", async (req, res) => {
  const userId = 1;
const token = jwt.sign({userId}, JWT_SECRET);
  res.json({token});
});
app.post("/room",middleware, async (req, res) => {
    res.json({
        message: "Room created",
    });
});








const port = 3000;
app.listen(port);
