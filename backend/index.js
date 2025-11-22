const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.json());

require("dotenv").config();
const mongoose = require("mongoose");
const Course = require("./models/Course.js");

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error:", err));

// GET - all courses
app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

// GET - courses by ID
app.get("/courses/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({message: "Course not found"});
    res.json(course);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

// POST - Add courses
app.post("/courses", async (req, res) => {
  const { card, course } = req.body;

  if (!card || !course) {
    return res.status(400).json({ message: "Both 'card' and 'course' objects must be provided" });
  }
  const requiredCardFields = ["title", "imageLocation", "courseCode", "description", "duration", "link"];
  const requiredCourseFields = ["title", "description", "overview", "courseContent", "courseCosts", "instructor", "category"];

  for (const field of requiredCardFields) {
    if (!card[field]) {
      return res.status(400).json({ message: `Missing card field: ${field}` });
    }
  }
  for (const field of requiredCourseFields) {
    if (!course[field]) {
      return res.status(400).json({ message: `Missing course field: ${field}` });
    }
  }

  const newCourse = new Course({ card, course });

  try {
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - all courses
app.delete("/courses", async (req, res) => {
  try {
    const result = await Course.deleteMany({});
    res.json({ message: `Deleted ${result.deletedCount} courses` });
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});