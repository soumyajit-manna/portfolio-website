import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaStripe, FaCss3Alt, FaJs, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRender, SiTailwindcss, SiVercel } from "react-icons/si";
import project1Thumbnail from '../assets/project1.png'; // Import the image for project 1
import project2Thumbnail from '../assets/project2.png'; // Import the image for project 2
import project3Thumbnail from '../assets/project3.png'; // Import the image for project 3
import project4Thumbnail from '../assets/project4.png'; // Import the image for project 4
import project5Thumbnail from '../assets/project5.png'; // Import the image for project 5

const projects = [
    {
        title: "Tomato - Full Stack Food Delivery Platform",
        description: "A responsive food delivery platform allowing customers to browse menus, place orders, and pay securely using Stripe. Features include real-time order tracking, cart management, and an admin panel for managing food items and orders.",
        projectLink: "https://tomato-frontend-ppm5.onrender.com",
        sourceCodeLink: "https://github.com/soumyajit-manna/Tomato-Full-Stack-Food-Delivery-Platform.git",
        thumbnail: project1Thumbnail, // Use the imported image
    },
    {
        title: "Prescripto - Full Stack Healthcare Portal",
        description: "A healthcare platform enabling patients to book appointments, update profiles, and make payments via Razorpay. Features role-based authentication with permissions for doctors, admins, and patients.",
        projectLink: "https://prescripto-frontend-two.vercel.app",
        sourceCodeLink: "https://github.com/soumyajit-manna/Doctor-Appointment-Booking-System.git",
        thumbnail: project2Thumbnail, // Use the imported image
    },
    {
        title: "Simon Says Game",
        description: "A fun memory game where players repeat an increasingly complex sequence of colors. Features include score tracking, visual feedback, and progressively challenging gameplay.",
        projectLink: "https://soumyajit-manna.github.io/Simon-Says-Game",
        sourceCodeLink: "https://github.com/soumyajit-manna/Simon-Says-Game.git",
        thumbnail: project3Thumbnail, // Use the imported image
    },
    {
        title: "Restaurant Landing Page",
        description: "A static, responsive landing page designed to showcase a restaurant's offerings, ambiance, and contact information. Features include a visually appealing hero section, menu highlights, and a contact form.",
        projectLink: "https://soumyajit-manna.github.io/Restaurant-Landing-Page",
        sourceCodeLink: "https://github.com/soumyajit-manna/Restaurant-Landing-Page.git",
        thumbnail: project4Thumbnail, // Use the imported image
    },
    {
        title: "Spotify Clone",
        description: "A static frontend clone of the Spotify music streaming platform, replicating its interface and design using HTML and CSS.",
        projectLink: "https://soumyajit-manna.github.io/Spotify-Clone",
        sourceCodeLink: "https://github.com/soumyajit-manna/Spotify-Clone.git",
        thumbnail: project5Thumbnail, // Use the imported image
    },
];

const Projects = () => {
    return (
        <section id="projects" className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <h2 className="text-5xl font-bold px-4 md:px-0 text-center text-blue-900">
                    Projects
                </h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-between ${index >= 3 ? 'col-span-2 lg:col-span-1 mx-auto' : ''}`}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div>
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <h3 className="text-2xl font-semibold text-blue-500 mt-4 h-12">
                                    {project.title}
                                </h3>
                                <p className="mt-4 text-sm text-gray-700 h-24">
                                    {project.description}
                                </p>
                                <p className="mt-4 text-md text-gray-600 text-center h-8">
                                    <strong>Tech Stack:</strong>
                                </p>
                                <div className="flex flex-wrap justify-center mt-2 space-x-2 h-12">
                                    {index === 0 && (
                                        <>
                                            <FaReact className="text-blue-500" size={24} />
                                            <FaJs className="text-yellow-500" size={24} />
                                            <SiMongodb className="text-green-500" size={24} />
                                            <SiExpress className="text-gray-500" size={24} />
                                            <FaNodeJs className="text-green-600" size={24} />
                                            <FaStripe className="text-blue-600" size={24} />
                                            <FaCss3Alt className="text-blue-600" size={24} />
                                            <SiRender className="text-blue-600" size={24} />
                                        </>
                                    )}
                                    {index === 1 && (
                                        <>
                                            <FaReact className="text-blue-500" size={24} />
                                            <FaJs className="text-yellow-500" size={24} />
                                            <FaNodeJs className="text-green-600" size={24} />
                                            <SiExpress className="text-gray-500" size={24} />
                                            <SiMongodb className="text-green-500" size={24} />
                                            <SiTailwindcss className="text-teal-500" size={24} />
                                            <SiVercel className="text-black" size={24} />
                                        </>
                                    )}
                                    {index === 2 && (
                                        <>
                                            <FaHtml5 className="text-orange-600" size={24} />
                                            <FaCss3Alt className="text-blue-600" size={24} />
                                            <FaJs className="text-yellow-500" size={24} />
                                        </>
                                    )}
                                    {index === 3 && (
                                        <>
                                            <FaHtml5 className="text-orange-600" size={24} />
                                            <FaCss3Alt className="text-blue-600" size={24} />
                                        </>
                                    )}
                                    {index === 4 && (
                                        <>
                                            <FaHtml5 className="text-orange-600" size={24} />
                                            <FaCss3Alt className="text-blue-600" size={24} />
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="mt-4">
                                <a
                                    href={project.projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-blue-500 hover:text-blue-700 mr-4"
                                >
                                    View Project
                                </a>
                                <a
                                    href={project.sourceCodeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-blue-500 hover:text-blue-700"
                                >
                                    Source Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;