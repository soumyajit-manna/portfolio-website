import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-gradient-to-b from-white to-blue-50 py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-12">
          Resume
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <a
            href="/Soumyajit_Manna_FUllStackDeveloper.pdf"
            download="Soumyajit_Manna_Full_Stack_Developer_Resume.pdf"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300"
          >
            <FaDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
