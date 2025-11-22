function CourseIntroduction({title, description}) {
  return(
    <div>
      <h2>
        {title}
      </h2>
      <hr class="short-hr" />
      <p>
        {description}
      </p>
    </div>
  );
}

export default CourseIntroduction;