const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  card: {
    title: {
      type: String,
      required: true
    },
    imageLocation: {
      type: String,
      required: true
    },
    courseCode: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  course: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    courseContent: {
      type: [String],
      required: true
    },
    courseCosts: {
      type: String,
      required: true
    },
    instructor: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
}, { timestamps: true });

module.exports = mongoose.model("Course", CourseSchema);