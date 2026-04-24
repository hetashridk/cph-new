import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const Services = () => {
  const openModal = useModal();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const servicesData = [
    {
      id: "01",
      title: "AI Consultation",
      subtitle: "Strategy & AI Audit",
      description: "Get expert AI consulting tailored to your business. We conduct a thorough AI audit of your workflows, identify the highest-impact opportunities, and deliver a clear, prioritised roadmapso you know exactly where to start and what to invest in.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      id: "02",
      title: "AI Training",
      subtitle: "1:1 & Team Training",
      description: "Practical AI training for individuals and teams. From focused 1:1 coaching sessions for founders and leaders to hands-on team training programmeswe build real AI competence so your people use AI with confidence every day.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      )
    },
    {
      id: "03",
      title: "Custom Integration",
      subtitle: "AI Automation & Build",
      description: "We design and deploy custom AI automation solutions built around your specific workflows. From automating repetitive tasks to integrating AI tools directly into your systemswe make AI work seamlessly inside your business.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      )
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#ffb950] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10 w-full">

        <div className="flex flex-col gap-12 md:gap-20 items-center relative w-full">

          {/* Top Section: Header Information */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <h2 className="text-[14px] font-semibold tracking-wider text-[#14242D]/60 uppercase mb-4">What We Do</h2>
              <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[70px] font-normal leading-[1.1] text-[#14242D] mb-6" style={{ letterSpacing: '-0.02em' }}>Our Services</h3>
            </motion.div>
          </div>

          {/* Bottom Section: 3 Cards Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: index * 0.12 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative group cursor-pointer w-full"
                >
                  {/* Card Body */}
                  <div className="bg-white rounded-[2rem] p-8 md:p-10 lg:p-12 flex flex-col gap-8 relative shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out group-hover:-translate-y-2 overflow-hidden border border-[#14242D]/5 h-full">

                    {/* Glowing effect inside card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffb950]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

                    <div className="flex flex-col gap-6 relative z-10 w-full mb-2">

                      {/* Top Row: Number & Icon */}
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="text-[1.25rem] md:text-[1.5rem] font-mono tracking-tight text-[#14242D]/20 font-semibold group-hover:text-[#14242D]/40 transition-colors duration-500">
                          {service.id}
                        </div>

                        {/* Icon */}
                        <motion.div
                          initial={false}
                          animate={{
                            scale: isHovered ? 1.05 : 1,
                            rotate: isHovered ? -5 : 0,
                            backgroundColor: isHovered ? '#ffb950' : '#f9f9f9',
                            borderColor: isHovered ? '#ffb950' : 'rgba(0,0,0,0.05)'
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="text-[#14242D] p-3 md:p-4 rounded-full border shadow-[0_2px_10px_rgba(0,0,0,0.04)] flex-shrink-0 inline-flex bg-white z-10"
                        >
                          {service.icon}
                        </motion.div>
                      </div>

                      {/* Title Row */}
                      <h4 className="text-[24px] md:text-[26px] lg:text-[28px] font-normal leading-[1.3] text-[#14242D] w-full" style={{ letterSpacing: '-0.01em' }}>
                        {service.title}
                      </h4>

                    </div>

                    <div className="relative z-10 w-full mt-auto flex flex-col gap-6">
                      <p className="text-[#14242D] text-[15px] lg:text-[16px] leading-relaxed font-normal" style={{ letterSpacing: '-0.16px' }}>
                        {service.description}
                      </p>
                      <motion.button
                        onClick={openModal}
                        whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(255,185,80,0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        className="self-start px-6 py-3 rounded-full bg-[#ffb950] text-[#14242D] font-normal text-[15px] shadow-[0_4px_14px_0_rgba(255,185,80,0.4)] flex items-center gap-2 group/btn"
                      >
                        Get Started
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </motion.button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
