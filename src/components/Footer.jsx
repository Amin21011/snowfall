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
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 text-white border-t border-black py-4 px-8">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Seasons */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Seasons</h3>
            <ul>
              <li className="mb-2"><a href="/">Season 1</a></li>
              <li className="mb-2"><a href="/">Season 2</a></li>
              <li className="mb-2"><a href="/">Season 3</a></li>
              <li className="mb-2"><a href="/">Season 4</a></li>
              <li className="mb-2"><a href="/">Season 5</a></li>
              <li className="mb-2"><a href="/">Season 6</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Locations</h3>
            <ul>
            </ul>
          </div>

          {/* Characters */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Characters</h3>
            <ul>
            </ul>
          </div>

          {/* Organizations */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Organizations</h3>
            <ul>
            </ul>
          </div>

          {/* Social icons */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Social Media</h3>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/amin-mousoun-371a36261/" className="text-blue-600 hover:text-blue-800">
                <BsLinkedin className="text-2xl" />
              </a>
              <a href="https://github.com/Amin21011" className="text-black hover:text-gray-600">
                <BsGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 p-2 bg-black text-white rounded-full w-10 h-10 cursor-pointer"
          >
            🡩
          </button>
        )}

        <div className="mt-8 text-center">
          <div>
            &copy; {new Date().getFullYear()} FanWiki. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
