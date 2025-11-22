import "./CourseCard.css";
import { Link } from "react-router-dom";

function CourseCard({ title, imageLocation, courseCode, description, duration, id }) {
  return (
    <article className="card">
      <div className="card-inner">
        <h3>{title}</h3>
        <img src={`/assets/${imageLocation}`} alt={title} />
        <p>{courseCode}</p>
        <hr />
        <p>{description}</p>
        <p>Hours to complete: {duration}</p>
        <div className="enroll-button-container">
          <Link to={`/course/${id}`} className="enroll-button">Enroll Now!</Link>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;