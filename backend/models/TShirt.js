const mongoose = require("mongoose");

const TShirtSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    enum: ["small", "medium", "large"],
    default: "medium",
  },
  price: {
    type: Number,
    default: 20,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("TShirt", TShirtSchema);