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

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });

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
            src="/contact-hero-bg.jpg" // Place your workshop/hands image here
            alt="Contact Us Hero"
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
              Contact Us
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
          CONTACT INFO & FORM SECTION
      ========================================= */}
      <section className="py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
{/* Left Column: Contact Information */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
              className="flex flex-col pt-4"
            >
              {/* Logo with Hover Pop-up Effect */}
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                className="mb-10 w-48 sm:w-64 relative group cursor-pointer"
              >
                <Image 
                  src="/header-logo.png" 
                  alt="Pyramids Energy Logo" 
                  width={250} 
                  height={100} 
                  className="w-full h-auto object-contain relative z-10"
                />
                
                {/* Floating Tooltip Pop-up */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#b92b14] text-white text-sm font-semibold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl translate-y-2 group-hover:translate-y-0 z-20">
                  Pyramids Energy Est. 1990
                  
                  {/* Tooltip Triangle Pointer */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#b92b14]"></div>
                </div>
              </motion.div>
              <div className="space-y-8 text-gray-900">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Office Address :</h3>
                  <p className="text-xl leading-relaxed">
                    3rd Floor, Al Ghawas Building, Office<br />
                    302 Behind Almuhairy Centre,<br />
                    Khalidiya Street Abu Dhabi, UAE – P.O.<br />
                    Box 45837
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xl">
                    <span className="font-bold">Phone:</span> +971 2 628 9550
                  </p>
                  <p className="text-xl">
                    <span className="font-bold">Email:</span> info@pyramidsenergy.ae
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.08)] border border-gray-100 w-full"
            >
              <h2 className="text-2xl font-semibold text-[#b92b14] text-center mb-8">
                Contact Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name" 
                    required
                    className="w-full border border-[#e8d5cc] rounded-lg px-4 py-3.5 text-gray-700 placeholder:text-[#cd6e57] focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 transition-all"
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone No" 
                    required
                    className="w-full border border-[#e8d5cc] rounded-lg px-4 py-3.5 text-gray-700 placeholder:text-[#cd6e57] focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 transition-all"
                  />
                </div>

                {/* Row 2: Email & Services Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    required
                    className="w-full border border-[#e8d5cc] rounded-lg px-4 py-3.5 text-gray-700 placeholder:text-[#cd6e57] focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 transition-all"
                  />
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#e8d5cc] rounded-lg px-4 py-3.5 text-[#cd6e57] focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 transition-all appearance-none bg-white"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cd6e57'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.2em',
                    }}
                  >
                    <option value="" disabled>Choose services</option>
                    <option value="Electrical Services">Electrical Services</option>
                    <option value="Operation & Maintenance">Operation & Maintenance</option>
                    <option value="Civil & Mechanical Works">Civil & Mechanical Works</option>
                    <option value="Specialized Services">Specialized Services</option>
                  </select>
                </div>

                {/* Row 3: Message Textarea */}
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows={6}
                  required
                  className="w-full border border-[#e8d5cc] rounded-lg px-4 py-3.5 text-gray-700 placeholder:text-[#cd6e57] focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 transition-all resize-none"
                ></textarea>

                {/* Submit Status Message */}
                {submitStatus === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-sm font-medium text-center">
                    Thank you! Your message has been sent successfully.
                  </motion.p>
                )}

                {/* Submit Button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#b92b14] hover:bg-red-800 text-white font-bold text-lg py-3.5 rounded-lg transition-all flex justify-center items-center"
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

{/* =========================================
          MAP SECTION
      ========================================= */}
      <section className="pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp} // Changed from staggerContainer since it's just one element now
            className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.06)] border border-gray-100 relative bg-gray-50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5135.227334983107!2d54.35454721076539!3d24.480117960699236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67ca98c3ce3b%3A0xc77c211ae9eb43e5!2sPyramids%20Energy!5e0!3m2!1sen!2sin!4v1770033164692!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}