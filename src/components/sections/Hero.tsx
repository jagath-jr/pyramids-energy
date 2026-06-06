'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Framer Motion for animations & page scroll tracking
import { motion, useScroll, useTransform } from 'framer-motion';

// Slider data
const sliderData = [
  {
    id: 1,
    image: '/Home-hero-1.webp',
    title: 'Your Transmission & Distribution Solutions Partner',
    description: 'Delivering high-voltage electrical and power infrastructure projects with safety, quality, and precision.',
    animationType: 'slideInLeft',
  },
  {
    id: 2,
    image: '/Home-hero-2.webp',
    title: 'Engineering the Future of Power',
    description: 'Trusted experts in high-voltage infrastructure, providing efficient, safe, and sustainable electrical solutions for every project.',
    animationType: 'popIn',
  },
  {
    id: 3,
    image: '/Home-hero-3.webp',
    title: 'Strengthening Power Infrastructure',
    description: 'From substations to transmission lines, we deliver quality-driven electrical projects with precision, reliability, and performance.',
    animationType: 'staggerUp',
  },
  {
    id: 4,
    image: '/Home-hero-4.webp',
    title: 'Powering Reliable Energy Networks',
    description: 'Delivering transmission and distribution projects up to 400kV with engineering excellence, safety, and on-time execution.',
    animationType: 'flipIn',
  },
];

// --- Define Framer Motion animation variants ---
const slideInLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
};

const popInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.3 } },
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const flipInVariants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
};

// --- Main Hero Component ---

const Hero: React.FC = () => {
  // Track page scroll to move the text UP and fade it out as the user scrolls down
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 800], [0, -800]); 
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    // 1. The outer div acts as a spacer taking up 100vh in the document flow
    <div className="relative w-full h-screen">
      
      {/* 2. The actual Hero content is fixed to the background (z-0) */}
      <section className="fixed top-0 left-0 w-full h-screen bg-black overflow-hidden z-0">
        <Swiper
          modules={[Parallax, Pagination, Autoplay]}
          speed={1200}
          parallax={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          className="w-full h-full"
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id} className="relative overflow-hidden flex items-center">
              {({ isActive }) => (
                <>
                  {/* Parallax Background Image */}
                  <div
                    className="absolute inset-0 z-0 w-[130%] h-full"
                    data-swiper-parallax="-23%"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={slide.id === 1}
                      className="object-cover object-center"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10" />
                  </div>

                  {/* 3. Text Wrapper that animates upwards on Page Scroll */}
                  <motion.div 
                    style={{ y: textY, opacity: textOpacity }}
                    className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center h-full text-center text-white"
                  >
                    
                    {/* Slide 1: Slide in from Left */}
                    {slide.animationType === 'slideInLeft' && (
                      <motion.div initial="hidden" animate={isActive ? 'visible' : 'hidden'} variants={slideInLeftVariants} className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">{slide.title}</h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">{slide.description}</p>
                        <Link href="/contact" className="inline-block bg-[#b92b14] hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-md transition duration-300 shadow-lg">
                          Request A Quote
                        </Link>
                      </motion.div>
                    )}

                    {/* Slide 2: Pop In / Scale Up */}
                    {slide.animationType === 'popIn' && (
                      <motion.div initial="hidden" animate={isActive ? 'visible' : 'hidden'} variants={popInVariants} className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">{slide.title}</h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">{slide.description}</p>
                        <Link href="/contact" className="inline-block bg-[#b92b14] hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-md transition duration-300 shadow-lg">
                          Request A Quote
                        </Link>
                      </motion.div>
                    )}

                    {/* Slide 3: Staggered Fade Up */}
                    {slide.animationType === 'staggerUp' && (
                      <motion.div initial="hidden" animate={isActive ? 'visible' : 'hidden'} variants={staggerContainerVariants} className="space-y-6">
                        <motion.h1 variants={staggerItemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">{slide.title}</motion.h1>
                        <motion.p variants={staggerItemVariants} className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">{slide.description}</motion.p>
                        <motion.div variants={staggerItemVariants}>
                          <Link href="/contact" className="inline-block bg-[#b92b14] hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-md transition duration-300 shadow-lg">
                            Request A Quote
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Slide 4: Flip In */}
                    {slide.animationType === 'flipIn' && (
                      <motion.div initial="hidden" animate={isActive ? 'visible' : 'hidden'} variants={flipInVariants} className="space-y-6" style={{ perspective: 1000 }}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">{slide.title}</h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">{slide.description}</p>
                        <Link href="/contact" className="inline-block bg-[#b92b14] hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-md transition duration-300 shadow-lg">
                          Request A Quote
                        </Link>
                      </motion.div>
                    )}

                  </motion.div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Hero;