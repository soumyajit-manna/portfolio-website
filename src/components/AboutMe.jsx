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
                            I'm Soumyajit Manna, a dedicated Full Stack Web Developer with a
                            strong foundation in creating scalable and responsive web
                            applications. I have expertise in technologies like React.js,
                            Node.js, MongoDB, and Express.js. My technical journey includes
                            certifications in Full Stack Web Development and Data Structures
                            and Algorithms with Java, which have equipped me with the skills
                            to solve real-world problems through code.
                            <br />
                            <br />
                            I'm passionate about building impactful digital solutions and
                            constantly exploring new tools and frameworks to grow as a
                            developer.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;