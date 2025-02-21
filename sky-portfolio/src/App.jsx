import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Homepage from "./pages/Homepage/Homepage";
import ProjectPage from "./pages/ProjectsPage/ProjectsPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import Navbar from "./components/Navbar/Navbar";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const nav = document.querySelector(".navbar-container");
      if (nav) {
        setNavHeight(nav.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/projects"
            element={<ProjectPage marginTop={navHeight} />}
          />
          <Route
            path="/resume"
            element={<ResumePage marginTop={navHeight} />}
          />
          <Route
            path="/contact"
            element={<ContactPage marginTop={navHeight} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
