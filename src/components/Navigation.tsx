'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Business Solutions', href: '/solutions' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
              <img src="/logo.png" alt="NextGen Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">NEXTGEN</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:888-306-1115"
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
            >
              888-306-1115
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:888-306-1115"
              className="block px-3 py-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              888-306-1115
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation; 