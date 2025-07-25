import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0wruo6a",
        "template_o4tnacf",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "iuWnQmrOjMzxQd2zi"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-blue-50 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12 sm:mb-14">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6">
              Send a Message
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 text-sm sm:text-base rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 text-sm sm:text-base rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full mt-1 px-4 py-2 text-sm sm:text-base rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 text-sm sm:text-base rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6">
              Contact Information
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              I'm open to collaboration, internships, freelance work, or just a
              friendly chat. Reach out anytime.
            </p>
            <ul className="space-y-4 text-sm sm:text-base text-gray-700">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
