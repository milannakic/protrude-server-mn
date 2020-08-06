require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

//all my routes here - to be added later

app.use(function (req, res, next) {
  let err = new Error("Not found");
  err.status = 404;
});

app.listen(port, function () {
  console.log("App is running on PORT: " + port);
});