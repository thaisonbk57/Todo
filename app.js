require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const todoRoutes = require("./routes/todo.route");

mongoose
  .connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch(err => {
    console.log("ERROR. Failed to connect to database");
  });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
