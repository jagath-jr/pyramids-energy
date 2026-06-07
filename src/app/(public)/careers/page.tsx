'use client';

import React, { useState } from 'react';
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

// --- Job Listings Data ---
const jobListings = [
  {
    id: 1,
    title: "Electrical Engineers",
    type: "Full Time",
    location: "Abu Dhabi",
    requirements: [
      "Plan and supervise electrical works for power and infrastructure projects",
      "Bachelor's degree in Electrical Engineering",
      "3-7 years of experience in HV/MV systems, substations, and cabling",
      "Familiar with DEWA / ADDC / ADNOC standards (preferred)",
      "Strong coordination and problem-solving skills"
    ]
  },
  {
    id: 2,
    title: "Electrical Engineers",
    type: "Full Time",
    location: "Abu Dhabi",
    requirements: [
      "Plan and supervise electrical works for power and infrastructure projects",
      "Bachelor's degree in Electrical Engineering",
      "3-7 years of experience in HV/MV systems, substations, and cabling",
      "Familiar with DEWA / ADDC / ADNOC standards (preferred)",
      "Strong coordination and problem-solving skills"
    ]
  },
  {
    id: 3,
    title: "Electrical Engineers",
    type: "Full Time",
    location: "Abu Dhabi",
    requirements: [
      "Plan and supervise electrical works for power and infrastructure projects",
      "Bachelor's degree in Electrical Engineering",
      "3-7 years of experience in HV/MV systems, substations, and cabling",
      "Familiar with DEWA / ADDC / ADNOC standards (preferred)",
      "Strong coordination and problem-solving skills"
    ]
  }
];

export default function CareersPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    message: '',
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle File Upload Change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  // Mock Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form and show success message
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', phone: '', email: '', position: '', message: '' });
    setFileName(null);

    // Hide success message after a few seconds
    setTimeout(() => setSubmitStatus('idle'), 4000);
  };

  return (
    <div className="w-full bg-white overflow-x-hidden">
      
      {/* =========================================
          HERO BANNER SECTION
      ========================================= */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center z-10 pt-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/careers-hero-bg.webp" // Place your team/workers image here
            alt="Join Our Team"
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
            Discover
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              Join Our Team
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
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium max-w-4xl"
          >
            Build your future with Pyramids Energy. We are seeking skilled and dedicated professionals to grow with us in delivering impactful power infrastructure projects.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          JOB LISTINGS SECTION
      ========================================= */}
      <section className="pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="flex flex-col space-y-6"
          >
            {jobListings.map((job) => (
              <motion.div 
                key={job.id} 
                variants={fadeInUp}
                className="bg-[#fcfaf9] border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                  <span className="bg-[#b92b14] text-white text-sm font-semibold px-5 py-1.5 rounded-full w-fit">
                    {job.type}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-900 font-bold mb-6">
                  <svg className="w-5 h-5 text-[#b92b14]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>{job.location}</span>
                </div>

                <ul className="space-y-2.5">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-800 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm md:text-base leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          WHY WORK WITH US & APPLICATION FORM
      ========================================= */}
      <section className="py-20 bg-white relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            
            {/* Left Column: Why Work With Us */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Work With Us ?</h2>
              <ul className="space-y-6">
                {[
                  "Diverse, Multinational Work Environment",
                  "Continuous Training & Certification",
                  "Career Growth in Large-Scale Utility Projects"
                ].map((perk, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <span className="h-2 w-2 rounded-full bg-gray-800 flex-shrink-0"></span>
                    <span className="text-gray-800 text-lg md:text-xl font-medium">{perk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column: Application Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.06)] border border-gray-100 w-full"
            >
              <h3 className="text-2xl font-semibold text-[#b92b14] text-center mb-8">
                Fill Out the form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name" 
                    required
                    className="w-full border border-[#e8d5cc] rounded-xl px-4 py-3 text-gray-700 placeholder:text-[#cd6e57] focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 transition-all"
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone No." 
                    required
                    className="w-full border border-[#e8d5cc] rounded-xl px-4 py-3 text-gray-700 placeholder:text-[#cd6e57] focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 transition-all"
                  />
                </div>

                {/* Email & Position */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    required
                    className="w-full border border-[#e8d5cc] rounded-xl px-4 py-3 text-gray-700 placeholder:text-[#cd6e57] focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 transition-all"
                  />
                  <select 
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#e8d5cc] rounded-xl px-4 py-3 text-[#cd6e57] focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 transition-all appearance-none bg-white"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cd6e57'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.2em',
                    }}
                  >
                    <option value="" disabled>Position</option>
                    <option value="Electrical Engineer">Electrical Engineer</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Site Supervisor">Site Supervisor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* File Upload Custom Input */}
                <div className="relative w-full">
                  <input 
                    type="file" 
                    id="cv-upload" 
                    className="hidden" 
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                  />
                  <label 
                    htmlFor="cv-upload" 
                    className="w-full flex items-center justify-between border border-[#e8d5cc] rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-50 transition-all text-[#cd6e57]"
                  >
                    <span className="truncate">{fileName ? fileName : 'Upload CV / Resume'}</span>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </label>
                </div>

                {/* Message Textarea */}
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full border border-[#e8d5cc] rounded-xl px-4 py-3 text-gray-700 placeholder:text-[#cd6e57] focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 transition-all resize-none"
                ></textarea>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-sm font-medium text-center">
                    Application submitted successfully! We will be in touch.
                  </motion.p>
                )}

                {/* Submit Button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#b92b14] hover:bg-red-800 text-white font-bold text-lg py-3.5 rounded-xl transition-all shadow-md flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    'Submit'
                  )}
                </motion.button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}