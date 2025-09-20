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

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

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

  const tabs = ["frontend", "backend", "database", "languages", "tools & tech"];

  return (
    <section
      id="skills"
      name="skills"
      className="relative py-16 px-4 sm:px-8 lg:px-20 overflow-hidden bg-portfolio"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-6">
          Skills
          <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></span>
        </h2>

        {/* Tabs with sliding underline */}
        <div className="relative flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-2 font-medium text-sm sm:text-base transition ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Circular Skill Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="relative w-full flex flex-wrap justify-center items-center gap-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            {skillSets[activeTab].map(([Icon, label, color], i) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.15, y: -5 }}
                className="flex flex-col items-center justify-center w-28 h-28 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-lg p-4 cursor-pointer transition-all"
              >
                <Icon size={36} className={`${color} mb-2`} />
                <p className="text-sm font-medium text-gray-200 text-center">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
