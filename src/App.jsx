// filepath: /c:/Users/manna/OneDrive/Desktop/portfolio-website/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <AboutMe />
            <Skills />
            <Projects />
            <Education />
            <Resume />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;