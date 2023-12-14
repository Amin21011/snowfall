"use client";

import Link from 'next/link';
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";


const Navbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <nav className="flex justify-between items-center border-b p-4 bg-black sticky top-0 z-50">
        <div className="flex items-center">
    <button onClick={handleToggleOffcanvas}>
      <Bars3Icon className="h-6 w-6 text-white" />
    </button>
  </div>
  <div className="hidden md:flex justify-center flex-grow">
    <div className="flex space-x-32">
      <Link href="/" passHref>
        <span className="font-bold text-lg text-white hover:text-orange-400">Home</span>
      </Link>
      <Link href="/seasons" passHref>
        <span className="font-bold text-lg text-white hover:text-orange-400">Episode-Guide</span>
      </Link>
      <Link href="/characters" passHref>
        <span className="font-bold text-lg text-white hover:text-orange-400">Characters</span>
      </Link>
      <Link href="/locations" passHref>
        <span className="font-bold text-lg text-white hover:text-orange-400">Locations</span>
      </Link>
    </div>
  </div>
  <div className="flex items-center space-x-8">
  <Link href="https://www.linkedin.com/in/amin-mousoun-371a36261/" passHref>
    <span className="text-white hover:text-blue-800">
      <BsLinkedin className="text-2xl" />
    </span>
  </Link>
  <Link href="https://github.com/Amin21011" className="text-white hover:text-gray-600" passHref>
    <span className="text-white hover:text-blue-800">
      <BsGithub className="text-2xl" />
    </span>
  </Link>
</div>


      {showOffcanvas && (
  <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50">
    <div className="absolute inset-y-0 left-0 max-w-xs w-full bg-black">
      <div className="flex justify-end">
        <button onClick={handleToggleOffcanvas} className="p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="py-4 px-8">
        <p className="mt-4">
          <Link href="/" passHref>
            <span className="font-bold text-lg text-white hover:text-orange-400">Home</span>
          </Link>
          <br />
          <Link href="/seasons" passHref>
            <span className="font-bold text-lg text-white hover:text-orange-400">Episode-Guide</span>
          </Link>
          <br />
          <Link href="/characters" passHref>
            <span className="font-bold text-lg text-white hover:text-orange-400">Characters</span>
          </Link>
          <br />
          <Link href="/locations" passHref>
            <span className="font-bold text-lg text-white hover:text-orange-400">Locations</span>
          </Link>
          <br />
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full py-4 px-8 space-x-2">
        <img src="/logo.jpg" alt="Jouw Afbeelding" className="w-auto h-auto" />
      </div>
    </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
