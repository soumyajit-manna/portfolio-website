import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiAxios,
  SiCloudinary,
  SiVercel,
  SiRender,
  SiPostman,
  SiStripe,
  SiRazorpay,
  SiMysql,
} from "react-icons/si";
import { MdSecurity, MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineApi } from "react-icons/ai";
import { FiZap } from "react-icons/fi";
import { IoMdCloud } from "react-icons/io";
import AnimatedBackground from "./AnimatedBackground";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const renderSkill = (Icon, label, color = "") => (
    <motion.div
      whileHover={{ scale: 1.07, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex flex-col items-center justify-center 
                 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg 
                 p-5 border border-white/20 hover:border-blue-400/60 
                 transition duration-300 group cursor-pointer
                 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
    >
      {/* Neon Glow behind icon */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition"></div>
      <Icon size={34} className={`mb-3 z-10 ${color}`} />
      <p className="text-xs sm:text-sm font-medium text-center text-gray-100 z-10">
        {label}
      </p>
    </motion.div>
  );

  const tabs = ["frontend", "backend", "database", "languages", "tools & tech"];

  const skillSets = {
    frontend: [
      [FaHtml5, "HTML", "text-orange-400"],
      [FaCss3Alt, "CSS", "text-blue-400"],
      [FaJs, "JavaScript", "text-yellow-400"],
      [FaReact, "React.js", "text-cyan-400"],
      [SiTailwindcss, "Tailwind CSS", "text-sky-400"],
      [SiBootstrap, "Bootstrap", "text-purple-400"],
    ],
    backend: [
      [FaNodeJs, "Node.js", "text-green-400"],
      [SiExpress, "Express.js", "text-gray-300"],
    ],
    database: [
      [SiMongodb, "MongoDB", "text-green-400"],
      [SiMysql, "SQL", "text-blue-400"],
    ],
    languages: [[FaJava, "Java", "text-red-400"]],
    "tools & tech": [
      [AiOutlineApi, "REST APIs", "text-green-400"],
      [SiJsonwebtokens, "JWT", "text-blue-400"],
      [SiRazorpay, "Razorpay", "text-sky-400"],
      [SiStripe, "Stripe", "text-indigo-400"],
      [MdEmail, "Nodemailer", "text-red-400"],
      [SiCloudinary, "Cloudinary", "text-blue-400"],
      [FaGit, "Git", "text-orange-400"],
      [FaGithub, "GitHub", "text-gray-200"],
      [SiRender, "Render", "text-blue-400"],
      [SiVercel, "Vercel", "text-gray-200"],
      [FiZap, "Thunderclient", "text-blue-400"],
      [IoMdCloud, "Hopscotch", "text-orange-400"],
      [SiPostman, "Postman", "text-orange-400"],
      [MdSecurity, "CORS", "text-blue-400"],
      [SiAxios, "Axios", "text-blue-400"],
      [RiLockPasswordLine, "bcrypt", "text-gray-400"],
    ],
  };

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-8 lg:px-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black"
    >
      <AnimatedBackground />
      {/* Floating Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, -80, 0], y: [0, -60, 60, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -100, 100, 0], y: [0, 70, -70, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        />
      </div>

      {/* Overlay Layer (slow shifting gradient) */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 bg-[length:200%_200%] mix-blend-overlay"
      />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-6">
          Skills
          <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></span>
        </h2>
        <p className="text-center text-gray-300 mb-10 text-sm sm:text-base">
          Tech stack I use to design, build, and deploy web applications
        </p>

        {/* Tabs with Horizontal Scroll on Mobile */}
        <div className="mb-10">
          <div className="flex overflow-x-auto scrollbar-hide justify-start sm:justify-center space-x-2 sm:space-x-4 bg-white/10 backdrop-blur-md rounded-full p-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition flex-shrink-0 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              {skillSets[activeTab].map(([Icon, label, color], i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {renderSkill(Icon, label, color)}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
