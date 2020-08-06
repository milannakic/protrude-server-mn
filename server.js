require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
//all my routes here - to be added later

app.use(function (req, res, next) {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(port, function () {
  console.log(`Protrude server is running on PORT: ${port}`);
});
