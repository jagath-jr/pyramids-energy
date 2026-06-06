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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- Projects Data ---
const projectsData = [
  {
    id: 1,
    title: "HCK & OLM LIGHTING UPGRADE PROJECT",
    client: "ADNOC Refining",
    contractor: "Pyramids Energy",
  },
  {
    id: 2,
    title: "RIYADH CITY NORTH - PHASE 7A INFRASTRUCTURE AND STREETSCAPE",
    client: "Aldar Projects LLC",
    contractor: "Western Bainoona Group for General Contracting LLC",
  },
  {
    id: 3,
    title: "REROUTING AND RELOCATION OF UTILITY SERVICES AT PLOT C3 C4 IN SECTOR W5",
    client: "Al Nudha Investment",
    contractor: "Bauer International FZE",
  },
  {
    id: 4,
    title: "HADI AL MANSOURI ADCE413",
    client: null, // No client listed in mockup
    contractor: "Hashim Contracting & Gen. Maintenance LLC",
  },
  {
    id: 5,
    title: "OMR.21.140 REPLACEMENT OF CATHODIC PROTECTION UNDERGROUND ICCP ANODES",
    client: "ADNOC Gas Processing",
    contractor: "Pyramids Energy",
  },
  {
    id: 6,
    title: "ELECTRICAL INTERCONNECTOR & SWITCHGEAR PROJECT",
    client: "ADNOC Gas Processing",
    contractor: "AC Power Contracting",
  },
  {
    id: 7,
    title: "ELECTRICAL INTERCONNECTOR & SWITCHGEAR PROJECT",
    client: "ADNOC Gas Processing",
    contractor: "AG Power Contracting",
  },
  {
    id: 8,
    title: "UPGRADING OF IPCS SYSTEM IN GUP & SWI LV SWITCHGEARS AT RUWAIS REFINERY (EAST)",
    client: "ADNOC Refining",
    contractor: "Pyramids Energy",
  },
  {
    id: 9,
    title: "AD18 DISTRICT COOLING PLANT - ELECTRICAL EXPANSION WORKS",
    client: "National Cooling Plant - TABREED",
    contractor: "Pyramids Energy",
  },
  {
    id: 10,
    title: "PERMANENT POWER CONNECTION - ZAYED MILITARY CITY",
    client: "Command Military Works",
    contractor: "AC Power Contracting",
  },
  {
    id: 11,
    title: "REPLACEMENT OF RMU AT SHEIKH RASHED TOWER",
    client: "Dubai World Trade Centre",
    contractor: "Pyramids Energy",
  },
  {
    id: 12,
    title: "REDUNDANT VSD POWER SUPPLY - RUWAIS REFINERY",
    client: "ADNOC Refining",
    contractor: "Pyramids Energy",
  },
  {
    id: 13,
    title: "AL MIRFA BEACH HOUSING VILLAS - PLOT P500",
    client: "Musanada",
    contractor: "Combined Group Cont. Co.",
  },
  {
    id: 14,
    title: "RELOCATION WORKS IN SECTOR ME12 PLOT C236",
    client: "Abu Dhabi Municipality",
    contractor: "Al Qudorat Engineering LLC",
  },
  {
    id: 15,
    title: "NUDRA BEACH VILLAS - SAADIYAT ISLAND",
    client: "IMKAN LLC",
    contractor: "Eastern International LLC",
  }
];

export default function ProjectsPage() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      
      {/* =========================================
          HERO BANNER SECTION
      ========================================= */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center z-10 pt-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/projects-hero-bg.jpg" // Place your engineer/warehouse image here
            alt="Our Projects Hero"
            fill
            className="object-cover object-center"
            priority
          />
<div className="absolute inset-0 bg-gradient-to-r from-[rgba(178,32,5,0.66)] to-[rgba(146,25,2,0)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
              Our Project
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
      <section className="pt-16 pb-8 md:pt-20 md:pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInUp}
            className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium max-w-5xl"
          >
            We deliver high-quality electrical and power infrastructure projects across utilities, 
            commercial developments, and industrial sectors. From substations to high-voltage cabling, 
            our projects reflect technical expertise, safety compliance, and timely execution.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          ONGOING PROJECTS GRID SECTION
      ========================================= */}
      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ongoing Projects</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {projectsData.map((project) => (
              <motion.div 
                key={project.id} 
                variants={fadeInUp}
                className="bg-white border border-[#e8d5cc] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-[#b92b14]/30 transition-all duration-300 flex flex-col"
              >
                {/* Project Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 uppercase leading-snug tracking-tight mb-4 flex-grow">
                  {project.title}
                </h3>
                
                {/* Divider Line */}
                <hr className="border-[#b92b14]/20 mb-5" />

                <div className="space-y-4">
                  {/* Conditionally Render Client (some projects omit it in the design) */}
                  {project.client && (
                    <div className="flex flex-col">
                      <span className="text-[#b92b14] font-semibold text-sm mb-1">Client :</span>
                      <span className="text-gray-900 font-bold ml-4 sm:ml-6">{project.client}</span>
                    </div>
                  )}

                  {/* Main Contractor */}
                  <div className="flex flex-col">
                    <span className="text-[#b92b14] font-semibold text-sm mb-1">Main Contractor :</span>
                    <span className="text-gray-900 font-bold ml-4 sm:ml-6">{project.contractor}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}