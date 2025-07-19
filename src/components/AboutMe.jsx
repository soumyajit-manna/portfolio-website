import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <div id="about" className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <h2 className="text-5xl font-bold px-4 md:px-0 text-center text-blue-900">
                    About Me
                </h2>
                <div>
                    <motion.div>
                        <h4 className="mt-12 text-3xl font-semibold text-blue-500">
                            A bit about me
                        </h4>
                       <p className="mt-4 text-xl text-justify text-gray-700">
  I'm Soumyajit Manna, a passionate Full Stack Web Developer with hands-on experience in building and deploying scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
  <br /><br />
  I've built real-world projects like <strong>Prescripto</strong> (a doctor appointment platform with Razorpay integration) and <strong>Tomato</strong> (a food delivery system with Stripe payments), and I'm currently developing an LMS platform to support online learning.
  <br /><br />
  I participated in <strong>HackByte 3.0 at IIITDM Jabalpur</strong>, where our team enhanced Prescripto by integrating AI features and email automation.
  <br /><br />
  Certified in Full Stack Development and Data Structures with Java, I’m driven to create impactful digital solutions and constantly explore new tools to grow as a developer.
</p>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
