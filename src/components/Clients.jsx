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
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section id="clients" className="py-24 bg-black/[0.02] relative border-y border-black/5">
      <motion.div 
        className="max-w-[1400px] mx-auto px-6 sm:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-center">
          
          {/* Left Column - Heading */}
          <motion.div variants={itemVariants}>
            <h2 className="text-[14px] font-semibold tracking-wider text-black/50 uppercase mb-4">Trusted By</h2>
            <h3 className="text-[3rem] md:text-[3.5rem] font-semibold leading-[1.08] text-black tracking-tight">
              Our Clients
            </h3>
          </motion.div>
          
          {/* Right Column - Logos Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
            variants={containerVariants}
          >
            {clients.map((client, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
                className="flex items-center justify-center h-24 bg-white border border-black/5 rounded-2xl group transition-colors duration-300 hover:border-[#ffb950] shadow-sm hover:shadow-[0_4px_20px_rgba(255,185,80,0.15)] cursor-pointer"
              >
                <span className="text-black/40 font-semibold tracking-wider text-sm uppercase group-hover:text-black transition-colors duration-300">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Clients;
