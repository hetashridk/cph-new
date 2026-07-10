import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import TestimonialSlider from './TestimonialSlider';
import { useModal } from '../context/ModalContext';

const Hero = () => {
  const sliderRef = useRef(null);
  const { openModal, openWorkshopModal } = useModal();
  const [hoveredWorkshopIndex, setHoveredWorkshopIndex] = React.useState(null);

  const workshopsData = [
    {
      id: "01",
      title: "AI Video Ads Masterclass",
      date: "25 july 2026, 4pm - 7pm",
      description: "Learn to create compelling AI-powered video ads. Master ad idea generation, storytelling frameworks, storyboarding, AI video creation, prompt writing, and proven ad frameworks.",
      whatYouLearn: [
        "Ad Idea Generation",
        "Storytelling Frameworks",
        "Storyboarding",
        "AI Video Creation",
        "Better Prompt Writing",
        "Proven Ad Frameworks"
      ],
      for: "Business Owners, Marketers, Creators, Agencies, and Freelancers"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } },
  };

  return (
    <section id="hero" className="w-full bg-white relative pt-12 md:pt-[120px] pb-10 flex flex-col items-center overflow-x-hidden">
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Main Content Area */}
      <motion.div
        className="relative z-10 w-full pt-8 md:pt-16 flex flex-col items-center justify-start md:justify-center min-h-screen md:min-h-[70vh]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-[18px] font-normal text-[#14242D] mb-6 text-center max-w-3xl lg:max-w-none mx-auto px-4" style={{ letterSpacing: '-0.18px' }}>
          We guide founders and teams on how to use AI in real workflows, not just experiments.
        </motion.p>

        {/* Massive Headline */}
        <motion.h1 variants={itemVariants} className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[85px] font-normal mb-8 md:mb-10 leading-[1] text-center text-[#14242D] px-4 lg:px-0" style={{ letterSpacing: '-0.02em' }}>
          Integrate AI Into Your <br className="hidden md:block" />
          Business the Right Way
        </motion.h1>

        {/* Pill CTA */}
        <motion.div variants={itemVariants} className="flex justify-center items-center mb-20">
          <motion.button
            onClick={openModal}
            whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(255,185,80,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-[#ffb950] text-[#14242D] font-normal text-[18px] shadow-[0_4px_14px_0_rgba(255,185,80,0.4)] flex items-center gap-2 group"
          >
            Get Started
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </motion.button>
        </motion.div>

        {/* Scrolling Text Bar (Marquee) */}
        <motion.div variants={itemVariants} className="w-full bg-white overflow-hidden py-5 border-y border-[#14242D]/5 mt-auto mb-16 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex whitespace-nowrap animate-marquee items-center opacity-80">
            {/* Repeated text blocks for infinite scrolling effect - 4 blocks ensures no gaps on any screen size */}
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="flex items-center space-x-8 md:space-x-12 px-6 text-[11px] md:text-[13px] tracking-[0.2em] font-semibold text-[#14242D] uppercase">
                <span>AI Consultation</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
                <span>AI Training</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
                <span>Custom Integration</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
                <span>1:1 AI Coaching</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
                {/* <span>AI Training</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span> */}
                <span>GenAI Workshop</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Workshops Section */}
        <div className="w-full mt-16 sm:mt-20 md:mt-24 lg:mt-28">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {/* <h2 className="text-[14px] font-semibold tracking-wider text-[#14242D]/60 uppercase mb-4">Upcoming Events</h2> */}
                <h3 className="text-[1.8rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[70px] font-normal leading-[1.1] text-[#14242D]" style={{ letterSpacing: '-0.02em' }}>Upcoming AI Workshops</h3>
              </motion.div>
            </div>

            <div
              className={`w-full ${workshopsData.length === 1
                ? "flex justify-center"
                : "grid grid-cols-1 md:grid-cols-2"
                } gap-6 md:gap-8 lg:gap-10`}

            >
              {workshopsData.map((workshop, index) => {
                const isHovered = hoveredWorkshopIndex === index;

                return (
                  <motion.div
                    key={workshop.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.4, 0.25, 1],
                      delay: index * 0.12
                    }}
                    onMouseEnter={() => setHoveredWorkshopIndex(index)}
                    onMouseLeave={() => setHoveredWorkshopIndex(null)}
                    className={`relative group cursor-pointer w-full ${workshopsData.length === 1
                        ? "max-w-[650px]"
                        : ""
                      }`}
                  >
                    {/* Card Body */}
                    <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col gap-6 md:gap-8 lg:gap-10 relative shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out group-hover:-translate-y-2 overflow-hidden border border-[#14242D]/5 h-full">

                      {/* Glowing effect inside card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ffb950]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

                      <div className="flex flex-row justify-between items-start gap-4 relative z-10 w-full mb-1">
                        <div>

                          {/* Title Row */}
                          <h4 className="text-[24px] md:text-[26px] lg:text-[28px] font-normal leading-[1.3] text-[#14242D] flex-1" style={{ letterSpacing: '-0.01em' }}>
                            {workshop.title}
                          </h4>
                          <div className="relative z-10 w-full flex flex-col gap-3 sm:gap-4 text-[#14242D]/60 pb-4 sm:pb-6">
                            <div className="text-[14px] font-normal flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              {workshop.date}
                            </div>
                            <div className="inline-flex pt-2 sm:pt-3">
                              <span className="text-[11px] font-semibold text-[#ffb950] bg-[#ffb950]/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                                Online Workshop
                              </span>
                            </div>
                          </div>

                          <div className="relative z-10 w-full flex flex-col gap-5 sm:gap-6">
                            <p className="text-[#14242D] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed font-normal" style={{ letterSpacing: '-0.16px' }}>
                              {workshop.description}
                            </p>

                            {workshop.whatYouLearn && (
                              <div className="flex flex-col gap-3">
                                <p className="text-[11px] font-semibold text-[#14242D]/35 uppercase tracking-[0.18em]">
                                  What You'll Learn
                                </p>
                                <ul className="space-y-2 sm:space-y-2.5">
                                  {workshop.whatYouLearn.map((item, j) => (
                                    <li key={j} className="flex items-start gap-2">
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ffb950] flex-shrink-0" />
                                      <span className="text-[#14242D]/70 text-[12px] sm:text-[13px] leading-relaxed">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {workshop.for && (
                              <div className="flex flex-col gap-2">
                                <p className="text-[11px] font-semibold text-[#14242D]/35 uppercase tracking-[0.18em]">
                                  For
                                </p>
                                <p className="text-[#14242D]/70 text-[12px] sm:text-[13px] leading-relaxed">{workshop.for}</p>
                              </div>
                            )}
                          </div>

                          <div className="relative z-10 w-full mt-auto pt-4 sm:pt-6 md:pt-8 border-t border-[#14242D]/5 flex flex-col gap-6">
                            <motion.button
                              onClick={() => openWorkshopModal(workshop.title)}
                              whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(255,185,80,0.6)" }}
                              whileTap={{ scale: 0.95 }}
                              className="self-start px-6 py-3 rounded-full bg-[#ffb950] text-[#14242D] font-normal text-[15px] shadow-[0_4px_14px_0_rgba(255,185,80,0.4)] flex items-center gap-2 group/btn"
                            >
                              Register Now
                              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </motion.button>
                          </div>
                        </div>

                        {/* Calendar Icon */}
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
                          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </motion.div>

                      </div>


                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hero Testimonial Slider Section */}
        <div className="w-full px-4 md:px-12 lg:px-24 flex justify-center mt-10">
          <div className="w-full max-w-[1000px] relative mb-20 md:mb-10">
            {/* Desktop Left Arrow - outside the box */}
            <motion.button
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => sliderRef.current?.prev()}
              className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white backdrop-blur-md border border-[#14242D]/10 items-center justify-center shadow-xl transition-all hover:bg-[#ffb950] hover:text-[#14242D] text-[#14242D] z-10"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="w-full min-h-[650px] md:min-h-[700px] lg:min-h-0 lg:aspect-[21/9] bg-[#F8F6F5]/50 relative overflow-hidden rounded-2xl border border-[#14242D]/5 shadow-2xl shadow-[#14242D]/5"
            >
              <TestimonialSlider ref={sliderRef} />
            </motion.div>

            {/* Desktop Right Arrow - outside the box */}
            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => sliderRef.current?.next()}
              className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white backdrop-blur-md border border-[#14242D]/10 items-center justify-center shadow-xl transition-all hover:bg-[#ffb950] hover:text-[#14242D] text-[#14242D] z-10"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </motion.button>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
