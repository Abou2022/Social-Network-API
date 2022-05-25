//
const express = require("express");
const routes = require("./routes");
const db = require("./config/connection");
const mongoose = require("mongoose");

const PORT = process.env.port || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
  });
});
