import React from "react";
import { motion } from "framer-motion";
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

import project6Thumbnail from "../assets/project6.png"; // FOREVER Project Thumbnail
import project1Thumbnail from "../assets/project1.png";
import project2Thumbnail from "../assets/project2.png";
import project3Thumbnail from "../assets/project3.png";
import project4Thumbnail from "../assets/project4.png";
import project5Thumbnail from "../assets/project5.png";

const projects = [
  {
    title: "FOREVER - Full Stack Fashion eCommerce",
    description:
      "A fully responsive fashion platform with secure JWT-based authentication, admin panel for product management, multiple payment modes (Razorpay, Stripe, COD), voice-to-text product search, and Cloudinary image hosting.",
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
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-white to-blue-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-14">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-start gap-3 mt-auto">
                  {project.tech.map((Icon, idx) => (
                    <Icon key={idx} size={22} className="text-blue-500" />
                  ))}
                </div>

                <div className="mt-5 flex justify-between items-center">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
