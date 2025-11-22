import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/courses/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading course details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!course) return <div>No course found.</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{course.card.title}</h2>
      <img src={`/assets/${course.card.imageLocation}`} alt={course.card.title} style={{ width: "300px" }} />
      <p><strong>Course Code:</strong> {course.card.courseCode}</p>
      <p><strong>Description:</strong> {course.card.description}</p>
      <p><strong>Duration:</strong> {course.card.duration} hours</p>
      <p><strong>Instructor:</strong> {course.course.instructor}</p>
      <p><strong>Category:</strong> {course.course.category}</p>
      <p><strong>Overview:</strong> {course.course.overview}</p>
      <p><strong>Course Costs:</strong> {course.course.courseCosts}</p>
      <div>
        <strong>Course Content:</strong>
        <ul>
          {course.course.courseContent.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Inline enrollment form (demo only) */}
      <EnrollmentFormInline courseTitle={course.card.title} />
    </div>
  );
}

function EnrollmentFormInline({ courseTitle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <div>Thank you for enrolling in <strong>{courseTitle}</strong>! (Your information hasn't been sent anywhere.)</div>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "2rem", maxWidth: "400px" }}>
      <h3>Enroll in {courseTitle}</h3>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Name:</label><br />
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="email">Email:</label><br />
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>
      <button type="submit" style={{ padding: "0.5rem 1rem" }}>Submit</button>
    </form>
  );
}

export default CourseDetails;
