"use client";

import React, { useEffect, useState } from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-white text-black py-4 px-8">
      <div className="container mx-auto">
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 p-2 bg-black text-white rounded-full w-10 h-10 cursor-pointer"
          >
            🡩
          </button>
        )}

        <div className="text-center">
          <div className="flex items-center justify-center">
            <a href="https://www.linkedin.com/in/amin-mousoun-371a36261/" className="text-black hover:text-blue-800 mr-4">
              <BsLinkedin className="text-2xl" />
            </a>
            <a href="https://github.com/Amin21011" className="text-black hover:text-gray-600">
              <BsGithub className="text-2xl" />
            </a>
          </div>
          <div className="mt-4">
            &copy; {new Date().getFullYear()} FanWiki. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

