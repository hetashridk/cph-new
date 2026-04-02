import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } }
};

const CTASection = () => {
  const openModal = useModal();

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#14242D]/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div className="flex flex-col gap-3 max-w-2xl">
            <motion.h2
              variants={itemVariants}
              className="text-[1.6rem] md:text-[2rem] lg:text-[2.4rem] font-normal leading-[1.2] text-[#14242D]"
              style={{ letterSpacing: '-0.02em', fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              If you want to use AI in a simple and practical way, we can help.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[15px] text-[#14242D]/60 leading-relaxed" style={{ letterSpacing: '-0.1px' }}>
              No complex setup. No confusing tools. Just a clear conversation about where AI fits your work.
            </motion.p>
          </div>
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <motion.button
              onClick={openModal}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(255,185,80,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full bg-[#14242D] hover:bg-[#ffb950] text-white hover:text-[#14242D] font-medium text-[15px] transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] flex items-center gap-2 group w-max"
            >
              Start a Conversation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
