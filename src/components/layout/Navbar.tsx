'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// --- Animation Variants ---
const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: 'easeOut' } 
  },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const headerRef = useRef<HTMLElement>(null);
  const isHomePage = pathname === '/';

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setIsMobileMenuOpen(false);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside events
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const isTransparent = isHomePage && !isScrolled;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 flex flex-col">
      {/* Top Bar */}
      <div 
        className={`bg-[#b92b14] text-white px-4 sm:px-8 text-xs sm:text-sm flex justify-between items-center transition-all duration-500 ease-in-out overflow-hidden
          ${isTransparent ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2 opacity-100'}
        `}
      >
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <span>+971 2 628 9550</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span>info@pyramidsenergy.ae</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className="hidden sm:inline">Mon - Fri 08.00 - 18.00</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-500 ease-in-out
          ${isTransparent 
            ? 'bg-transparent py-4' 
            : 'bg-gradient-to-r from-[#cd6e57] to-[#f0dad3] shadow-md py-2 backdrop-blur-sm'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex-shrink-0 flex items-center"
            >
              <Link href="/">
                <Image 
                  src="/header-logo.png" 
                  alt="Pyramids Energy" 
                  width={150} 
                  height={50} 
                  className="h-20 w-auto object-contain"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation (Staggered Animation & Active State) */}
            <motion.div 
              className="hidden md:flex space-x-8 items-center"
              initial="hidden"
              animate="visible"
              variants={navContainerVariants}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                
                return (
                  <motion.div key={link.name} variants={navItemVariants}>
                    <Link 
                      href={link.href}
                      className={`font-medium text-[15px] transition-all duration-300 py-1 ${
                        isActive 
                          ? 'text-white border-b-2 border-white' // Active style: solid white text + underline
                          : 'text-white/90 hover:text-white border-b-2 border-transparent hover:border-white/50' // Inactive style
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div variants={navItemVariants}>
                <Link 
                  href="/contact"
                  className="bg-[#b92b14] hover:bg-red-800 text-white px-6 py-2 rounded-md font-semibold text-sm transition-all shadow-md"
                >
                  Contact us
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Toggle Button */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="md:hidden flex items-center"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                )}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation Menu (Animated presence & Active State) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-white shadow-xl border-t border-gray-100 absolute w-full left-0 top-full flex flex-col overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-3 font-medium rounded-md transition-all ${
                        isActive 
                          ? 'text-[#b92b14] underline decoration-2 underline-offset-4' // Mobile Active style: Red text with underline
                          : 'text-gray-800 hover:bg-red-50 hover:text-[#b92b14]' // Mobile Inactive style
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-4 pb-2 px-3">
                  <Link 
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center bg-[#b92b14] hover:bg-red-800 text-white px-6 py-3 rounded-md font-semibold transition-all"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}