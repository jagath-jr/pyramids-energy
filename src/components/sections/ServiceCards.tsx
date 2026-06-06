'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
// 1. Added Autoplay to the imported modules
import { Pagination, Parallax, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
  return (
<section className="relative z-10 py-20 bg-white overflow-hidden">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl">Delivering high-voltage electrical and power infrastructure projects with safety, quality, and precision.</p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            // 2. Added Autoplay to the modules array
            modules={[Pagination, Parallax, Autoplay]}
            spaceBetween={24}
            parallax={true}
            loop={true} // 3. Enabled infinite looping for seamless auto-sliding
            autoplay={{
              delay: 3500, // Time between slides in milliseconds
              disableOnInteraction: false, // Keeps autoplay running after user swipes
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              // Mobile
              0: {
                slidesPerView: 1,
              },
              // Tablet
              768: {
                slidesPerView: 2,
              },
              // Desktop (Strictly 3 cards)
              1024: {
                slidesPerView: 3, 
              }
            }}
            className="pb-16" // Padding bottom to make room for pagination dots
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id} className="h-auto">
                <div className="bg-[#FAF8F5] rounded-2xl p-4 sm:p-6 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
                  
{/* Image Wrapper with internal Parallax effect */}
<div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6">
  <div 
    className="absolute inset-0 w-full h-full" // Changed w-[120%] to w-full
    data-swiper-parallax="0%" // Reduced intensity for a smoother, contained effect
    data-swiper-parallax-opacity="0.8"
  >
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-cover object-center" // Ensures the middle of the image is always shown
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  </div>
</div>
                  {/* Card Content */}
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-8 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Read More Button */}
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
  );
}