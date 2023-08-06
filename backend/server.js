const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 5000;

dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
