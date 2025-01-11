import React from "react";
import heroBg from "../assets/webdev.svg";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import backgroundImage from "../assets/background.png"; // Ensure this path is correct

const Home = () => {
    return (
        <div
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: "cover",
            }}
        >
            <main
                className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
                id="home"
            >
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <motion.span className="block text-white">
                            Hi, I am Soumyajit
                        </motion.span>
                        <span className="block text-blue-500 z-0 lg:inline">
                            Full Stack Web Developer
                        </span>
                    </h1>
                    <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        I build scalable and responsive web applications using modern
                        technologies.
                    </p>
                    <div className="flex md:justify-start mt-8">
                        <a
                            href="https://github.com/soumyajit-manna"
                            className="mr-5 cursor-pointer hover:scale-125"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={30} />
                        </a>
                        <a
                            href="https://linkedin.com/in/soumyajit-manna-731372270"
                            className="mr-5 cursor-pointer hover:scale-125"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={30} />
                        </a>
                        <a
                            href="https://twitter.com/Mindwrap_Error"
                            className="mr-5 cursor-pointer hover:scale-125"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size={30} />
                        </a>
                        <a
                            href="mailto:mannasoumyajit47@gmail.com.com"
                            className="mr-5 cursor-pointer hover:scale-125"
                        >
                            <FaEnvelope size={30} />
                        </a>
                    </div>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                            <Link
                                to="resume"
                                smooth={true}
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                            >
                                Resume
                            </Link>
                        </div>
                    </div>
                </div>
                <motion.img
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                type: "spring",
                            },
                        },
                        hidden: { opacity: 1, y: 80 },
                    }}
                    src={heroBg}
                    alt="Web Development"
                    className="md:w-3/6 hidden sm:block"
                />
            </main>
        </div>
    );
};

export default Home;