import React from 'react';

const Education = () => {
    const educationDetails = [
        {
             degree: "Bachelor of Technology in Computer Science & Engineering",
            institution: "Haldia Institute of Technology",
            duration: "2022 - 2026",
            description: "Pursuing B.Tech with a focus on Full Stack Web Development (MERN Stack) and Data Structures & Algorithms in Java. Gaining practical experience through multiple real-world full stack projects.",
            cgpa: "CGPA: 6.72 / 10"
        },

        {
            degree: "Higher Secondary Education",
            institution: "Chakdwipa High School",
            duration: "2020 - 2022",
            percentage: "Percentage: 92.6%",
            board: "Board: WBCHSE"
        },
        {
            degree: "Secondary Education",
            institution: "Chakdwipa High School",
            duration: "2015 - 2020",
            percentage: "Percentage: 80.57%",
            board: "Board: WBBSE"
        }
    ];

    return (
        <section id="education" className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-center text-blue-900 mb-12">Education</h2>
                <div className="space-y-8">
                    {educationDetails.map((education, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-blue-500">{education.degree}</h3>
                            <p className="text-md text-gray-700 mt-2">{education.institution}</p>
                            <p className="text-md text-gray-500">{education.duration}</p>
                            {education.cgpa && <p className="text-md text-gray-500">{education.cgpa}</p>}
                            {education.percentage && <p className="text-md text-gray-500">{education.percentage}</p>}
                            {education.board && <p className="text-md text-gray-500">{education.board}</p>}
                            {education.description && <p className="text-sm text-gray-600 mt-4">{education.description}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
