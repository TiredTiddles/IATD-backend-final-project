import CourseIntroduction from "./_CourseComponents/CourseIntroduction.jsx";
import CourseBody from "./_CourseComponents/CourseBody.jsx"
import Enroll from "./_CourseComponents/Enroll.jsx";

function MobileAppDevelopmentCoursePage() {
  return(
    <>
      <CourseIntroduction 
        title="Mobile App Development"
        description="Learn to build modern mobile applications for iOS and Android using industry-standard tools and frameworks."
      />
      <CourseBody
        overview="This Mobile App Development course teaches you how to design, build, and deploy mobile apps using native and cross-platform technologies."
        courseContent={[
          "Introduction to Mobile App Architecture",
          "UI/UX Principles for Mobile",
          "Android Development with Kotlin",
          "iOS Development with Swift",
          "Cross-Platform Apps with React Native",
          "Working with APIs & Databases",
          "State Management",
          "Deployment & App Store Publishing"
        ]}
        courseCosts="Standard: $720 • Student: $590 • Professional: $980"
      />
      <Enroll />
    </>
  );
}

export default MobileAppDevelopmentCoursePage;