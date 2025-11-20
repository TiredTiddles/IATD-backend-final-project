import "../../App.css";
import "./Homepage.css";
import CourseCard from "./CourseCard/CourseCard.jsx";

function HomePage() {
  return(
    <section className="course-container">
      <CourseCard
        title="Cybersecurity"
        imageLocation="course_9734457.jpg"
        courseCode="CS101"
        description="Learn to protect network and systems from cyber attacks. This course covers encryption, firewalls, and threat detection with hands-on labs."
        duration="40"
        link="/CybersecurityCoursePage"
      />
      <CourseCard
        title="C Programming"
        imageLocation="image.webp"
        courseCode="CS105"
        description="Master the C programming language from scratch. Learn about variables, loops, functions, pointers, and building small projects."
        duration="35"
        link="/CCoursePage"
      />
      <CourseCard
        title="Mobile App Development"
        imageLocation="mobile-app-development-img.jpg"
        courseCode="CS130"
        description="Build Android and iOS apps using modern frameworks. Learn about UI design, APIs, and app deployment."
        duration="60"
        link="/MobileAppDevelopmentCoursePage"
      />
      <CourseCard
        title="Python Programming"
        imageLocation="Features_Of_Python_1_f4ccd6d9f7.jpg"
        courseCode="CS120"
        description="Master Python for general-purpose programming, including data structures, functions, file handling, and basic automation."
        duration="50"
        link="/PythonCoursePage"
      />
    </section>
  );
}

export default HomePage;