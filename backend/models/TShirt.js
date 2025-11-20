const mongoose = require("mongoose");

const TShirtSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
}, {timestamps: true});

module.exports = mongoose.model("TShirt", TShirtSchema);