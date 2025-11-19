import CourseIntroduction from "./_CourseComponents/CourseIntroduction.jsx";
import CourseBody from "./_CourseComponents/CourseBody.jsx"
import Enroll from "./_CourseComponents/Enroll.jsx";

function CCoursePage() {
  return(
    <>
      <CourseIntroduction 
        title="C Programming"
        description="Learn one of the world’s most powerful and beginner-friendly programming languages, used everywhere from web development to AI."
      />
      <CourseBody
        overview="Learn the fundamentals of the C programming language, including memory management, pointers, data structures, compilation, and low-level problem solving."
        courseContent={[
          "C Syntax & Program Structure",
          "Variables, Data Types & Operators",
          "Control Flow (if, switch, loops)",
          "Functions & Header Files",
          "Pointers & Memory Management",
          "Arrays, Strings & Structs",
          "Dynamic Memory (malloc, calloc, free)",
          "File I/O",
          "Working with the C Compiler & Build Tools",
          "Debugging with GDB",
          "Intro to Data Structures in C"
        ]}
        courseCosts="Standard: $480 • Student: $380 • Professional: $760"
      />
      <Enroll />
    </>
  );
}

export default CCoursePage;