import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Homepage.css";
import CourseCard from "./CourseCard/CourseCard.jsx";

function HomePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/courses")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="course-container">
      {courses.map((course) => (
        <CourseCard
          key={course._id}
          id={course._id}
          title={course.card.title}
          imageLocation={course.card.imageLocation}
          courseCode={course.card.courseCode}
          description={course.card.description}
          duration={course.card.duration}
          link={course.card.link}
        />
      ))}
    </section>
  );
}

export default HomePage;