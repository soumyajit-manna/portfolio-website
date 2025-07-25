import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-white to-blue-50 px-5 sm:px-10 lg:px-20 py-20"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="w-full space-y-6 text-base sm:text-lg text-gray-800 leading-relaxed break-words"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <p>
          I’m <strong className="text-blue-700">Soumyajit Manna</strong>, a Full
          Stack Developer focused on building scalable, efficient, and
          user-friendly web applications. I specialize in solving real-world
          problems using the <strong>MERN stack</strong> and modern web
          technologies.
        </p>

        <p>Here are some full stack projects I’ve worked on:</p>

        <ul className="list-disc pl-4 space-y-3">
          <li className="ml-1">
            <strong className="text-blue-700">FOREVER</strong> – A fully
            responsive fashion eCommerce platform with secure authentication,
            admin dashboard, multi-payment support (Razorpay, Stripe, COD),
            voice-to-text search, and Cloudinary-powered image hosting.
          </li>
          <li className="ml-1">
            <strong className="text-blue-700">Prescripto</strong> – A healthcare
            platform built with JWT authentication, Razorpay integration, and
            role-based access control for doctors, patients, and admins.
          </li>
          <li className="ml-1">
            <strong className="text-blue-700">Tomato</strong> – A food ordering
            app with Stripe payments, real-time cart updates, email automation,
            and a full admin panel for inventory and order management.
          </li>
          <li className="ml-1">
            Currently building an <strong>LMS platform</strong> with course
            creation, student enrollment, and secure video streaming (in
            progress).
          </li>
        </ul>

        <p>
          I participated in{" "}
          <strong className="text-blue-700">
            HackByte 3.0 at IIITDM Jabalpur
          </strong>
          , where our team enhanced Prescripto with <em>AI features</em> and{" "}
          <em>email automation</em>.
        </p>

        <p>
          I’ve completed certifications in Full Stack Web Development and Data
          Structures with Java. My workflow emphasizes clean code, performance,
          and practical user-centric solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
