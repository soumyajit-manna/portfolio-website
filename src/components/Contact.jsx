import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaClipboard,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const [cooldown, setCooldown] = useState(0);
  const honeypotRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypotRef.current && honeypotRef.current.value) return;
    if (cooldown > 0) return;
    setLoading(true);
    setStatus(null);
    try {
      await emailjs.send(
        "service_0wruo6a",
        "template_o4tnacf",
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
        },
        "iuWnQmrOjMzxQd2zi"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setCharCount(0);
      setCooldown(10);
      const cd = setInterval(() => {
        setCooldown((c) => {
          if (c <= 1) {
            clearInterval(cd);
            return 0;
          }
          return c - 1;
        });
      }, 1000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // load draft
  useEffect(() => {
    const key = "contactDraft_v1";
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((f) => ({ ...f, ...parsed }));
        setCharCount(parsed.message?.length || 0);
      }
    } catch {}
  }, []);

  // persist draft
  useEffect(() => {
    const key = "contactDraft_v1";
    try {
      localStorage.setItem(key, JSON.stringify(formData));
    } catch {}
  }, [formData]);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      setTimeout(() => setStatus(null), 1500);
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full px-5 sm:px-10 lg:px-20 pt-16 py-20 overflow-hidden bg-portfolio"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 sm:mb-14"
        >
          Let's build something together
          <span className="block mx-auto w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-4">
              Send a Message
            </h3>

            <form
              className="space-y-4"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              <input
                ref={honeypotRef}
                type="text"
                name="website"
                className="hidden"
                autoComplete="off"
                tabIndex={-1}
              />

              <div className="relative">
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full mt-1 px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-400/30 bg-white/5 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-3 text-sm text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-200"
                >
                  Your name
                </label>
              </div>

              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full mt-1 px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-400/30 bg-white/5 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-3 text-sm text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-200"
                >
                  Your email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => {
                    handleChange(e);
                    setCharCount(e.target.value.length);
                  }}
                  rows={6}
                  className="peer w-full mt-1 px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-400/30 bg-white/5 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-sm text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-200"
                >
                  Your message
                </label>
                <div className="flex justify-between items-center mt-2 text-xs text-gray-300">
                  <span>{charCount} / 1000</span>
                  <span className="italic">Be concise — I read fast.</span>
                </div>
              </div>

              <div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading || cooldown > 0}
                  className="w-full bg-blue-600 text-white px-6 py-3 text-sm sm:text-base rounded-2xl font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-60"
                >
                  {loading
                    ? "Sending..."
                    : cooldown > 0
                    ? `Wait ${cooldown}s`
                    : "Send Message"}
                </motion.button>
              </div>
            </form>

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
                <span className="flex-1">mannasoumyajit47@gmail.com</span>
                <button
                  onClick={() => copyToClipboard("mannasoumyajit47@gmail.com")}
                  aria-label="Copy email"
                  className="ml-2 p-2 rounded-md hover:bg-white/5"
                >
                  <FaClipboard />
                </button>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-500 min-w-[20px]" />
                <span className="flex-1">+91 9382869803</span>
                <button
                  onClick={() => copyToClipboard("+919382869803")}
                  aria-label="Copy phone"
                  className="ml-2 p-2 rounded-md hover:bg-white/5"
                >
                  <FaClipboard />
                </button>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500 min-w-[20px]" />
                <span className="flex-1">
                  Haldia, Purba Medinipur, West Bengal, India
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      "Haldia, Purba Medinipur, West Bengal, India"
                    )
                  }
                  aria-label="Copy location"
                  className="ml-2 p-2 rounded-md hover:bg-white/5"
                >
                  <FaClipboard />
                </button>
              </li>
            </ul>

            <div className="flex gap-5 mt-6 text-2xl text-blue-300 items-center">
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
              {status === "copied" && (
                <span className="ml-2 text-sm text-blue-200">Copied!</span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
