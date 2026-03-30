import React from 'react';
import { motion } from 'framer-motion';

const HomeAbout = () => {
  return (
    <section className="py-24 md:py-32 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* Left Side: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[70px] font-semibold tracking-tighter leading-[1.1] text-[#14242D]" style={{ letterSpacing: '-1.4px' }}>
              About <br /> Crosslinks AI
            </h2>
          </motion.div>

          {/* Right Side: Paragraph and Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            className="flex flex-col items-start gap-8 mt-4 md:mt-0"
          >
            <p className="text-[16px] md:text-[18px] text-[#14242D] leading-relaxed font-normal max-w-lg" style={{ letterSpacing: '-0.16px' }}>
              At Crosslinks AI, we strive to simplify artificial intelligence for everyone. Our mission is to simplify AI for a normal person through tailored consultation, team training, and workshops that empower individuals and businesses.
            </p>
            <motion.a
              href="/about"
              whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(255,185,80,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-[#ffb950] text-[#14242D] font-normal text-[18px] border border-[#14242D]/20 shadow-sm transition-all"
            >
              Learn More
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
