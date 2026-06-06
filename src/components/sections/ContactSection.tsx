'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ContactSection() {
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

// --- Animation Variants ---
  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const, delay: 0.2 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const, delay: 0.4 } },
  };
  return (
    <section className="relative z-10 w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInDown}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Contact us
          </h2>
        </motion.div>

        {/* Main Background Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Note: Place your background image showing the worker here */}
            <Image 
              src="/contact-bg.jpg" 
              alt="Worker Background"
              fill
              className="object-cover object-center"
            />
            {/* Reddish overlay matching the mockup */}
            <div className="absolute inset-0 bg-[#8b2210]/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Grid Content Wrapper */}
          <div className="relative z-10 p-6 md:p-10 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              {/* Left Column: Map */}
<motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={slideInLeft}
  className="w-full h-[300px] sm:h-[400px] lg:h-full min-h-[400px] relative rounded-2xl overflow-hidden shadow-lg border-4 border-white"
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5135.227334983107!2d54.35454721076539!3d24.480117960699236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67ca98c3ce3b%3A0xc77c211ae9eb43e5!2sPyramids%20Energy!5e0!3m2!1sen!2sin!4v1770033164692!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map Location"
  ></iframe>
</motion.div>
              {/* Right Column: Contact Form */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInRight}
                className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl w-full"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#b92b14] text-center mb-8">
                  Quick Connect
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name" 
                        required
                        className="w-full border border-[#b92b14]/30 rounded-xl px-4 py-3 text-gray-700 placeholder:text-[#b92b14]/60 focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone No" 
                        required
                        className="w-full border border-[#b92b14]/30 rounded-xl px-4 py-3 text-gray-700 placeholder:text-[#b92b14]/60 focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Services Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email" 
                        required
                        className="w-full border border-[#b92b14]/30 rounded-xl px-4 py-3 text-gray-700 placeholder:text-[#b92b14]/60 focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full border border-[#b92b14]/30 rounded-xl px-4 py-3 text-[#b92b14]/80 focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 focus:border-transparent transition-all appearance-none bg-white"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23b92b14'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
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
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message" 
                      required
                      rows={4}
                      className="w-full border border-[#b92b14]/30 rounded-xl px-4 py-3 text-gray-700 placeholder:text-[#b92b14]/60 focus:outline-none focus:ring-2 focus:ring-[#b92b14]/50 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-sm font-medium text-center">
                      Thank you! Your request has been sent successfully.
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
                      'Call Request'
                    )}
                  </motion.button>

                </form>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}