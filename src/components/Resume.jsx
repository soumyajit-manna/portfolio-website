import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-center text-blue-900 mb-12">Resume</h2>
                <div className="flex justify-center">
                    <a
                        href="/Full Stack Web Developer. B.Tech in Computer Science & Engineering.pdf" // Path to your resume in the public folder
                        download="Full Stack Web Developer.B.Tech in Computer Science & Engineering.pdf" // The name of the file to be downloaded
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
