import CourseIntroduction from "./_CourseComponents/CourseIntroduction.jsx";
import CourseBody from "./_CourseComponents/CourseBody.jsx"
import Enroll from "./_CourseComponents/Enroll.jsx";

function PythonCoursePage() {
  return(
    <>
      <CourseIntroduction 
        title="Python Programming"
        description="Learn one of the world’s most powerful and beginner-friendly programming languages, used everywhere from web development to AI."
      />
      <CourseBody
        overview="Master Python for general-purpose programming, including data structures, functions, file handling, and basic automation."
        courseContent={[
          "Python Basics",
          "Control Flow",
          "Functions",
          "Object Oriented Programming",
          "Working with files",
          "Using external libraries"
        ]}
        courseCosts="Standard: $480 • Student: $380 • Professional: $760"
      />
      <Enroll />
    </>
  );
}

export default PythonCoursePage;