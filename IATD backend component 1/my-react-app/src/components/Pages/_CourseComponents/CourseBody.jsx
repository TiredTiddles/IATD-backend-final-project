function CourseBodyOverview({overview, courseContent, courseCosts}) {
  return(
    <section id="overview" className="overview">
      <div>
        <h3>Overview</h3>
        <p className="overview">
          {overview}
        </p>
      </div>
      <div className="course-content">
        <h3>Course Content</h3>
        <ul>
          {courseContent.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="course-costs">
        <h3>Course Costs</h3>
        {courseCosts}
      </div>
    </section>
  )
}

export default CourseBodyOverview;