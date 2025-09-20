import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = useState(null);

  const openAt = useCallback((index) => {
    setActiveIndex(index);
    document.body.style.overflow = "hidden"; // prevent background scroll
  }, []);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
    document.body.style.overflow = "";
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? 0 : (i + 1) % certificates.length));
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((i) =>
      i === null
        ? certificates.length - 1
        : (i - 1 + certificates.length) % certificates.length
    );
  }, []);

  // Keyboard navigation when modal open
  useEffect(() => {
    const onKey = (e) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, closeModal, showNext, showPrev]);

  return (
    <section
      id="achievements"
      className="relative py-20 px-4 sm:px-8 lg:px-20 overflow-hidden bg-portfolio"
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/30"></div>

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
          <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></span>
        </motion.h2>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.button
              key={index}
              onClick={() => openAt(index)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden transition transform hover:-translate-y-1 hover:scale-[1.01]"
              aria-label={`Open ${cert.title} certificate`}
            >
              <div className="rounded-2xl p-1 bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-pink-500/20">
                <div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10">
                  <img
                    src={cert.file}
                    alt={cert.title}
                    className="w-full h-56 sm:h-60 object-cover"
                  />

                  <div className="p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-base sm:text-lg font-semibold text-white truncate">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-300">{cert.issuer}</p>
                    <p className="text-xs text-gray-400 mt-2">{cert.date}</p>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Modal viewer (rendered into document.body via portal to avoid stacking-context issues) */}
        {typeof document !== "undefined" &&
          createPortal(
            <AnimatePresence>
              {activeIndex !== null && certificates[activeIndex] && (
                <motion.div
                  key="ach-modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center p-4 overflow-auto hide-scrollbar modal-scroll-smooth"
                  aria-modal="true"
                  role="dialog"
                >
                  <div
                    className="absolute inset-0 bg-black/70 z-[9999]"
                    onClick={closeModal}
                  />

                  <motion.div
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                    className="relative z-[10000] max-w-5xl w-full max-h-[90vh] bg-gradient-to-br from-slate-900/70 to-black/60 rounded-2xl overflow-auto hide-scrollbar modal-scroll-smooth shadow-2xl border border-white/10"
                  >
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {certificates[activeIndex].title}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {certificates[activeIndex].issuer} ·{" "}
                          {certificates[activeIndex].date}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={certificates[activeIndex].file}
                          download
                          className="px-3 py-1 text-sm bg-green-600 hover:bg-green-700 text-white rounded-md"
                        >
                          Download
                        </a>

                        <button
                          onClick={closeModal}
                          className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white"
                          aria-label="Close viewer"
                          title="Close"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col items-center gap-4">
                      <div className="flex items-center gap-4 w-full justify-center">
                        <button
                          onClick={showPrev}
                          className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white shadow-lg"
                          aria-label="Previous certificate"
                        >
                          ◀
                        </button>

                        <img
                          src={certificates[activeIndex].file}
                          alt={certificates[activeIndex].title}
                          className="max-h-[70vh] max-w-full object-contain rounded-md shadow-inner"
                        />

                        <button
                          onClick={showNext}
                          className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white shadow-lg"
                          aria-label="Next certificate"
                        >
                          ▶
                        </button>
                      </div>

                      <div className="w-full max-w-2xl flex items-center justify-center gap-3 mt-4 overflow-x-auto py-2 hide-scrollbar modal-scroll-smooth">
                        {certificates.map((c, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`flex-none w-20 h-12 rounded-md overflow-hidden border-2 ${
                              i === activeIndex
                                ? "border-blue-400"
                                : "border-transparent"
                            }`}
                            aria-label={`Open ${c.title}`}
                          >
                            <img
                              src={c.file}
                              alt={c.title}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}
      </div>
    </section>
  );
};

export default Achievements;
