import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import TestimonialSlider from './TestimonialSlider';
import { useModal } from '../context/ModalContext';

const Hero = () => {
  const sliderRef = useRef(null);
  const openModal = useModal();

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

        {/* Hero Testimonial Slider Section */}
        <div className="w-full px-4 md:px-12 lg:px-24 flex justify-center mt-8 md:mt-0">
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
