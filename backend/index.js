const express = require("express");
const app = express();
const PORT = 8080;

require("dotenv").config();
const mongoose = require("mongoose");

const TShirt = require("./models/TShirt.js");



app.listen(PORT, () => {
  console.log(`It's alive on http://localhost:${PORT}`)
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))

app.use(express.json());

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "tshirt",
    size: "large"
  })
});

app.post("/tshirt/:id", (req, res) => {
  const {id} = req.params;
  const {logo} = req.body;

  if (!logo) {
    res.status(418).send({message: "We need a logo!"});
  }

  res.send({
    tshirt: `shirt with your ${logo} and ID of ${id}`, 
  })
});