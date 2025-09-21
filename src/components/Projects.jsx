import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaStripe,
  FaCss3Alt,
  FaJs,
  FaHtml5,
  FaChevronDown,
  FaGithub,
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

// thumbnails removed — using CSS gradients for project backgrounds per request

const projects = [
  {
    title: "FOREVER - Full Stack Fashion eCommerce",
    shortTitle: "FOREVER",
    tagline: "Full Stack Fashion eCommerce",
    description:
      "A fully responsive fashion platform with secure JWT-based authentication, admin panel, multiple payment modes (Razorpay, Stripe, COD), voice-to-text product search, and Cloudinary image hosting.",
    projectLink: "https://forever-frontend-five-ecru.vercel.app",
    sourceCodeLink: "https://github.com/soumyajit-manna/Forever.git",
    // fashion gradient: purple -> pink
    bgGradient: "linear-gradient(135deg,#7b2ff7 0%,#f107a3 100%)",
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
    shortTitle: "Tomato",
    tagline: "Full Stack Food Delivery Platform",
    description:
      "A responsive food delivery platform with real-time order tracking, cart management, admin panel, and secure Stripe payments.",
    projectLink: "https://tomato-frontend-ppm5.onrender.com",
    sourceCodeLink:
      "https://github.com/soumyajit-manna/Tomato-Full-Stack-Food-Delivery-Platform.git",
    // tomato gradient: tomato red -> warm orange
    bgGradient: "linear-gradient(135deg,#ff512f 0%,#f09819 100%)",
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
    shortTitle: "PRESCRIPTO",
    tagline: "Full Stack Healthcare Portal",
    description:
      "Role-based appointment system for patients, doctors, and admins. Includes profile updates and Razorpay integration.",
    projectLink: "https://prescripto-frontend-two.vercel.app",
    sourceCodeLink:
      "https://github.com/soumyajit-manna/Doctor-Appointment-Booking-System.git",
    // medical green gradient for Prescripto
    bgGradient: "linear-gradient(135deg,#0f766e 0%,#bbf7d0 100%)",
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
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null); // can be number, null, or 'all'
  const displayedProjects = projects.slice(0, 3);

  const toggle = (i) => {
    // if everything is open and user clicks a single card, focus on that card
    if (openIndex === "all") return setOpenIndex(i);
    setOpenIndex(openIndex === i ? null : i);
  };

  const toggleAll = () => setOpenIndex(openIndex === "all" ? null : "all");

  // Helper: map icon component to friendly tech name
  const techNameMap = new Map([
    [FaReact, "React"],
    [FaNodeJs, "Node.js"],
    [SiExpress, "Express"],
    [SiMongodb, "MongoDB"],
    [SiTailwindcss, "Tailwind CSS"],
    [FaJs, "JavaScript"],
    [SiCloudinary, "Cloudinary"],
    [FaStripe, "Stripe"],
    [SiRazorpay, "Razorpay"],
    [SiJsonwebtokens, "JWT"],
    [SiVercel, "Vercel"],
    [FaCss3Alt, "CSS3"],
    [FaHtml5, "HTML5"],
    [SiRender, "Render"],
  ]);

  const getTechLabel = (Icon) =>
    techNameMap.get(Icon) || Icon.displayName || Icon.name || "Tech";

  return (
    <section
      id="projects"
      className="relative py-16 px-4 sm:px-8 lg:px-20 overflow-hidden bg-portfolio"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-8"
          >
            My Projects
            <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></span>
          </motion.h2>

          <div className="ml-4">
            <button
              onClick={toggleAll}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white/90 bg-white/6 hover:bg-white/8 rounded-md"
              aria-pressed={openIndex === "all"}
            >
              {openIndex === "all" ? "Collapse all" : "+ Expand all"}
            </button>
          </div>
        </div>

        <div
          className="masonry-container"
          style={{ columnCount: 1, columnGap: "1rem", maxWidth: "100%" }}
        >
          {/* Responsive column counts using inline style to avoid adding new CSS files; Tailwind doesn't ship column-count utilities by default */}
          <style>{`
            @media (min-width: 640px) { .masonry-container { column-count: 2; } }
            @media (min-width: 1024px) { .masonry-container { column-count: 3; } }
            .masonry-item { break-inside: avoid; -webkit-column-break-inside: avoid; margin-bottom: 1rem; }

            /* Animated overlays */
            .sparkle { position: absolute; width: 8px; height: 8px; border-radius: 9999px; background: rgba(255,255,255,0.95); box-shadow: 0 0 8px rgba(255,255,255,0.6); animation: spark 1.8s linear infinite; }
            @keyframes spark {
              0% { transform: translateY(0) scale(0.6); opacity: 1; }
              100% { transform: translateY(-28px) scale(1.2); opacity: 0; }
            }

            .tomato-pulse { position: absolute; width: 84px; height: 84px; border-radius: 9999px; background: radial-gradient(circle at center, rgba(255,255,255,0.16), transparent 40%); animation: pulse 1.6s ease-in-out infinite; filter: drop-shadow(0 6px 18px rgba(240,90,40,0.18)); }
            @keyframes pulse {
              0% { transform: scale(0.95); opacity: 0.7; }
              50% { transform: scale(1.12); opacity: 1; }
              100% { transform: scale(0.95); opacity: 0.7; }
            }

            .cross { position: absolute; width: 56px; height: 56px; display: block; animation: crossPulse 1.6s ease-in-out infinite; }
            .cross .hbar { position: absolute; left: 0; right: 0; top: 50%; height: 10px; transform: translateY(-50%); background: rgba(255,255,255,0.95); border-radius: 6px; }
            .cross .vbar { position: absolute; top: 0; bottom: 0; left: 50%; width: 10px; transform: translateX(-50%); background: rgba(255,255,255,0.95); border-radius: 6px; }
            @keyframes crossPulse { 0% { transform: scale(0.95); opacity: 0.8 } 50% { transform: scale(1.08); opacity: 1 } 100% { transform: scale(0.95); opacity: 0.8 } }

            /* SVG-specific animations */
            @keyframes hanger-sway { 0% { transform: rotate(-6deg) } 50% { transform: rotate(6deg) } 100% { transform: rotate(-6deg) } }
            @keyframes tomato-bounce { 0% { transform: translateY(0) } 50% { transform: translateY(-8px) } 100% { transform: translateY(0) } }
            @keyframes heartbeat { 0% { transform: scale(1); opacity: 0.95 } 30% { transform: scale(1.08); opacity: 1 } 60% { transform: scale(0.98); opacity: 0.95 } 100% { transform: scale(1); opacity: 0.95 } }
          `}</style>

          {displayedProjects.map((project, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="masonry-item rounded-lg overflow-hidden border border-white/6 bg-white/5 shadow-sm"
            >
              <div className="relative">
                <div
                  className="w-full"
                  style={{
                    height: "220px",
                    background: project.bgGradient,
                    /* ensure images scale on small devices */
                    minWidth: 0,
                  }}
                />

                <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />

                {/* Per-project animated decorations */}
                {project.shortTitle === "FOREVER" && (
                  <>
                    <span
                      className="sparkle"
                      style={{
                        left: "18%",
                        bottom: "22%",
                        animationDelay: "0s",
                      }}
                    />
                    <span
                      className="sparkle"
                      style={{
                        left: "26%",
                        bottom: "12%",
                        animationDelay: "0.4s",
                      }}
                    />
                    <span
                      className="sparkle"
                      style={{
                        left: "14%",
                        bottom: "8%",
                        animationDelay: "0.7s",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: "18px",
                        top: "18px",
                        width: 44,
                        height: 44,
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-full h-full"
                        style={{
                          fill: "none",
                          stroke: "white",
                          strokeWidth: 1.4,
                          transformOrigin: "center",
                          animation: "hanger-sway 3s ease-in-out infinite",
                        }}
                      >
                        <path
                          d="M7 7c0-1.657 1.343-3 3-3s3 1.343 3 3c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M4 15c0-2.761 2.239-5 5-5h6c2.761 0 5 2.239 5 5v1H4v-1z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </>
                )}

                {project.shortTitle === "Tomato" && (
                  <>
                    <div
                      className="tomato-pulse"
                      style={{ right: "16px", top: "16px" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: "24px",
                        top: "24px",
                        width: 36,
                        height: 36,
                        animation: "tomato-bounce 1.6s infinite",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-full h-full"
                        style={{ transformOrigin: "center" }}
                      >
                        <circle cx="12" cy="12" r="8" fill="#ff6347" />
                        <path
                          d="M12 4c1 1.6 3 2 4 2s1-1 1-1-1.5-1.5-3-1.5S12 4 12 4z"
                          fill="#2e8b57"
                          opacity="0.9"
                        />
                      </svg>
                    </div>
                  </>
                )}

                {project.shortTitle === "Prescripto" && (
                  <div
                    className="cross"
                    style={{
                      left: "16px",
                      top: "16px",
                      animation: "heartbeat 1.6s infinite",
                    }}
                  >
                    <span className="hbar" />
                    <span className="vbar" />
                  </div>
                )}

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h3 className="text-white text-2xl font-bold tracking-wide">
                    {project.shortTitle || project.title}
                  </h3>
                  <p className="text-gray-100 text-sm mt-2">
                    {project.tagline}
                  </p>

                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={openIndex === idx}
                    className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/12 text-white/90 focus:outline-none"
                  >
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        openIndex === idx ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {(openIndex === idx || openIndex === "all") && (
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    style={{ transformOrigin: "top" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4">
                      <p className="text-gray-200 text-sm mb-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((Icon, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-200 px-2 py-1 rounded-md bg-white/6"
                          >
                            <Icon size={16} className="text-blue-300" />
                            <span className="hidden sm:inline-block">
                              {getTechLabel(Icon)}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.sourceCodeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 text-sm font-semibold text-blue-300 hover:text-white rounded-md border border-white/6"
                        >
                          Source Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-200 mb-3">Want to see more of my work?</p>
          <a
            href="https://github.com/soumyajit-manna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm sm:text-base font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-lg shadow-md transition"
          >
            <FaGithub />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
