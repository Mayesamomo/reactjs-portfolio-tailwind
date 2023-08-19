/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-12">
                <div className="max-w-lg mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-text mb-4">
                        Let's Connect!
                    </h2>
                    <p className="text-gray-700 mb-8">
                        Ready to make things happen? Whether you have a project idea, a question, or just want to chat, I'm all ears.
                        Your goals matter, and I'm here to help you achieve them. Get in touch today and let's turn your ideas into reality. Contact me now for a brighter tomorrow.
                    </p>
                    <form className="bg-white rounded-lg px-6 py-8 shadow-md" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" name="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
                            <textarea
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message" name="message" rows="6" placeholder="Enter your message" value={formData.message} onChange={handleInputChange}></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-text hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact
