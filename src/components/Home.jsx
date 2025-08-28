import React from "react";
import heroBg from "../assets/webdev.svg";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import backgroundImage from "../assets/background.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative"
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <main
        id="home"
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[100vh] py-10"
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
            Hi, I am{" "}
            <motion.span
              className="text-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Soumyajit
            </motion.span>
            <br />
            <span className="text-blue-300 inline-block mt-2">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "Frontend Developer",
                  "React Developer",
                  "React.js Developer",
                  "Backend Developer",
                  "Node.js Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto md:mx-0">
            I build scalable and responsive web applications using modern
            technologies.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-6 flex-wrap gap-5">
            {[
              {
                href: "https://github.com/soumyajit-manna",
                icon: <FaGithub size={26} />,
              },
              {
                href: "https://linkedin.com/in/soumyajit-manna-731372270",
                icon: <FaLinkedin size={26} />,
              },
              {
                href: "https://twitter.com/Mindwrap_Error",
                icon: <FaTwitter size={26} />,
              },
              {
                href: "mailto:mannasoumyajit47@gmail.com",
                icon: <FaEnvelope size={26} />,
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/20 backdrop-blur-md p-3 rounded-full shadow-md hover:bg-blue-500 transition text-white"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              to="resume"
              smooth={true}
              className="cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full shadow-lg text-white font-semibold transition transform hover:scale-105"
            >
              Resume
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0], // bounce effect
          }}
          transition={{
            duration: 3, // slow & smooth
            repeat: Infinity,
            repeatType: "loop",
          }}
          src={heroBg}
          alt="Web Development"
          className="w-[90%] max-w-sm md:max-w-md lg:max-w-lg mb-8 md:mb-0"
        />
      </main>

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
            fill="url(#gradient)"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Home;
