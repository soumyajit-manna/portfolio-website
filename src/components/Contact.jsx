import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_0wruo6a', // Replace with your EmailJS service ID
            'template_o4tnacf', // Replace with your EmailJS template ID
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message
            },
            'iuWnQmrOjMzxQd2zi' // Replace with your EmailJS user ID
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }).catch((err) => {
            console.error('FAILED...', err);
            alert('Failed to send message. Please try again later.');
        });
    };

    return (
        <section id="contact" className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-center text-blue-900 mb-12">Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Get in Touch</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    rows="4"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Contact Information</h3>
                        <p className="text-md text-gray-700 mb-4">Feel free to reach out to me through any of the following methods:</p>
                        <ul className="space-y-2">
                            <li className="text-md text-gray-700">
                                <strong>Email:</strong> mannasoumyajit47@gmail.com
                            </li>
                            <li className="text-md text-gray-700">
                                <strong>Phone:</strong> +91 9382869803
                            </li>
                            <li className="text-md text-gray-700">
                                <strong>Address:</strong> Haldia, Purba Medinipur, West Bengal, India
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;