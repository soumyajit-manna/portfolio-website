// filepath: /c:/Users/manna/OneDrive/Desktop/portfolio-website/src/App.jsx
import React from "react";
import "./index.css"; // 👈 Import global CSS
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

import { VideoProvider } from "./context/VideoContext";

const App = () => {
  return (
    <VideoProvider>
      <div className="bg-portfolio dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </VideoProvider>
  );
};

export default App;
