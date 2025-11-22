const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  card: {
    title: {
      type: String
    },
    imageLocation: {
      type: String
    },
    courseCode: {
      type: String
    },
    description: {
      type: String
    },
    duration: {
      type: Number
    },
    link: {
      type: String
    }
  },
  course: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    overview: {
      type: String
    },
    courseContent: {
      type: [String]
    },
    courseCosts: {
      type: String
    },
    instructor: {
      type: String
    },
    category: {
      type: String
    }
  }
}, { timestamps: true });

module.exports = mongoose.model("Course", CourseSchema);