import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Framer Motion Variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } },
  };

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
    }
  };

  return (
    <section id="hero" className="w-full bg-white relative pt-[120px] pb-10 flex flex-col items-center">
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Main Content Area */}
      <motion.div 
        className="relative z-10 w-full pt-20 flex flex-col items-center justify-center min-h-[70vh]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-[15px] font-medium text-black/60 mb-6 tracking-wide text-center max-w-lg mx-auto">
          We guide founders and teams on how to use AI in real workflows.
        </motion.p>
        
        {/* Massive Headline */}
        <motion.h1 variants={itemVariants} className="text-[4rem] md:text-[5.5rem] font-semibold tracking-tight mb-10 leading-[1.05] text-center text-black">
          Integrate AI Into Your <br className="hidden md:block" />
          Business the Right Way
        </motion.h1>

        {/* Pill CTA */}
        <motion.div variants={itemVariants} className="flex justify-center items-center mb-20">
          <motion.a 
            href="#contact" 
            whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(255,185,80,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-[#ffb950] text-black font-semibold text-[15px] shadow-[0_4px_14px_0_rgba(255,185,80,0.4)] flex items-center gap-2 group"
          >
            Get Started
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </motion.a>
        </motion.div>

        {/* Scrolling Text Bar (Marquee) */}
        <motion.div variants={itemVariants} className="w-full bg-white overflow-hidden py-5 border-y border-black/5 mt-auto mb-16 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex whitespace-nowrap animate-marquee items-center opacity-80">
            {/* Repeated text block for infinite scrolling effect */}
            <div className="flex items-center space-x-12 px-6 text-[13px] tracking-[0.2em] font-semibold text-black uppercase">
              <span>Artificial Intelligence</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
              <span>Machine Learning</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
              <span>Process Automation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
              <span>Custom Development</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
            </div>
            {/* Duplicate for seamless loop */}
             <div className="flex items-center space-x-12 px-6 text-[13px] tracking-[0.2em] font-semibold text-black uppercase">
              <span>Artificial Intelligence</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
              <span>Machine Learning</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
              <span>Process Automation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
              <span>Custom Development</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffb950]"></span>
            </div>
          </div>
        </motion.div>

        {/* Hero Speaker Image Section - Floats continuously */}
        <motion.div 
          variants={floatVariants}
          animate="animate"
          className="w-full max-w-[1000px] aspect-[21/9] bg-black/5 mx-auto relative overflow-hidden rounded-2xl shadow-2xl shadow-black/5 mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent mix-blend-overlay"></div>
          <div className="absolute inset-0 flex items-center justify-center text-black/40 font-medium tracking-widest text-sm uppercase">
            [ Media Object Placeholder ]
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
