import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShoppingBag,
  FaHospital,
  FaUtensils,
  FaBook,
  FaTrophy,
  FaCertificate,
} from "react-icons/fa";
import profilePic from "../assets/profile.jpg"; // replace with your image
import AnimatedBackground from "./AnimatedBackground";

const AboutMe = () => {
  const projects = [
    {
      title: "FOREVER",
      desc: "A fully responsive fashion eCommerce platform with secure authentication, admin dashboard, multi-payment support (Razorpay, Stripe, COD), voice-to-text search, and Cloudinary-powered image hosting.",
      icon: <FaShoppingBag className="text-pink-500 text-2xl" />,
    },
    {
      title: "Prescripto",
      desc: "A healthcare platform built with JWT authentication, Razorpay integration, and role-based access control for doctors, patients, and admins.",
      icon: <FaHospital className="text-green-500 text-2xl" />,
    },
    {
      title: "Tomato",
      desc: "A food ordering app with Stripe payments, real-time cart updates, email automation, and a full admin panel for inventory and order management.",
      icon: <FaUtensils className="text-red-500 text-2xl" />,
    },
    {
      title: "LMS Platform (in progress)",
      desc: "A learning management system with course creation, student enrollment, and secure video streaming.",
      icon: <FaBook className="text-blue-500 text-2xl" />,
    },
  ];

  const achievements = [
    {
      icon: <FaTrophy className="text-yellow-500 text-3xl" />,
      desc: "Participated in HackByte 3.0 at IIITDM Jabalpur, where our team enhanced Prescripto with AI features and email automation.",
    },
    {
      icon: <FaCertificate className="text-blue-500 text-3xl" />,
      desc: "Certified in Full Stack Web Development and Data Structures with Java. Focused on clean code, performance, and user-centric solutions.",
    },
  ];

  const renderCard = (icon, title, desc) => (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex flex-col items-start bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition duration-300"
    >
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-20 blur-xl transition"></div>
      <div className="flex items-center gap-3 mb-3 z-10">{icon}</div>
      {title && (
        <h3 className="text-lg font-bold text-white mb-2 z-10">{title}</h3>
      )}
      <p className="text-gray-200 text-sm z-10">{desc}</p>
    </motion.div>
  );

  return (
    <section
      id="about"
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

      {/* Overlay Layer */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 bg-[length:200%_200%] mix-blend-overlay"
      />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-6">
          About Me
          <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></span>
        </h2>

        {/* Intro */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={profilePic}
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg object-cover shrink-0"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl">
            I’m <strong className="text-blue-400">Soumyajit Manna</strong>, a
            Full Stack Developer passionate about building scalable, efficient,
            and user-friendly web applications. I specialize in solving
            real-world problems using the{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
              MERN stack
            </span>{" "}
            and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          <AnimatePresence mode="wait">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {renderCard(proj.icon, proj.title, proj.desc)}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Achievements & Certifications */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {renderCard(ach.icon, null, ach.desc)}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
