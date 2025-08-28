import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaStripe,
  FaCss3Alt,
  FaJs,
  FaHtml5,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRender,
  SiTailwindcss,
  SiVercel,
  SiRazorpay,
  SiCloudinary,
  SiJsonwebtokens,
} from "react-icons/si";

import project6Thumbnail from "../assets/project6.png";
import project1Thumbnail from "../assets/project1.png";
import project2Thumbnail from "../assets/project2.png";
import project3Thumbnail from "../assets/project3.png";
import project4Thumbnail from "../assets/project4.png";
import project5Thumbnail from "../assets/project5.png";
import AnimatedBackground from "./AnimatedBackground";

const projects = [
  {
    title: "FOREVER - Full Stack Fashion eCommerce",
    description:
      "A fully responsive fashion platform with secure JWT-based authentication, admin panel, multiple payment modes (Razorpay, Stripe, COD), voice-to-text product search, and Cloudinary image hosting.",
    projectLink: "https://forever-frontend-five-ecru.vercel.app",
    sourceCodeLink: "https://github.com/soumyajit-manna/Forever.git",
    thumbnail: project6Thumbnail,
    tech: [
      FaReact,
      FaNodeJs,
      SiExpress,
      SiMongodb,
      SiTailwindcss,
      FaJs,
      SiCloudinary,
      FaStripe,
      SiRazorpay,
      SiJsonwebtokens,
      SiVercel,
    ],
  },
  {
    title: "Tomato - Full Stack Food Delivery Platform",
    description:
      "A responsive food delivery platform with real-time order tracking, cart management, admin panel, and secure Stripe payments.",
    projectLink: "https://tomato-frontend-ppm5.onrender.com",
    sourceCodeLink:
      "https://github.com/soumyajit-manna/Tomato-Full-Stack-Food-Delivery-Platform.git",
    thumbnail: project1Thumbnail,
    tech: [
      FaReact,
      FaJs,
      SiMongodb,
      SiExpress,
      FaNodeJs,
      FaStripe,
      FaCss3Alt,
      SiJsonwebtokens,
      SiRender,
    ],
  },
  {
    title: "Prescripto - Full Stack Healthcare Portal",
    description:
      "Role-based appointment system for patients, doctors, and admins. Includes profile updates and Razorpay integration.",
    projectLink: "https://prescripto-frontend-two.vercel.app",
    sourceCodeLink:
      "https://github.com/soumyajit-manna/Doctor-Appointment-Booking-System.git",
    thumbnail: project2Thumbnail,
    tech: [
      FaReact,
      FaJs,
      FaNodeJs,
      SiExpress,
      SiMongodb,
      SiTailwindcss,
      SiRazorpay,
      SiCloudinary,
      SiJsonwebtokens,
      SiVercel,
    ],
  },
  {
    title: "Simon Says Game",
    description:
      "Interactive memory game with visual feedback, growing sequences, and score tracking.",
    projectLink: "https://soumyajit-manna.github.io/Simon-Says-Game",
    sourceCodeLink: "https://github.com/soumyajit-manna/Simon-Says-Game.git",
    thumbnail: project3Thumbnail,
    tech: [FaHtml5, FaCss3Alt, FaJs],
  },
  {
    title: "Restaurant Landing Page",
    description:
      "Responsive static page showcasing restaurant branding, menu, and contact details.",
    projectLink: "https://soumyajit-manna.github.io/Restaurant-Landing-Page",
    sourceCodeLink:
      "https://github.com/soumyajit-manna/Restaurant-Landing-Page.git",
    thumbnail: project4Thumbnail,
    tech: [FaHtml5, FaCss3Alt],
  },
  {
    title: "Spotify Clone",
    description: "A pixel-perfect static frontend clone of the Spotify web UI.",
    projectLink: "https://soumyajit-manna.github.io/Spotify-Clone",
    sourceCodeLink: "https://github.com/soumyajit-manna/Spotify-Clone.git",
    thumbnail: project5Thumbnail,
    tech: [FaHtml5, FaCss3Alt],
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-8 lg:px-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black"
    >
      <AnimatedBackground />
      {/* 🔹 Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, -80, 0], y: [0, -60, 60, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -100, 100, 0], y: [0, 70, -70, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        />
      </div>

      {/* 🔹 Overlay Gradient */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 bg-[length:200%_200%] mix-blend-overlay"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-10 sm:mb-14"
        >
          My Projects
          <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></span>
        </motion.h2>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl shadow-lg overflow-hidden group h-64 sm:h-72 md:h-80 lg:h-96"
              >
                {/* Background Image */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Icons */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((Icon, idx) => (
                      <Icon key={idx} size={18} className="text-blue-400" />
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-2 rounded-md transition shadow-md hover:shadow-lg"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-blue-300 hover:text-white transition"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md hover:shadow-lg transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
