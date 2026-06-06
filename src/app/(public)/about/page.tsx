'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants, AnimatePresence, useInView } from 'framer-motion';

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as any } }
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as any } }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as any } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- Certificates Data ---
const certificates = [
  "/certification1.webp", 
  "/certification2.webp"
];

// --- Counter Component ---
function AnimatedCounter({ 
  targetValue, 
  suffix = '%', 
  duration = 2000 
}: { 
  targetValue: number; 
  suffix?: string; 
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    
    hasAnimated.current = true;
    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(targetValue * easeOutQuart);
      
      setCount(currentValue);

      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      hasAnimated.current = false;
    };
  }, [isInView, targetValue, duration]);

  return (
    <div ref={counterRef} className="flex items-baseline">
      <span className="text-3xl font-bold">{count}</span>
      <span className="text-3xl font-bold">{suffix}</span>
    </div>
  );
}

export default function AboutPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      
      {/* =========================================
          HERO BANNER SECTION
      ========================================= */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center z-10 pt-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about-hero-bg.webp" 
            alt="About Us Hero"
            fill
            className="object-cover object-center"
            priority
          />
<div className="absolute inset-0 bg-gradient-to-r from-[rgba(178,32,5,0.66)] to-[rgba(146,25,2,0)]" />        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 text-sm text-white/80 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white font-medium">About Us</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-sm md:text-base max-w-sm text-left md:text-right font-medium"
            >
              Reliable Energy, Industrial & Equipment Solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* =========================================
          COMPANY OVERVIEW SECTION
      ========================================= */}
      <section className="py-20 md:py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
                <strong>Company Overview</strong> Pyramids Energy is a leading electromechanical contracting company established in 1990, backed by more than three decades of industrial experience in the UAE. We specialize in power transmission and distribution solutions, delivering turnkey electrical projects with a strong focus on safety, quality, and efficiency.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
              className="relative w-full h-[400px] sm:h-[500px]"
            >
              <div className="absolute top-0 left-0 w-[55%] h-[60%] rounded-2xl overflow-hidden shadow-lg z-10">
                <Image src="/about-section1-img1.jpg" alt="Worker Welding" fill className="object-cover" />
              </div>
              
              <div className="absolute bottom-0 right-0 w-[60%] h-[65%] rounded-2xl overflow-hidden shadow-xl z-20">
                <Image src="/about-section1-img2.webp" alt="Engineer on site" fill className="object-cover" />
              </div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute top-4 right-4 bg-[#cd6e57] text-white p-5 rounded-xl shadow-lg z-30 w-40"
              >
                <AnimatedCounter targetValue={98} suffix="%" duration={2500} />
                <div className="text-xs leading-tight font-medium opacity-90 uppercase tracking-wide">
                  Customer Satisfaction
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          MISSION & VISION SECTION
      ========================================= */}
      <section className="py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 z-0">
              <Image src="/about-section2-img1.webp" alt="Industrial Background" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-[#a62410]/90 mix-blend-multiply" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 p-10 md:p-16 gap-10 md:gap-16">
              <div className="bg-[#b92b14]/20 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-[#b92b14]/30 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 lowercase tracking-wide">our mission</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-light">
                  To respond to diversified client requirements with multifaceted, cost-effective electrical solutions that exceed expectations and contribute to the advancement of the electrical industry.
                </p>
              </div>

              <div className="bg-[#b92b14]/20 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-[#b92b14]/30 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 lowercase tracking-wide">our vision</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-light">
                  To become a preferred solution provider for the electrical industry across the Middle East and neighboring regions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          WHAT WE OFFER SECTION
      ========================================= */}
      <section className="py-10 bg-[#fdfaf8] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
              className="flex flex-col"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">What We Offer</h2>
              <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-md">
                <Image src="/about-section3-img1.webp" alt="Worker in warehouse" fill className="object-cover object-top" />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="flex flex-col space-y-4 pt-10 lg:pt-0"
            >
              {[
                "Certified Quality & HSE Management Systems",
                "On-Time, On-Budget Project Delivery",
                "Highly Skilled & Certified Engineers",
                "Strong Utility & Government Relationships"
              ].map((offer, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-[#fdfaf8] border border-[#e8d5cc] rounded-2xl p-5 flex items-center space-x-5 shadow-sm hover:shadow-md hover:border-[#b92b14]/40 transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-[#b92b14] w-12 h-12 flex items-center justify-center rounded-full text-white shadow-inner">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium md:text-lg">
                    {offer}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          OUR CERTIFICATIONS SECTION
      ========================================= */}
      <section className="py-10 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Certifications</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto"
          >
            {certificates.map((cert, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp} 
                onClick={() => setSelectedCert(cert)} 
                className="relative group w-full aspect-[1/1.4] border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white p-2 cursor-pointer"
              >
                <Image 
                  src={cert} 
                  alt={`Certification ${index + 1}`} 
                  fill 
                  className="object-contain"
                />
                
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#b92b14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          LIGHTBOX MODAL (Updated for Scrollable Reading)
      ========================================= */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} 
              // Changed container to support vertical scrolling
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Close Button - Fixed to the top right of the modal */}
              <div className="absolute top-4 right-4 z-20">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="bg-white/90 backdrop-blur shadow-md text-gray-800 p-2.5 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Container */}
              <div className="w-full overflow-y-auto p-4 pt-16 sm:p-8 bg-gray-50">
                <Image 
                  src={selectedCert} 
                  alt="Full Certification View" 
                  width={1200}
                  height={1697} // Approximate A4 standard aspect ratio
                  className="w-full h-auto shadow-sm border border-gray-200"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}