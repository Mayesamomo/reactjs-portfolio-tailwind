import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add scroll event listener to show/hide the scroll button
  window.addEventListener('scroll', handleScroll);

  return (
    <footer className="bg-background text-primary py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Michael Momo. All rights reserved.</p>
        <div className="flex flex-row mt-4 justify-center">
          <a href="#" className="text-primary hover:text-text mx-2">
            <FaFacebook />
          </a>
          <a href="#" className="text-primary hover:text-text mx-2">
            <FaTwitter />
          </a>
          <a href="#" className="text-primary hover:text-text mx-2">
            <FaInstagram />
          </a>
        </div>
      </div>
      {showScrollButton && (
        <div
          className="fixed bottom-4 right-4 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary-dark"
          onClick={scrollToTop}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      )}
    </footer>
  );
};

export default Footer;
