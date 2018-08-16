const mongoose = require("mongoose");
const key = require("./config/keys").mongoURI;

mongoose
  .connect(
    key,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));
