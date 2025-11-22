const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageLocation: {
    type: String,
  },
  courseCode: {
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
  },
  link: {
    type: String,
    required: true,
  }
}, {timestamps: true});

module.exports = mongoose.model("Course", CourseSchema);