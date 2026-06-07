'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Parallax, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';

declare global {
  interface Window {
    VANTA: any;
  }
}

const servicesData = [
  {
    id: 1,
    title: 'Electrical Services',
    description: 'End-to-end electrical solutions for power transmission, distribution, substations, and high-voltage systems.',
    image: '/service-electrical.webp',
    link: '/services#electrical',
  },
  {
    id: 2,
    title: 'Operation & Maintenance',
    description: 'Reliable maintenance, testing, and fault-response services to ensure continuous and safe power operations.',
    image: '/service-maintenance.webp',
    link: '/services#maintenance',
  },
  {
    id: 3,
    title: 'Civil & Mechanical Works',
    description: 'Integrated civil and mechanical support services for electrical infrastructure and utility projects.',
    image: '/service-civil.webp',
    link: '/services#civil',
  },
  {
    id: 4, 
    title: 'Specialized Services',
    description: 'Advanced solutions including silicon rubber coating, mobile grid stations, and temporary power connections.',
    image: '/service-specialized.webp',
    link: '/services#specialized',
  },
];

export default function ServiceCards() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaReady, setVantaReady] = useState(false);

  // NEW: Check if Vanta is already loaded when returning to the page
  useEffect(() => {
    if (typeof window !== 'undefined' && window.VANTA && window.VANTA.WAVES) {
      setVantaReady(true);
    }
  }, []);

  useEffect(() => {
    let vantaEffect: any;
    if (vantaReady && window.VANTA && vantaRef.current) {
      vantaEffect = window.VANTA.WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xb92b14,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaReady]);

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" 
        strategy="afterInteractive" 
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js" 
        strategy="afterInteractive" 
        onReady={() => setVantaReady(true)} // Changed from onLoad to onReady for better Next.js compatibility
      />

      <section className="relative z-20 py-18 overflow-hidden bg-black">
        
        <div 
          ref={vantaRef} 
          className="absolute inset-0 w-full h-full z-0 pointer-events-none" 
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-md rounded-3xl py-12 shadow-2xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#b92b14] mb-4">Our Services</h2>
            <p className="text-gray-800 font-medium max-w-2xl">Delivering high-voltage electrical and power infrastructure projects with safety, quality, and precision.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Swiper
              modules={[Pagination, Parallax, Autoplay]}
              spaceBetween={24}
              parallax={true}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="pb-16"
            >
              {servicesData.map((service) => (
                <SwiperSlide key={service.id} className="!h-auto flex">
<div className="bg-[#FAF8F5]/90 w-full h-full rounded-2xl p-4 sm:p-6 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">                    
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6">
                      <div 
                        className="absolute inset-0 w-full h-full"
                        data-swiper-parallax="0%"
                        data-swiper-parallax-opacity="0.8"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-grow flex flex-col">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-8 flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="mt-auto">
                        <Link 
                          href={service.link}
                          className="inline-flex items-center gap-2 bg-[#b92b14] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-red-800 transition-colors w-fit"
                        >
                          Read More
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </>
  );
}