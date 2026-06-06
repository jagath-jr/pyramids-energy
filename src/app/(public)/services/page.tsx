'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

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

// --- Services Data ---
const electricalServices = [
  { title: "Power Transmission & Distribution (Up to 400kV)", img: "/services/elec-1.webp", desc: "End-to-end solutions for high-voltage and extra-high-voltage power networks, ensuring safe, reliable, and efficient energy transmission." },
  { title: "HV / MV Cable Laying & Pulling", img: "/services/elec-2.webp", desc: "Expertized installation of underground and overhead cable systems for power plants, substations, and industrial complexes." },
  { title: "Cable Jointing & Termination (Up to 400kV)", img: "/services/elec-3.webp", desc: "Certified and highly trained jointers for HV/EHV cable connections, ensuring longevity and safety of power systems." },
  { title: "GIS / AIS / RMU Switchgear Installation", img: "/services/elec-4.webp", desc: "Supply, installation, testing, and commissioning of switchgear for power grids, commercial buildings, and industrial facilities." },
  { title: "Ring Main Units (RMU) & QRM", img: "/services/elec-5.webp", desc: "Installation and maintenance of compact and reliable RMUs for secondary power distribution networks." },
  { title: "Transformer Supply, Installation & Maintenance", img: "/services/elec-6.webp", desc: "Comprehensive services for power and distribution transformers, including testing, maintenance, and oil filtration." },
  { title: "Substation Design & Construction", img: "/services/elec-7.webp", desc: "Turnkey design, civil works, installation, and commissioning of primary and secondary substations." },
  { title: "Protection Relays & Power Control Systems", img: "/services/elec-8.webp", desc: "Integration and configuration of advanced protection systems and SCADA for grid reliability and automated operations." },
  { title: "Partial Discharge & Earth Fault Detection", img: "/services/elec-9.webp", desc: "Advanced diagnostics to identify insulation degradation and prevent unexpected power failures." },
];

const operationMaintenance = [
  { title: "Preventive & Corrective Maintenance", img: "/services/om-1.webp", desc: "Scheduled inspections and immediate response services to minimize downtime and maximize equipment lifespan." },
  { title: "Substation Assessment & Fault Investigation", img: "/services/om-2.webp", desc: "Detailed audits and troubleshooting to pinpoint faults and restore system stability and safety." },
  { title: "Transformer Oil Filtration & Regeneration", img: "/services/om-3.webp", desc: "On-site purification of transformer oil to remove moisture, sludge, and extend asset life." },
  { title: "Condition Monitoring & Performance Analysis", img: "/services/om-4.webp", desc: "Thermal imaging and advanced analytics to track equipment health and optimize performance." },
];

const civilMechanical = [
  { title: "Road Works & Excavation", img: "/services/civil-1.webp", desc: "Earthworks, trenching, grading, and reinstatement for infrastructure and utility installations." },
  { title: "Pipeline Installation (HDPE & Irrigation)", img: "/services/civil-2.webp", desc: "Water and sewerage pipeline networks for municipal and industrial applications." },
  { title: "Mechanical Installations", img: "/services/civil-3.webp", desc: "Mechanical works for pumping stations, HVAC systems, and industrial equipment setups." },
];

const specializedServices = [
  { title: "Silicon Rubber Coating on Insulators (Up to 400kV)", img: "/services/spec-1.webp", desc: "High-performance coating solutions to prevent flashovers and improve performance in heavily polluted environments." },
  { title: "Overhead Transmission Lines (11kV - 132kV)", img: "/services/spec-2.webp", desc: "Design, erection, and stringing of overhead transmission lines for reliable power delivery." },
  { title: "Mobile Grid Stations", img: "/services/spec-3.webp", desc: "Rapid deployment of portable substations for emergency power or temporary site operations." },
  { title: "Temporary & Permanent Power Connections", img: "/services/spec-4.webp", desc: "Safe and compliant power connections for construction sites, events, and permanent facilities." },
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#fdfdfd] overflow-x-hidden">
      
      {/* =========================================
          HERO BANNER SECTION
      ========================================= */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center z-10 pt-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/services-hero-bg.jpg" // Place your electrical tower background image here
            alt="Our Services Hero"
            fill
            className="object-cover object-center"
            priority
          />
<div className="absolute inset-0 bg-gradient-to-r from-[rgba(178,32,5,0.66)] to-[rgba(146,25,2,0)]" />        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-xs font-medium tracking-wide mb-4"
          >
            Services
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              Our Services
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
          OUR EXPERTISE SECTION
      ========================================= */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg"
            >
              <Image 
                src="/expertise-worker.webp" // Place the worker/excavator image here
                alt="Industrial Site Worker" 
                fill 
                className="object-cover"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              <h2 className="text-[#b92b14] text-3xl md:text-4xl font-bold mb-3">Our Expertise</h2>
              <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-6">Trusted Industrial Solutions Partner</h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Pyramids Energy offers comprehensive solutions across the power, infrastructure, and utilities sectors. With a highly qualified team of engineers, technicians, and project managers, we deliver customized, turnkey solutions tailored to meet your operational requirements, ensuring strict compliance with local and international safety standards.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SERVICES REUSABLE COMPONENT
      ========================================= */}
      <ServiceSection title="Electrical Services" data={electricalServices} />
      <ServiceSection title="Operation & Maintenance" data={operationMaintenance} />
      <ServiceSection title="Civil & Mechanical Works" data={civilMechanical} />
      <ServiceSection title="Specialized Services" data={specializedServices} isLast />

    </div>
  );
}

// --- Reusable Section Component ---
function ServiceSection({ title, data, isLast = false }: { title: string, data: any[], isLast?: boolean }) {
  return (
    <section className={`pt-16 ${isLast ? 'pb-24' : 'pb-10'} relative z-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#b92b14] mb-4">{title}</h2>
          <div className="w-24 h-1 bg-[#b92b14] rounded-full"></div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 p-4">
                 <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                 </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}