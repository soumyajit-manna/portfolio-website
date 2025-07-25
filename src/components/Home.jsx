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
    >
      <main
        id="home"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between min-h-[100vh] py-10"
      >
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            <motion.span>Hi, I am Soumyajit</motion.span>
            <br />
            <span className="text-blue-400 inline-block mt-2">
              <Typewriter
                words={[
                  "Full Stack Web Developer",
                  "MERN Stack Developer",
                  "Transforming Ideas into Code",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={100}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-white  max-w-xl mx-auto md:mx-0">
            I build scalable and responsive web applications using modern
            technologies.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-6 flex-wrap gap-5">
            <a
              href="https://github.com/soumyajit-manna"
              className="bg-white p-2 rounded-full hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} className="text-gray-800" />
            </a>
            <a
              href="https://linkedin.com/in/soumyajit-manna-731372270"
              className="bg-white p-2 rounded-full hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} className="text-gray-800" />
            </a>
            <a
              href="https://twitter.com/Mindwrap_Error"
              className="bg-white p-2 rounded-full hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={28} className="text-gray-800" />
            </a>
            <a
              href="mailto:mannasoumyajit47@gmail.com"
              className="bg-white p-2 rounded-full hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={28} className="text-gray-800" />
            </a>
          </div>

          {/* Resume Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              to="resume"
              smooth={true}
              className=" cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg text-white font-semibold transition"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 50 },
            },
            hidden: { opacity: 0, y: 60 },
          }}
          src={heroBg}
          alt="Web Development"
          className="w-[90%] max-w-sm md:max-w-md lg:max-w-lg mb-8 md:mb-0"
        />
      </main>
    </div>
  );
};

export default Home;
