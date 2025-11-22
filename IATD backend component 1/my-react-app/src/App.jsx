import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage/HomePage.jsx";
import PythonCoursePage from "./components/Pages/PythonCoursePage.jsx";
import CCoursePage from "./components/Pages/CCourse.jsx";
import CybersecurityCoursePage from "./components/Pages/CybersecurityCourse.jsx";
import MobileAppDevelopmentCoursePage from "./components/Pages/MobileAppDevelopmentCourse copy.jsx";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/PythonCoursePage" element={<PythonCoursePage />}/>
        <Route path="/CCoursePage" element={<CCoursePage />}/>
        <Route path="/CybersecurityCoursePage" element={<CybersecurityCoursePage />}/>
        <Route path="/MobileAppDevelopmentCoursePage" element={<MobileAppDevelopmentCoursePage />}/>
      </Routes>
    </Router>
  );
}

export default App;