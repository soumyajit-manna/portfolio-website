import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationDetails = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Haldia Institute of Technology",
      duration: "2022 - 2026",
      description:
        "Pursuing B.Tech with a focus on Full Stack Web Development (MERN Stack) and Data Structures & Algorithms in Java. Gaining practical experience through multiple real-world full stack projects.",
      cgpa: "CGPA: 6.72 / 10",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Chakdwipa High School",
      duration: "2020 - 2022",
      percentage: "Percentage: 92.6%",
      board: "Board: WBCHSE",
    },
    {
      degree: "Secondary Education",
      institution: "Chakdwipa High School",
      duration: "2015 - 2020",
      percentage: "Percentage: 80.57%",
      board: "Board: WBBSE",
    },
  ];

  return (
    <section
      id="education"
      className="bg-gradient-to-b from-white to-blue-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-16">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {educationDetails.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border-t-4 border-blue-600 shadow-xl rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 text-md">{edu.institution}</p>
                <p className="text-gray-500 text-sm italic mb-3">
                  {edu.duration}
                </p>

                {edu.cgpa && (
                  <p className="text-sm text-gray-600 font-medium mb-1">
                    {edu.cgpa}
                  </p>
                )}
                {edu.percentage && (
                  <p className="text-sm text-gray-600 font-medium mb-1">
                    {edu.percentage}
                  </p>
                )}
                {edu.board && (
                  <p className="text-sm text-gray-600 font-medium mb-1">
                    {edu.board}
                  </p>
                )}

                {edu.description && (
                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">
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
