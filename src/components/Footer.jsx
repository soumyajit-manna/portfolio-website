// filepath: /c:/Users/manna/OneDrive/Desktop/portfolio-website/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 text-white text-center">
            &copy; {new Date().getFullYear()} Soumyajit Manna. All rights reserved.
        </footer>
    );
};

export default Footer;