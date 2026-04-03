import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { name: "Sitaram Creation" },
    { name: "Mosiac Moments" },
    { name: "BringJal" },
    { name: "Quickybowl" },
    { name: "Life of a Miracle" },
    { name: "Constant Edits" },
    { name: "Magic Health Club" },
  ];

  const doubled = [...clients, ...clients, ...clients, ...clients];

  return (
    <section id="clients" className="py-24 bg-white relative border-t border-[#14242D]/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center"
        >
          <h2 className="text-[14px] font-semibold tracking-wider text-[#14242D]/50 uppercase mb-4">Trusted By</h2>
          <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[50px] font-normal leading-[1.1] text-[#14242D]" style={{ letterSpacing: '-0.02em' }}>
            Our Clients
          </h3>
        </motion.div>
      </div>

      {/* Infinite marquee - all screen sizes */}
      <div className="w-full relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-marquee gap-6">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-20 w-44 bg-[#F8F6F5] border border-[#14242D]/5 rounded-2xl shrink-0 hover:border-[#ffb950]/50 hover:bg-[#ffb950]/5 transition-all duration-300 group"
            >
              <span className="text-[11px] font-semibold text-[#14242D]/40 uppercase tracking-widest group-hover:text-[#14242D] transition-colors px-4 text-center leading-tight whitespace-normal">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
