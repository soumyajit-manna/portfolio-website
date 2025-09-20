import React from "react";
import heroBg from "../assets/webdev.svg";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
// Technology icons
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGithub,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div id="home" name="home" className="relative min-h-screen bg-portfolio">
      {/* 👆 Added gradient background directly */}

      {/* Dark overlay for contrast (non-interactive so it won't block clicks) */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

      {/* Animated tech icons background (behind content but above base background) */}
      {/* hide heavy decorative icons on very small screens to avoid overflow */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block">
        {/* use relative container for absolute positioned icons */}
        <div className="relative w-full h-full">
          {[
            {
              icon: <SiReact />,
              size: 64,
              top: "10%",
              left: "12%",
              color: "#61dafb",
            },
            {
              icon: <SiJavascript />,
              size: 48,
              top: "20%",
              left: "78%",
              color: "#f7df1e",
            },
            {
              icon: <SiNodedotjs />,
              size: 56,
              top: "65%",
              left: "82%",
              color: "#83CD29",
            },
            {
              icon: <SiTailwindcss />,
              size: 50,
              top: "72%",
              left: "18%",
              color: "#06B6D4",
            },
            {
              icon: <SiHtml5 />,
              size: 44,
              top: "38%",
              left: "45%",
              color: "#E34F26",
            },
            {
              icon: <SiCss3 />,
              size: 44,
              top: "8%",
              left: "55%",
              color: "#1572B6",
            },
            {
              icon: <SiGithub />,
              size: 48,
              top: "52%",
              left: "6%",
              color: "#ffffff",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.9, rotate: 0 }}
              animate={{
                opacity: [0.6, 0.95, 0.6],
                y: [0, -12, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 6 + i * 0.6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              className="absolute opacity-80 drop-shadow-lg"
              style={{ top: t.top, left: t.left }}
            >
              <div
                style={{ width: t.size, height: t.size, color: t.color }}
                className="flex items-center justify-center"
              >
                {t.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[100vh] py-10">
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
            <span className="text-purple-300 inline-block mt-2">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "Frontend Developer",
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
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  boxShadow: "0 0 15px #fff",
                }}
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-0"
        >
          <motion.img
            initial={{ y: 40 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.05,
              rotate: 3,
              transition: { duration: 0.5 },
            }}
            src={heroBg}
            alt="Web Development"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg cursor-pointer"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
