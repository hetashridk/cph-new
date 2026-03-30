import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const servicesData = [
    {
      id: "01",
      title: "AI Consultation",
      subtitle: "Customized Strategy",
      description: "Our AI consultation services provide personalized solutions to help you integrate AI technologies into your business operations. We work closely with you to identify opportunities and streamline processes, making AI accessible and perfectly actionable for your exact use-case.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      id: "02",
      title: "Team Training",
      subtitle: "Building AI Competence",
      description: "Our AI team training programs equip your staff with the necessary skills and knowledge to leverage AI tools effectively. We focus on entirely hands-on learning experiences to ensure your team is prepared to tackle real-world challenges immediately.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      )
    },
    {
      id: "03",
      title: "Generative Workflows",
      subtitle: "Process Automation",
      description: "Stop repeating manual tasks. We audit your existing processes and seamlessly integrate cutting-edge LLMs and automation agents exactly where they provide the most leverage, saving hundreds of hours.",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#ffb950] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10 w-full">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start relative w-full">

          {/* Left Side: Sticky Information */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 self-start flex flex-col gap-6 relative z-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[14px] font-semibold tracking-wider text-black/60 uppercase mb-4">What We Do</h2>
              <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-semibold leading-[1.08] text-black mb-6 tracking-tight">Our Services</h3>
              <p className="text-black/80 text-[18px] leading-relaxed font-medium mb-8">
                We offer comprehensive solutions to help you integrate AI seamlessly into your organization. Stop working harder—let's build systems that work for you.
              </p>

              <div className="hidden lg:flex items-center gap-3 text-black/40 font-semibold tracking-wide uppercase text-sm">
                <span>Scroll to explore</span>
                <motion.svg
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Unique Mobile Sticky Cards / Desktop Scroll */}
          {/* We return to a flex-col layout. On mobile, cards are sticky and stack. On desktop, they scroll normally. */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6 md:gap-12 relative pb-10">
            {servicesData.map((service, index) => {
              const isHovered = hoveredIndex === index;
              
              // Mobile offsets for the sticky deck effect (100px base + 24px per card)
              const topOffsetMobile = 100 + (index * 24);
              const zIndex = 10 + index;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.6 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ top: `${topOffsetMobile}px`, zIndex }}
                  className="sticky lg:static group cursor-pointer w-full"
                >
                  {/* Card Body */}
                  <div className="bg-white rounded-[2rem] p-8 md:p-12 flex flex-col gap-8 relative shadow-[0_-10px_30px_rgba(0,0,0,0.06)] md:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out md:group-hover:-translate-x-2 overflow-hidden border border-black/5">

                    {/* Glowing effect inside card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffb950]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

                    <div className="flex flex-col gap-6 relative z-10 w-full mb-2 lg:mb-0">
                      
                      {/* Top Row: Number & Icon */}
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="text-[1.25rem] md:text-[1.5rem] font-mono tracking-tight text-black/20 font-bold group-hover:text-black/40 transition-colors duration-500">
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
                          className="text-black p-3 md:p-4 rounded-full border shadow-[0_2px_10px_rgba(0,0,0,0.04)] flex-shrink-0 inline-flex bg-white z-10"
                        >
                          {service.icon}
                        </motion.div>
                      </div>

                      {/* Title Row */}
                      <h4 className="text-[2rem] md:text-[2.5rem] font-semibold tracking-tighter leading-[1.05] text-black w-full pr-4">
                        {service.title}
                      </h4>
                      
                    </div>

                    <div className="relative z-10 w-full">
                      <p className="text-black/70 text-[15px] md:text-[18px] leading-relaxed font-medium max-w-xl">
                        {service.description}
                      </p>
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
