import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="relative w-full px-5 sm:px-10 lg:px-20 pt-16 py-20 overflow-hidden bg-portfolio"
    >
      {/* Overlay (same as Skills/Achievements) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-white mb-8"
        >
          Resume
          <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 text-base sm:text-lg mb-10 px-2"
        >
          Full Stack Developer (MERN) | 5+ Full Stack Projects | Open Source
          Contributor
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >
          <a
            href="/Soumyajit_Manna_Full_Stack_Developer.pdf"
            download="Soumyajit_Manna_Full_Stack_Developer_Resume.pdf"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300"
          >
            <FaDownload />
            Download Resume
          </a>
          <a
            href="/Soumyajit_Manna_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-3 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-blue-50 transition duration-300 hover:scale-105"
          >
            <FaEye />
            View Resume
          </a>
        </motion.div>

        {/* Embedded Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 shadow-xl rounded-xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl"
        >
          <iframe
            src="/Soumyajit_Manna_Full_Stack_Developer.pdf"
            title="Resume Preview"
            className="w-full h-[300px] sm:h-[400px] md:h-[600px]"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
