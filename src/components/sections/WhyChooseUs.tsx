'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

// --- Custom Animated Counter Component ---
const AnimatedCounter = ({ from = 0, to, duration = 2.5 }: { from?: number; to: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: duration, ease: 'easeOut' });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// --- Data ---
const infoCards = [
  {
    id: 1,
    title: 'Email Us',
    subtitle: 'info@pyramidsenergy.ae',
    icon: (
      <svg className="w-8 h-8 text-[#b92b14]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Emergency Service',
    subtitle: 'Call +929 XXX XXXX',
    icon: (
      <svg className="w-8 h-8 text-[#b92b14]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Discover',
    subtitle: 'Latest Projects',
    icon: (
      <svg className="w-8 h-8 text-[#b92b14]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
];

const reasons = [
  {
    id: 1,
    hasCounter: true,
    countTarget: 35,
    text: '+ Years of Industry Experience', // Text after the counter
  },
  {
    id: 2,
    hasCounter: false,
    text: 'projects up to 400kV with high standards of safety, quality',
  },
  {
    id: 3,
    hasCounter: false,
    text: 'Approved by DEWA, ADWEA, ADNOC, FEWA, SEWA',
  },
  {
    id: 4,
    hasCounter: false,
    text: 'ISO 9001, ISO 14001 & OHSAS 18001 Certified',
  },
];

// --- Animation Variants ---
import { Variants } from 'framer-motion'; // Add this import at the top if you want to be extra strict

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' as const // <-- Add "as const" here!
    } 
  },
};
export default function WhyChooseUs() {
  return (
    <section className="relative z-10 w-full flex flex-col bg-white">
      
      {/* --- Top Info Cards --- */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {infoCards.map((card) => (
              <motion.div 
                key={card.id} 
                variants={itemVariants}
                className="bg-[#f8f8f8] rounded-xl p-6 flex items-center space-x-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">{card.title}</p>
                  <p className="text-gray-900 font-semibold">{card.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- Why Choose Us Section --- */}
      <div className="relative w-full flex flex-col">
        
        {/* Red Top Banner */}
        <div className="bg-[#b92b14] w-full pt-12 pb-16 relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-1.5 rounded-full text-sm font-medium tracking-wide mb-2"
            >
              Top Reasons
            </motion.div>
          </div>
        </div>

        {/* Dark Background Section with the Image */}
        <div className="relative w-full pb-20 z-10">
          
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="/why-choose-us-bg.jpg" 
              alt="Electrical Wires" 
              className="w-full h-full object-cover object-center"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]/95" />
          </div>

          <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Main Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="-mt-7 text-4xl md:text-5xl font-bold text-white text-center mb-16 drop-shadow-md"
            >
              Why Choose us ?
            </motion.h2>

            {/* Features Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            >
              {reasons.map((reason) => (
                <motion.div 
                  key={reason.id} 
                  variants={itemVariants}
                  className="flex flex-col items-center text-center"
                >
                  {/* Cube with Plus Icon */}
                  <div className="mb-6 relative">
                    <svg className="w-14 h-14 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                    <div className="absolute -bottom-1 -right-1 bg-white text-[#1a1a1a] rounded-full w-6 h-6 flex items-center justify-center border-2 border-[#1a1a1a]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Reason Text */}
                  <p className="text-gray-200 text-sm md:text-base max-w-[200px] leading-relaxed">
                    {/* Render the Animated Counter if the data item requires it */}
                    {reason.hasCounter && reason.countTarget ? (
                      <>
                        <AnimatedCounter to={reason.countTarget} />
                        {reason.text}
                      </>
                    ) : (
                      reason.text
                    )}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}