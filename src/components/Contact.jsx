import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import AnimatedBackground from "./AnimatedBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const result = await emailjs.send(
        "service_0wruo6a", // your Service ID
        "template_o4tnacf", // your Template ID
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
        },
        "iuWnQmrOjMzxQd2zi" // your Public Key
      );
      console.log("EmailJS Success:", result.status, result.text);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full px-5 sm:px-10 lg:px-20 pt-16 py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black"
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

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 sm:mb-14">
          Contact Me
          <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-6">
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 text-sm sm:text-base rounded-md border border-gray-400/30 bg-white/10 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 text-sm sm:text-base rounded-md border border-gray-400/30 bg-white/10 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full mt-1 px-4 py-2 text-sm sm:text-base rounded-md border border-gray-400/30 bg-white/10 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white px-6 py-3 text-sm sm:text-base rounded-full font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>

            {/* Status Message */}
            {status === "success" && (
              <p className="mt-4 text-green-400 text-sm font-medium">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-400 text-sm font-medium">
                ❌ Failed to send. Check console for error.
              </p>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-6">
              Contact Information
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6">
              I'm open to collaboration, internships, freelance work, or just a
              friendly chat. Reach out anytime.
            </p>
            <ul className="space-y-4 text-sm sm:text-base text-gray-300">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500 min-w-[20px]" />
                <span>mannasoumyajit47@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-500 min-w-[20px]" />
                <span>+91 9382869803</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500 min-w-[20px]" />
                <span>Haldia, Purba Medinipur, West Bengal, India</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-5 mt-6 text-2xl text-blue-500">
              <a
                href="https://linkedin.com/in/soumyajit-manna-731372270"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/soumyajit-manna"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
