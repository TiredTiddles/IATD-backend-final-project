import "./CourseCard.css";
import EnrollButton from "./EnrollButton/EnrollButton.jsx";

function CourseCard({ title, imageLocation, courseCode, description, duration, link }) {
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
          <EnrollButton link={link} />
        </div>
      </div>
    </article>
  );
}

export default CourseCard;