import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className="bg-white p-4 shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <a href="#home" className="text-black">&lt;SOUMYAJIT MANNA/&gt;</a>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className={`block py-2 px-3 rounded-md text-base font-medium ${activeSection === 'home' ? 'bg-blue-500 text-white' : 'text-black hover:bg-blue-500 hover:text-white'}`}>Home</a>
                    <a href="#about" className={`block py-2 px-3 rounded-md text-base font-medium ${activeSection === 'about' ? 'bg-blue-500 text-white' : 'text-black hover:bg-blue-500 hover:text-white'}`}>About</a>
                    <a href="#skills" className={`block py-2 px-3 rounded-md text-base font-medium ${activeSection === 'skills' ? 'bg-blue-500 text-white' : 'text-black hover:bg-blue-500 hover:text-white'}`}>Skills</a>
                    <a href="#projects" className={`block py-2 px-3 rounded-md text-base font-medium ${activeSection === 'projects' ? 'bg-blue-500 text-white' : 'text-black hover:bg-blue-500 hover:text-white'}`}>Projects</a>
                    <a href="#education" className={`block py-2 px-3 rounded-md text-base font-medium ${activeSection === 'education' ? 'bg-blue-500 text-white' : 'text-black hover:bg-blue-500 hover:text-white'}`}>Education</a>
                    <a href="#contact" className={`block py-2 px-3 rounded-md text-base font-medium ${activeSection === 'contact' ? 'bg-blue-500 text-white' : 'text-black hover:bg-blue-500 hover:text-white'}`}>Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40">
                    <ul className="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
                        <a href="#home" onClick={closeMenu} className={`hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium mt-1 ${activeSection === 'home' ? 'bg-blue-500 text-white' : 'text-black hover:text-white'}`}><li>Home</li></a>
                        <a href="#about" onClick={closeMenu} className={`hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium mt-1 ${activeSection === 'about' ? 'bg-blue-500 text-white' : 'text-black hover:text-white'}`}><li>About</li></a>
                        <a href="#skills" onClick={closeMenu} className={`hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium mt-1 ${activeSection === 'skills' ? 'bg-blue-500 text-white' : 'text-black hover:text-white'}`}><li>Skills</li></a>
                        <a href="#projects" onClick={closeMenu} className={`hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium mt-1 ${activeSection === 'projects' ? 'bg-blue-500 text-white' : 'text-black hover:text-white'}`}><li>Projects</li></a>
                        <a href="#education" onClick={closeMenu} className={`hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium mt-1 ${activeSection === 'education' ? 'bg-blue-500 text-white' : 'text-black hover:text-white'}`}><li>Education</li></a>
                        <a href="#contact" onClick={closeMenu} className={`hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium mt-1 ${activeSection === 'contact' ? 'bg-blue-500 text-white' : 'text-black hover:text-white'}`}><li>Contact</li></a>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;