'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav id="nav" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-serif text-gray-900">
              Bachmas
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/life" className="text-gray-700 hover:text-gray-900">
              Life of Bach
            </Link>
            <Link href="/works" className="text-gray-700 hover:text-gray-900">
              Works
            </Link>
            <Link href="/traditions" className="text-gray-700 hover:text-gray-900">
              Traditions
            </Link>
            <Link href="/bachsprache" className="text-gray-700 hover:text-gray-900">
              Bachsprache
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-1'}`} />
                <span className={`block w-6 h-0.5 bg-current transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-1'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-16 pb-3">
          <div className="flex flex-col items-end px-4">
            <div className="bg-white rounded-lg shadow-lg">
              <Link
                href="/"
                className="block py-3 px-6 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-right border-b border-gray-100"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                href="/life"
                className="block py-3 px-6 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-right border-b border-gray-100"
                onClick={handleLinkClick}
              >
                Life of Bach
              </Link>
              <Link
                href="/works"
                className="block py-3 px-6 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-right border-b border-gray-100"
                onClick={handleLinkClick}
              >
                Works
              </Link>
              <Link
                href="/traditions"
                className="block py-3 px-6 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-right border-b border-gray-100"
                onClick={handleLinkClick}
              >
                Traditions
              </Link>
              <Link
                href="/bachsprache"
                className="block py-3 px-6 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-right"
                onClick={handleLinkClick}
              >
                Bachsprache
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 