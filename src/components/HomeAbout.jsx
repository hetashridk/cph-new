import React from 'react';
import { motion } from 'framer-motion';

const HomeAbout = () => {
  return (
    <section className="py-24 md:py-32 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left Side: Image — stretches to match right column height exactly */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative overflow-hidden rounded-3xl aspect-[4/5] lg:aspect-auto lg:flex-1 lg:self-stretch"
          >
            <img
              src="/piyush.jpg"
              alt="Piyush Bharoliya"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* Right Side: Title + Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            className="flex flex-col items-start gap-4 lg:flex-1"
          >
            {/* Title moved to right column */}
            <h2
              className="text-[2.5rem] md:text-[3.5rem] lg:text-[50px] font-normal tracking-tight leading-[1.1] text-[#14242D] mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              About the Founder
            </h2>

            <h3 className="text-[22px] md:text-[26px] text-[#14242D] font-medium leading-[1.3] mb-2" style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}>
              Hi! My name is <span className="text-[#ffb950]">Piyush.</span>
            </h3>

            <div className="space-y-6 text-[#14242D]/80 text-[16px] md:text-[18px] leading-relaxed max-w-xl" style={{ letterSpacing: '-0.16px' }}>
              <p>
                For me, <span className="text-[#14242D] font-semibold">Automation</span> was the game changer, no exaggeration.
              </p>

              <p>
                It's how I scaled my first agency, delivered thousands of creatives overnight, and was first recognized as an industry leader.
              </p>

              <p>
                These experiences led me to found my own AI studio and work with top D2C brands. Now, I'm here to help you do the same.
              </p>

              <p>I work with you to make your business smoother using AI. Less stress, better flow, more clarity.</p>

              <p>We keep it simple. You spend less time on repetitive work and more on what matters. No complicated setup.
                The goal is simple: make things clearer, faster, and easier.</p>
            </div>

            <div className="mt-8 pt-8 border-t border-[#14242D]/10 w-full">
              <p className="text-[14px] md:text-[16px] font-semibold text-[#14242D]">
                Piyush Bharoliya
              </p>
              <p className="text-[12px] md:text-[13px] text-[#14242D]/50 font-normal uppercase tracking-widest mt-1">
                Founder of CPHfilms, Crosslinks.AI, AI Marketing Studio
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
