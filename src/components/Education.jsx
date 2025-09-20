import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaSchool, FaBookOpen } from "react-icons/fa";

const Education = () => {
  const educationDetails = useMemo(
    () => [
      {
        id: "btech",
        degree: "Bachelor of Technology in Computer Science & Engineering",
        institution: "Haldia Institute of Technology",
        duration: "2022 - 2026",
        description:
          "Pursuing B.Tech with a focus on Full Stack Web Development (MERN Stack) and Data Structures & Algorithms in Java. Gaining practical experience through multiple real-world full stack projects.",
        cgpa: "CGPA: 6.72 / 10",
        icon: <FaGraduationCap className="text-blue-600 text-xl sm:text-2xl" />,
      },
      {
        id: "hs",
        degree: "Higher Secondary Education",
        institution: "Chakdwipa High School",
        duration: "2020 - 2022",
        percentage: "92.6%",
        board: "WBCHSE",
        icon: <FaBookOpen className="text-green-600 text-xl sm:text-2xl" />,
      },
      {
        id: "ss",
        degree: "Secondary Education",
        institution: "Chakdwipa High School",
        duration: "2015 - 2020",
        percentage: "80.57%",
        board: "WBBSE",
        icon: <FaSchool className="text-purple-600 text-xl sm:text-2xl" />,
      },
    ],
    []
  );

  // state to track which items are open
  const [openIds, setOpenIds] = useState(() => [educationDetails[0].id]);

  const allOpen = openIds.length === educationDetails.length;

  const toggle = (id) =>
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const toggleAll = () =>
    setOpenIds(allOpen ? [] : educationDetails.map((e) => e.id));

  return (
    <section
      id="education"
      className="relative py-14 sm:py-20 overflow-hidden bg-portfolio"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Education
            <span className="block w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></span>
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleAll}
              className="inline-flex items-center gap-2 bg-white/10 text-white/90 hover:bg-white/20 transition px-3 py-2 rounded-md text-sm"
              aria-pressed={allOpen}
            >
              {allOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
              <span>{allOpen ? "Collapse all" : "Expand all"}</span>
            </button>
          </div>
        </motion.div>

        <div className="relative border-l-2 sm:border-l-4 border-blue-600">
          {educationDetails.map((edu, index) => {
            const isOpen = openIds.includes(edu.id);
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-10 ml-10 sm:ml-12 relative"
              >
                <span className="absolute -left-5 sm:-left-6 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white border-2 sm:border-4 border-blue-600 rounded-full z-20">
                  {edu.icon}
                </span>

                <div className="relative z-10">
                  <div className="bg-white/10 backdrop-blur-xl shadow-md rounded-xl p-3 sm:p-4 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] border border-white/10 transition duration-200">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-blue-200 truncate">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-200 text-xs sm:text-sm truncate">
                          {edu.institution}
                        </p>
                        <p className="text-gray-400 text-xs italic mt-1">
                          {edu.duration}
                        </p>
                      </div>

                      <div className="flex-shrink-0 flex items-center">
                        <button
                          onClick={() => toggle(edu.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              toggle(edu.id);
                            }
                          }}
                          aria-expanded={isOpen}
                          aria-controls={`${edu.id}-panel`}
                          className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-3 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transform transition-transform ${
                              isOpen ? "rotate-90" : "rotate-0"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          <span className="text-xs sm:text-sm">
                            {isOpen ? "Hide" : "Details"}
                          </span>
                        </button>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`${edu.id}-panel`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden mt-3 text-gray-300 text-sm sm:text-base"
                        >
                          <div className="pb-3">
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
                          </div>

                          {edu.description && (
                            <p className="leading-relaxed">{edu.description}</p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
