'use client'

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link legacyBehavior href="/">
              <a className="text-xl font-bold text-gray-700 hover:text-gray-900">James Mosher Design</a>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link legacyBehavior href="/">
              <a className="text-gray-700 hover:text-gray-900">Home</a>
            </Link>
            <Link legacyBehavior href="/About">
              <a className="text-gray-700 hover:text-gray-900">About</a>
            </Link>
            <Link legacyBehavior href="/Portfolio">
              <a className="text-gray-700 hover:text-gray-900">Portfolio</a>
            </Link>
            <Link legacyBehavior href="/Contact">
              <a className="text-gray-700 hover:text-gray-900">Contact</a>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link legacyBehavior href="/">
            <a onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
          </Link>
          <Link legacyBehavior href="/About">
            <a onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
          </Link>
          <Link legacyBehavior href="/Portfolio">
            <a onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Portfolio</a>
          </Link>
          <Link legacyBehavior href="/Contact">
            <a onClick={handleLinkClick}className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
