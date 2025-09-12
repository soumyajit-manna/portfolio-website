import React from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

// Certificates (place in public folder)
const certificates = [
  {
    title: "Certificate of Participation",
    issuer: "IIITDM Jabalpur – HackByte 3.0",
    date: "Apr 2025",
    file: "/certificates/hackbyte.jpg",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Apna College",
    date: "Mar 2024 – Aug 2024",
    file: "/certificates/fullstack.jpg",
  },
  {
    title: "DSA with Java",
    issuer: "Apna College",
    date: "Apr 2023 – Sep 2023",
    file: "/certificates/dsa-java.jpg",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-20 px-4 sm:px-8 lg:px-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black"
    >
      <AnimatedBackground />

      {/* Floating Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, -80, 0], y: [0, -60, 60, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          className="absolute top-28 left-16 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -100, 100, 0], y: [0, 70, -70, 0] }}
          transition={{ repeat: Infinity, duration: 26, ease: "easeInOut" }}
          className="absolute bottom-20 right-16 w-[26rem] h-[26rem] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        />
      </div>

      {/* Overlay Gradient */}
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
          Achievements & Certifications
          <span className="block mx-auto w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mt-3 rounded-full"></span>
        </motion.h2>

        {/* Certificates Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-gray-800/70 backdrop-blur-lg border border-gray-700 hover:shadow-pink-500/30 transition"
            >
              {/* Certificate Image */}
              <img
                src={cert.file}
                alt={cert.title}
                className="w-full h-60 object-cover transform transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform"
              />

              {/* Overlay Info */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-300 text-sm">{cert.issuer}</p>
                <p className="text-gray-400 text-xs mb-4">{cert.date}</p>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg shadow-md transition"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
