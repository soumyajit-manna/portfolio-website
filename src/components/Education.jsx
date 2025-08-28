import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaBookOpen } from "react-icons/fa";
import AnimatedBackground from "./AnimatedBackground";

const Education = () => {
  const educationDetails = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Haldia Institute of Technology",
      duration: "2022 - 2026",
      description:
        "Pursuing B.Tech with a focus on Full Stack Web Development (MERN Stack) and Data Structures & Algorithms in Java. Gaining practical experience through multiple real-world full stack projects.",
      cgpa: "CGPA: 6.72 / 10",
      icon: <FaGraduationCap className="text-blue-600 text-xl sm:text-2xl" />,
    },
    {
      degree: "Higher Secondary Education",
      institution: "Chakdwipa High School",
      duration: "2020 - 2022",
      percentage: "92.6%",
      board: "WBCHSE",
      icon: <FaBookOpen className="text-green-600 text-xl sm:text-2xl" />,
    },
    {
      degree: "Secondary Education",
      institution: "Chakdwipa High School",
      duration: "2015 - 2020",
      percentage: "80.57%",
      board: "WBBSE",
      icon: <FaSchool className="text-purple-600 text-xl sm:text-2xl" />,
    },
  ];

  return (
    <section
      id="education"
      className="relative py-14 sm:py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black"
    >
      <AnimatedBackground />
      {/* Floating Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, -80, 0], y: [0, -60, 60, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -100, 100, 0], y: [0, 70, -70, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        />
      </div>

      {/* Overlay Layer (slow shifting gradient) */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 bg-[length:200%_200%] mix-blend-overlay"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 sm:mb-16"
        >
          Education
          <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 sm:border-l-4 border-blue-600">
          {educationDetails.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 ml-10 sm:ml-12 relative" // <- Increase left margin
            >
              {/* Dot */}
              <span className="absolute -left-5 sm:-left-6 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white border-2 sm:border-4 border-blue-600 rounded-full z-20">
                {edu.icon}
              </span>

              {/* Card */}
              <div className="bg-white/10 backdrop-blur-xl shadow-md rounded-xl p-4 sm:p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-white/20 transition duration-300 relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-200 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-200 text-sm sm:text-base">
                  {edu.institution}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm italic mb-3">
                  {edu.duration}
                </p>

                {/* Highlights */}
                {edu.cgpa && (
                  <span className="inline-block bg-blue-100/20 text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold mr-2">
                    {edu.cgpa}
                  </span>
                )}
                {edu.percentage && (
                  <span className="inline-block bg-green-100/20 text-green-300 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold mr-2">
                    {edu.percentage}
                  </span>
                )}
                {edu.board && (
                  <span className="inline-block bg-gray-100/20 text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                    {edu.board}
                  </span>
                )}

                {edu.description && (
                  <p className="text-gray-300 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
