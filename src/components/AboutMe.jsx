import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaShoppingBag,
  FaHospital,
  FaUtensils,
  FaBook,
  FaTrophy,
  FaCertificate,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaServer,
  FaCloud,
  FaPlug,
} from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

const AboutMe = () => {
  const projects = [
    {
      title: "FOREVER",
      desc: "A responsive fashion eCommerce platform with secure authentication, admin dashboard, multi-payment support, voice-to-text search, and Cloudinary image hosting.",
      icon: <FaShoppingBag className="text-pink-500 text-2xl" />,
    },
    {
      title: "Prescripto",
      desc: "Healthcare platform with JWT auth, Razorpay integration, and role-based access control.",
      icon: <FaHospital className="text-green-500 text-2xl" />,
    },
    {
      title: "Tomato",
      desc: "Food ordering app with Stripe payments, real-time cart updates, email automation, and full admin panel.",
      icon: <FaUtensils className="text-red-500 text-2xl" />,
    },
    {
      title: "LMS Platform",
      desc: "Learning management system with course creation, student enrollment, and secure video streaming.",
      icon: <FaBook className="text-blue-500 text-2xl" />,
    },
  ];

  const achievements = [
    {
      icon: <FaTrophy className="text-yellow-400 text-3xl" />,
      desc: "HackByte 3.0: Enhanced Prescripto with AI & email automation.",
    },
    {
      icon: <FaCertificate className="text-purple-400 text-3xl" />,
      desc: "Certified in Full Stack Web Development & Data Structures with Java.",
    },
  ];

  const skills = [
    {
      icon: <FaCode className="text-blue-400 text-3xl" />,
      title: "Frontend Development",
      desc: "React, JavaScript, Tailwind CSS",
    },
    {
      icon: <FaServer className="text-green-400 text-3xl" />,
      title: "Backend Development",
      desc: "Node.js, Express.js, MongoDB",
    },
    {
      icon: <FaCloud className="text-purple-400 text-3xl" />,
      title: "Cloud Deployment",
      desc: "AWS, Vercel, Render",
    },
    {
      icon: <FaPlug className="text-yellow-400 text-3xl" />,
      title: "API Integration",
      desc: "REST APIs, Payment Gateways",
    },
  ];

  const cardStyle =
    "bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg transition-transform";

  const [active, setActive] = useState(0);

  const goToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#projects";
  };

  return (
    <section
      id="about"
      name="about"
      className="relative py-16 px-4 sm:px-8 lg:px-20 bg-portfolio overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-16">
        {/* Intro */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-spin-slow blur-2xl"></div>
            <img
              src={profilePic}
              alt="Profile"
              className="relative w-full h-full rounded-full object-cover border-4 border-white/30 shadow-xl"
            />
          </div>

          <p className="text-gray-200 text-lg sm:text-xl max-w-xl">
            I’m{" "}
            <span className="text-blue-400 font-semibold">Soumyajit Manna</span>
            , I craft full-stack web applications using React, Tailwind, Node.js, Express, MongoDB, and SQL. From designing sleek interfaces to integrating payments and authentication, I love handling every layer of development. My goal? To build fast, reliable, and user-friendly apps that solve real problems.
          </p>
        </motion.div>

        {/* Projects showcase */}
        <div className="w-full grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Project Card */}
          <div className="lg:col-span-2 flex flex-col gap-6 items-center">
            <div
              className={`${cardStyle} min-h-[220px] w-full flex flex-col justify-between`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{projects[active].icon}</div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">
                      {projects[active].title}
                    </h3>
                    <p className="text-gray-300 mt-1 line-clamp-3 text-sm">
                      {projects[active].desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActive(
                        (p) => (p - 1 + projects.length) % projects.length
                      )
                    }
                    className="text-white/80 hover:text-white p-2 rounded-full bg-white/3 hover:bg-white/5"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={() => setActive((p) => (p + 1) % projects.length)}
                    className="text-white/80 hover:text-white p-2 rounded-full bg-white/3 hover:bg-white/5"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              <button
                onClick={goToProjects}
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold shadow-md self-start"
              >
                View Projects
              </button>
            </div>

            {/* Centered Project Buttons */}
            <div className="flex items-center justify-center gap-4 mt-4">
              {projects.map((p, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActive(idx)}
                  whileHover={{ rotate: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-center w-16 h-16 rounded-full border border-white/10 bg-white/5 text-xl transition-all ${
                    active === idx
                      ? "ring-4 ring-blue-500"
                      : "opacity-90 hover:opacity-100"
                  }`}
                >
                  {p.icon}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={cardStyle + " p-6"}
            >
              <h4 className="text-lg font-bold text-white mb-4">
                Achievements
              </h4>
              <div className="flex flex-col gap-4">
                {achievements.map((ach, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/3 p-3 rounded-xl"
                  >
                    <div className="p-2 rounded-full bg-white/5">
                      {ach.icon}
                    </div>
                    <p className="text-gray-200 text-sm">{ach.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skills grid: 4 boxes responsive */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-xl font-bold text-white mb-6 text-center">
            What I do
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s, i) => (
              <div
                key={i}
                className={`${cardStyle} flex flex-col items-center text-center p-6 hover:scale-[1.02]`}
              >
                <div className="p-3 rounded-full bg-white/5 mb-3">{s.icon}</div>
                <h5 className="text-white font-semibold text-lg">{s.title}</h5>
                <p className="text-gray-300 text-sm mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
