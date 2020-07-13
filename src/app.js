const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.get("/", function (req, res, next) {
  res.send("Hello world");
});
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
