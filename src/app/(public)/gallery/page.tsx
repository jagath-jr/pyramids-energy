'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants, AnimatePresence } from 'framer-motion';

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as any } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- Gallery Data ---
// Replace these paths with your actual image files in the public/images folder
const galleryImages = [
  { id: 1, src: '/gallery-1.webp', alt: 'Electrical Equipment Close-up' },
  { id: 2, src: '/gallery-2.webp', alt: 'Heavy Black Cable Spools' },
  { id: 3, src: '/gallery-3.webp', alt: 'Engineer using Multimeter' },
  { id: 4, src: '/gallery-4.webp', alt: 'High Voltage Transmission Tower' },
  { id: 5, src: '/gallery-5.webp', alt: 'Worker in Trench with Pipes' },
  { id: 6, src: '/gallery-6.webp', alt: 'Workers in PPE Inspecting' },
];

export default function GalleryPage() {
  // State for the Lightbox Modal
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      
      {/* =========================================
          HERO BANNER SECTION
      ========================================= */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center z-10 pt-16">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery-hero-bg.webp" // Add your powerline background image
            alt="Gallery Hero"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay matching the mockup */}
         <div className="absolute inset-0 bg-gradient-to-r from-[rgba(178,32,5,0.66)] to-[rgba(146,25,2,0)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-xs font-medium tracking-wide mb-4"
          >
            Discover
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              Gallery
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
          INTRO TEXT SECTION
      ========================================= */}
      <section className="pt-16 pb-10 md:pt-24 md:pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium max-w-5xl"
          >
            Explore our gallery showcasing successfully delivered power transmission, 
            distribution, and electromechanical works. Each project reflects our commitment to 
            safety, quality, and engineering excellence.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          IMAGE GRID SECTION
      ========================================= */}
      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {galleryImages.map((image) => (
              <motion.div 
                key={image.id} 
                variants={fadeInUp}
                onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
                className="group relative w-full aspect-square overflow-hidden cursor-pointer bg-gray-100"
              >
                {/* Image */}
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full shadow-lg transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-75">
                    {/* Expand Icon */}
                    <svg className="w-6 h-6 text-[#b92b14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          LIGHTBOX MODAL (Click to View)
      ========================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Close when clicking backdrop
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside image from closing modal
              className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
            >
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                fill 
                className="object-contain"
                quality={100}
              />
              
              {/* Optional: Image Caption in Lightbox */}
              <div className="absolute bottom-[-40px] left-0 right-0 text-center text-white/80 text-sm tracking-wide">
                {selectedImage.alt}
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}