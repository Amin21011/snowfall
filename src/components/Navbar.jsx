"use client";

import Link from 'next/link';
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Navbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <nav className="flex justify-between items-center border-b border-black p-4 bg-gradient-to-r from-slate-900 via-purple-900">
      <div className="flex items-center">
        <button onClick={handleToggleOffcanvas}>
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>
      <div className="hidden md:flex justify-center flex-grow">
        <div className="flex space-x-32">
          <Link href="/" passHref>
            <span className="font-bold text-lg text-white">Home</span>
          </Link>
          <Link href="/seasons" passHref>
            <span className="font-bold text-lg text-white">Seasons</span>
          </Link>
          <Link href="/locations" passHref>
            <span className="font-bold text-lg text-white">Locations</span>
          </Link>
          <Link href="/characters" passHref>
            <span className="font-bold text-lg text-white">Characters</span>
          </Link>
          <Link href="/organizations" passHref>
            <span className="font-bold text-lg text-white">Organizations</span>
          </Link>
        </div>
      </div>

      {showOffcanvas && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50">
          <div className="absolute inset-y-0 left-0 max-w-xs w-full bg-[#2C2C2C] shadow-xl bg-[#2C2C2C]">
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
                  <span className="font-bold text-lg text-white text-white">Home</span>
                </Link>
                <br />
                <Link href="/seasons" passHref>
                  <span className="font-bold text-lg text-white text-white">Seasons</span>
                </Link>
                <br />
                <Link href="/locations" passHref>
                  <span className="font-bold text-lg text-white text-white">Locations</span>
                </Link>
                <br />
                <Link href="/characters" passHref>
                  <span className="font-bold text-lg text-white text-white">Characters</span>
                </Link>
                <br />
                <Link href="/organizations" passHref>
                  <span className="font-bold text-lg text-white text-white">Organizations</span>
                </Link>
                <br />
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
