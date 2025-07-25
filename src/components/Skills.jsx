import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiAxios,
  SiCloudinary,
  SiVercel,
  SiRender,
  SiPostman,
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";
import { FiZap } from "react-icons/fi";
import { IoMdCloud } from "react-icons/io";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const renderSkill = (Icon, label, color = "") => (
    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">
      <Icon size={40} className={`mb-2 ${color}`} />
      <p className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-800">
        {label}
      </p>
    </div>
  );

  const tabs = ["frontend", "backend", "database", "languages", "tools & tech"];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-white to-blue-50 py-20 px-4 sm:px-10 lg:px-20"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-10">
        Skills
      </h2>

      {/* Scrollable Tabs */}
      <div className="mb-8">
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex justify-center w-max md:w-full space-x-3 sm:space-x-4 px-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap flex-shrink-0 px-4 py-2 text-sm sm:text-base font-medium rounded-full border transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-blue-600 border-blue-400 hover:bg-blue-100"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {activeTab === "frontend" && (
          <>
            {renderSkill(FaHtml5, "HTML", "text-orange-600")}
            {renderSkill(FaCss3Alt, "CSS", "text-blue-600")}
            {renderSkill(FaJs, "JavaScript", "text-yellow-500")}
            {renderSkill(FaReact, "React.js", "text-blue-500")}
            {renderSkill(SiTailwindcss, "Tailwind CSS", "text-teal-500")}
            {renderSkill(SiBootstrap, "Bootstrap", "text-purple-600")}
          </>
        )}

        {activeTab === "backend" && (
          <>
            {renderSkill(FaNodeJs, "Node.js", "text-green-600")}
            {renderSkill(SiExpress, "Express.js", "text-gray-600")}
          </>
        )}

        {activeTab === "database" && (
          <>
            {renderSkill(SiMongodb, "MongoDB", "text-green-500")}
            {renderSkill(FaJava, "SQL", "text-blue-800")}
          </>
        )}

        {activeTab === "languages" && (
          <>{renderSkill(FaJava, "Java", "text-red-600")}</>
        )}

        {activeTab === "tools & tech" && (
          <>
            {renderSkill(AiOutlineApi, "REST APIs", "text-green-600")}
            {renderSkill(SiJsonwebtokens, "JWT", "text-blue-600")}
            {renderSkill(BsFillShieldLockFill, "Clerk", "text-pink-600")}
            {renderSkill(SiCloudinary, "Cloudinary", "text-blue-600")}
            {renderSkill(FaGit, "Git", "text-orange-600")}
            {renderSkill(FaGithub, "GitHub", "text-black")}
            {renderSkill(BsFillShieldLockFill, "Razorpay", "text-gray-800")}
            {renderSkill(BsFillShieldLockFill, "Stripe", "text-indigo-600")}
            {renderSkill(BsFillShieldLockFill, "Nodemailer", "text-red-500")}
            {renderSkill(SiRender, "Render", "text-blue-600")}
            {renderSkill(SiVercel, "Vercel", "text-black")}
            {renderSkill(FiZap, "Thunderclient", "text-blue-600")}
            {renderSkill(IoMdCloud, "Hopscotch", "text-orange-600")}
            {renderSkill(SiPostman, "Postman", "text-orange-600")}
            {renderSkill(MdSecurity, "CORS", "text-blue-600")}
            {renderSkill(SiAxios, "Axios", "text-blue-600")}
            {renderSkill(BsFillShieldLockFill, "Toastify", "text-yellow-600")}
            {renderSkill(RiLockPasswordLine, "bcrypt", "text-gray-600")}
          </>
        )}
      </div>
    </section>
  );
};

export default Skills;
