import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { name: "Client One" },
    { name: "Client Two" },
    { name: "Client Three" },
    { name: "Client Four" },
    { name: "Client Five" },
    { name: "Client Six" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } }
  };

  return (
    <section id="clients" className="py-24 bg-[#14242D]/[0.02] relative border-y border-[#14242D]/5 overflow-hidden">
      <motion.div
        className="max-w-[1400px] mx-auto px-6 sm:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-24 lg:items-center">

          {/* Left Column - Heading */}
          <motion.div variants={itemVariants}>
            <h2 className="text-[14px] font-semibold tracking-wider text-[#14242D]/50 uppercase mb-4">Trusted By</h2>
            <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[70px] font-normal leading-[1.1] text-[#14242D]" style={{ letterSpacing: '-0.02em' }}>
              Our Clients
            </h3>
          </motion.div>

          {/* Right Column - Logos Grid (Desktop only) */}
          <motion.div
            className="hidden lg:grid grid-cols-3 gap-12"
            variants={containerVariants}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
                className="flex items-center justify-center h-24 bg-white border border-[#14242D]/5 rounded-2xl group transition-colors duration-300 hover:border-[#ffb950] shadow-sm hover:shadow-[0_4px_20px_rgba(255,185,80,0.15)] cursor-pointer"
              >
                <span className="text-[#14242D]/40 font-semibold tracking-wider text-sm uppercase group-hover:text-[#14242D] transition-colors duration-300">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Mobile & Tablet Infinite Marquee */}
      <motion.div
        className="lg:hidden w-full mt-10 md:mt-16 relative flex items-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Gradients for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[rgba(250,250,250,1)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[rgba(250,250,250,1)] to-transparent z-10 pointer-events-none"></div>

        <div className="flex whitespace-nowrap animate-marquee items-center gap-6">
          {/* Original List */}
          {clients.map((client, index) => (
            <div
              key={`m1-${index}`}
              className="flex items-center justify-center h-20 w-40 bg-white border border-[#14242D]/5 rounded-2xl shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            >
              <span className="text-[#14242D]/40 font-semibold tracking-wider text-xs uppercase">
                {client.name}
              </span>
            </div>
          ))}
          {/* Cloned List for seamless looping */}
          {clients.map((client, index) => (
            <div
              key={`m2-${index}`}
              className="flex items-center justify-center h-20 w-40 bg-white border border-[#14242D]/5 rounded-2xl shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            >
              <span className="text-[#14242D]/40 font-semibold tracking-wider text-xs uppercase">
                {client.name}
              </span>
            </div>
          ))}
          {/* Second Clone to guarantee screen fill */}
          {clients.map((client, index) => (
            <div
              key={`m3-${index}`}
              className="flex items-center justify-center h-20 w-40 bg-white border border-[#14242D]/5 rounded-2xl shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            >
              <span className="text-[#14242D]/40 font-semibold tracking-wider text-xs uppercase">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default Clients;
