import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiJsonwebtokens, SiAxios, SiCloudinary, SiVercel, SiRender, SiPostman } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";
import { FiZap } from "react-icons/fi"; // Using FiZap as a generic icon for Thunderclient
import { IoMdCloud } from "react-icons/io"; // Using IoMdCloud as a generic icon for Hopscotch

const Skills = () => {
    const [activeTab, setActiveTab] = useState("frontend");

    return (
        <section id="skills" className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <h2 className="text-5xl font-bold px-4 md:px-0 text-center text-blue-900">
                    Skills
                </h2>
                <div
                    role="tablist"
                    aria-orientation="horizontal"
                    className="h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground font-Quicksand grid w-full grid-cols-3 mt-8 border border-blue-500"
                    tabIndex="0"
                    data-orientation="horizontal"
                    style={{ outline: "none" }}
                >
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "frontend"}
                        aria-controls="frontend-content"
                        data-state={activeTab === "frontend" ? "active" : "inactive"}
                        id="frontend-trigger"
                        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === "frontend"
                                ? "bg-background text-foreground shadow-inner"
                                : ""
                            }`}
                        tabIndex={activeTab === "frontend" ? "0" : "-1"}
                        data-orientation="horizontal"
                        onClick={() => setActiveTab("frontend")}
                        style={{
                            boxShadow: activeTab === "frontend" ? "inset 0 2px 4px rgba(0, 0, 0, 0.25)" : "none",
                        }}
                    >
                        FrontEnd
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "backend"}
                        aria-controls="backend-content"
                        data-state={activeTab === "backend" ? "active" : "inactive"}
                        id="backend-trigger"
                        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === "backend"
                                ? "bg-background text-foreground shadow-inner"
                                : ""
                            }`}
                        tabIndex={activeTab === "backend" ? "0" : "-1"}
                        data-orientation="horizontal"
                        onClick={() => setActiveTab("backend")}
                        style={{
                            boxShadow: activeTab === "backend" ? "inset 0 2px 4px rgba(0, 0, 0, 0.25)" : "none",
                        }}
                    >
                        Backend
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "others"}
                        aria-controls="others-content"
                        data-state={activeTab === "others" ? "active" : "inactive"}
                        id="others-trigger"
                        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === "others" ? "bg-background text-foreground shadow-inner" : ""
                            }`}
                        tabIndex={activeTab === "others" ? "0" : "-1"}
                        data-orientation="horizontal"
                        onClick={() => setActiveTab("others")}
                        style={{
                            boxShadow: activeTab === "others" ? "inset 0 2px 4px rgba(0, 0, 0, 0.25)" : "none",
                        }}
                    >
                        Others
                    </button>
                </div>
                <div className="mt-8">
                    {activeTab === "frontend" && (
                        <div id="frontend-content" className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center">
                                <FaHtml5 size={50} className="text-orange-600" />
                                <p className="mt-2 text-lg font-medium">HTML</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaCss3Alt size={50} className="text-blue-600" />
                                <p className="mt-2 text-lg font-medium">CSS</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaJs size={50} className="text-yellow-500" />
                                <p className="mt-2 text-lg font-medium">JavaScript</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaReact size={50} className="text-blue-500" />
                                <p className="mt-2 text-lg font-medium">React.js</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiTailwindcss size={50} className="text-teal-500" />
                                <p className="mt-2 text-lg font-medium">TailwindCSS</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiBootstrap size={50} className="text-purple-600" />
                                <p className="mt-2 text-lg font-medium">Bootstrap</p>
                            </div>
                        </div>
                    )}
                    {activeTab === "backend" && (
                        <div id="backend-content" className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center">
                                <FaNodeJs size={50} className="text-green-600" />
                                <p className="mt-2 text-lg font-medium">Node.js</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiExpress size={50} className="text-gray-600" />
                                <p className="mt-2 text-lg font-medium">Express.js</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiMongodb size={50} className="text-green-500" />
                                <p className="mt-2 text-lg font-medium">MongoDB</p>
                            </div>
                        </div>
                    )}
                    {activeTab === "others" && (
                        <div id="others-content" className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center">
                                <FaJava size={50} className="text-red-600" />
                                <p className="mt-2 text-lg font-medium">Java</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiJsonwebtokens size={50} className="text-blue-600" />
                                <p className="mt-2 text-lg font-medium">JWT</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <RiLockPasswordLine size={50} className="text-gray-600" />
                                <p className="mt-2 text-lg font-medium">bcrypt</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <MdSecurity size={50} className="text-blue-600" />
                                <p className="mt-2 text-lg font-medium">CORS</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiAxios size={50} className="text-blue-600" />
                                <p className="mt-2 text-lg font-medium">Axios</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <BsFillShieldLockFill size={50} className="text-yellow-600" />
                                <p className="mt-2 text-lg font-medium">Toastify</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiCloudinary size={50} className="text-blue-600" />
                                <p className="mt-2 text-lg font-medium">Cloudinary</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiVercel size={50} className="text-black" />
                                <p className="mt-2 text-lg font-medium">Vercel</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiRender size={50} className="text-blue-600" />
                                <p className="mt-2 text-lg font-medium">Render</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaGit size={50} className="text-orange-600" />
                                <p className="mt-2 text-lg font-medium">Git</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaGithub size={50} className="text-black" />
                                <p className="mt-2 text-lg font-medium">Github</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <AiOutlineApi size={50} className="text-green-600" />
                                <p className="mt-2 text-lg font-medium">RESTful APIs</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FiZap size={50} className="text-blue-600" />
                                <p className="mt-2 text-lg font-medium">Thunderclient</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <IoMdCloud size={50} className="text-orange-600" />
                                <p className="mt-2 text-lg font-medium">Hopscotch</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiPostman size={50} className="text-orange-600" />
                                <p className="mt-2 text-lg font-medium">Postman</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;