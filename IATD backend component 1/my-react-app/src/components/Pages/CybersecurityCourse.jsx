import CourseIntroduction from "./_CourseComponents/CourseIntroduction.jsx";
import CourseBody from "./_CourseComponents/CourseBody.jsx"
import Enroll from "./_CourseComponents/Enroll.jsx";

function CybersecurityCourse() {
  return(
    <>
      <CourseIntroduction 
        title="Cybersecurity"
        description="Learn how to protect networks, systems, and data by understanding threats, vulnerabilities, and modern defense strategies."
      />
      <CourseBody
        overview="This Cybersecurity course provides a comprehensive introduction to protecting digital systems, understanding cyber threats, securing networks, and responding to security incidents."
        courseContent={[
          "Introduction to Cyber Threats & Vulnerabilities",
          "Network Security & Firewalls",
          "Cryptography Essentials",
          "Secure System Design",
          "Ethical Hacking & Penetration Testing",
          "Security Operations & Monitoring",
          "Incident Response & Recovery",
          "Cloud Security Fundamentals"
        ]}
        courseCosts="Standard: $680 • Student: $540 • Professional: $920"
      />
      <Enroll />
    </>
  );
}

export default CybersecurityCourse;