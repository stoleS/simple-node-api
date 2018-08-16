const express = require("express");
const db = require("./db.js");
const UserController = require("./users/UserController");
const app = express();

app.use("/users", UserController);

module.exports = app;
