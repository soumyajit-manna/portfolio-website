import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import ToggleTheme from "./ToggleTheme"; // <-- Dark/Light Mode toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [navHeight, setNavHeight] = useState(70);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Certifications", to: "achievements" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  // Measure navbar height
  useEffect(() => {
    const measure = () => {
      const h = navRef.current?.offsetHeight || 70;
      setNavHeight(h);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Active section observer
  useEffect(() => {
    const sections = navLinks
      .map(
        (l) =>
          document.getElementById(l.to) || document.getElementsByName(l.to)[0]
      )
      .filter(Boolean);

    if (!sections.length) return;

    const handleIntersect = (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) {
        const id =
          visible[0].target.id || visible[0].target.getAttribute("name");
        if (id) setActive(id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: `-${navHeight + 8}px 0px -40% 0px`,
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [navHeight]);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-4/5 z-50 bg-purple-600/90 backdrop-blur-lg shadow-lg rounded-xl transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-(navHeight + 8)}
          className="text-xl md:text-2xl font-bold text-white cursor-pointer hover:scale-105 transition-transform"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          ❝𝕾𝖔𝖚𝖒𝖞𝖆𝖏𝖎𝖙.❞
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.div
              whileHover={{ scale: 1.1, color: "#d8b4fe" }}
              key={link.to}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-(navHeight + 8)}
                className={`cursor-pointer px-3 py-1 text-base font-medium transition-colors duration-300 ${
                  active === link.to
                    ? "text-purple-300 border-b-2 border-purple-300"
                    : "text-white"
                }`}
                onClick={() => setActive(link.to)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          {/* Dark/Light Mode Toggle */}
          <ToggleTheme />
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden flex items-center">
          <ToggleTheme /> {/* Mobile toggle next to hamburger */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white ml-2 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-purple-600 shadow-lg rounded-xl py-3 px-4 fixed right-4 top-20 z-50 w-44"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-(navHeight + 8)}
                onClick={() => {
                  setActive(link.to);
                  closeMenu();
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  active === link.to
                    ? "bg-purple-500 text-white"
                    : "text-white hover:bg-purple-500 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Dark/Light Mode Toggle in mobile menu */}
            <div className="pt-2 flex justify-center">
              <ToggleTheme />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
