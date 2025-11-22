import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage/HomePage.jsx";
import CourseDetails from "./components/Pages/CourseDetails.jsx";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* Static course pages removed — use the dynamic course details route */}
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;