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

import ForeverVideo from "../assets/Forever_video.mp4";
import TomatoVideo from "../assets/Tomato_video.mp4";
import PrescriptoVideo from "../assets/Prescripto_video.mp4";

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
    video: ForeverVideo,
  },
  {
    title: "Tomato - Full Stack Food Delivery Platform",
    shortTitle: "Tomato",
    tagline: "Full Stack Food Delivery Platform",
    description:
      "A responsive food delivery platform where users can view food items menu-wise, manage their cart, and track orders in real-time. Includes an admin panel for managing orders, with secure Stripe payment integration.",
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
    video: TomatoVideo,
  },
  {
    title: "Prescripto - Full Stack Healthcare Portal",
    shortTitle: "Prescripto",
    tagline: "Full Stack Healthcare Portal",
    description:
      "A role-based appointment system for patients, doctors, and admins, featuring profile management, appointment scheduling, and secure Razorpay payment integration.",
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
    video: PrescriptoVideo,
  },
];

const Projects = () => {
  const displayedProjects = projects.slice(0, 3);

  // per-card open state keyed by project id (shortTitle or title) to avoid index issues
  const makeInitialOpenMap = () => {
    const map = {};
    displayedProjects.forEach((p) => {
      const key = p.shortTitle || p.title;
      map[key] = false;
    });
    return map;
  };

  const [openStates, setOpenStates] = useState(makeInitialOpenMap);

  const toggle = (i) => {
    const key =
      (displayedProjects[i] &&
        (displayedProjects[i].shortTitle || displayedProjects[i].title)) ||
      String(i);
    setOpenStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAll = () => {
    setOpenStates((prev) => {
      const allOpen = Object.values(prev).every(Boolean);
      const next = {};
      Object.keys(prev).forEach((k) => (next[k] = !allOpen));
      return next;
    });
  };

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

  // refs for videos to sync playback
  const videoRefs = React.useRef([]);

  React.useEffect(() => {
    // try to start all videos together
    if (!videoRefs.current) return;
    videoRefs.current.forEach((v) => {
      if (!v) return;
      try {
        v.muted = true;
        v.currentTime = 0;
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      } catch (e) {
        // ignore
      }
    });
  }, []);

  // control for expand-all behaviour: toggles each time button pressed
  const [expandAllFlag, setExpandAllFlag] = useState(0);
  const [allOpen, setAllOpen] = useState(false);

  const handleToggleAll = () => {
    setAllOpen((s) => !s);
    setExpandAllFlag((n) => n + 1);
  };

  const ProjectCard = ({ project, idx }) => {
    const key = project.shortTitle || project.title;
    const [open, setOpen] = useState(false);

    // when parent toggles expand-all, set local open state to allOpen
    React.useEffect(() => {
      setOpen(allOpen);
    }, [expandAllFlag]);

    return (
      <motion.div
        key={idx}
        layout
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: idx * 0.04 }}
        className="rounded-lg overflow-hidden border border-white/6 bg-white/5 shadow-sm relative"
      >
        <div className="relative w-full h-44 sm:h-56 md:h-72 lg:h-80 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: project.bgGradient }}
          />
          <video
            ref={(el) => (videoRefs.current[idx] = el)}
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/25 mix-blend-multiply z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
            <h3 className="text-white text-2xl font-bold tracking-wide">
              {project.shortTitle || project.title}
            </h3>
            <p className="text-gray-100 text-sm mt-2">{project.tagline}</p>

            {/* chevron removed per user request; only + Expand all remains */}
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
              className="overflow-hidden relative z-30"
            >
              <div className="px-4 py-4 bg-transparent">
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
    );
  };

  return (
    <section
      id="projects"
      className="relative py-16 px-4 sm:px-8 lg:px-20 overflow-hidden bg-portfolio"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            My Projects
            <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></span>
          </motion.h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleToggleAll()}
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
        </div>

        {/* grid layout: side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
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
