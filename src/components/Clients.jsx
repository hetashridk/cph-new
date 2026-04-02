import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { name: "CPH Films" },
    { name: "Mosiac Moments" },
    { name: "BringJal" },
    { name: "Quickybowl" },
    { name: "Life of a Miracle" },
    { name: "Constant Edits" },
    { name: "Magic Health Club" },
  ];

  return (
    <section id="clients" className="py-24 bg-white relative border-t border-[#14242D]/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Section Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex-shrink-0"
          >
            <h2 className="text-[14px] font-semibold tracking-wider text-[#14242D]/50 uppercase mb-4">Trusted By</h2>
            <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[50px] font-normal leading-[1.1] text-[#14242D]" style={{ letterSpacing: '-0.02em' }}>
              Our Clients
            </h3>
          </motion.div>

          {/* Logos Display */}
          <div className="flex-1 w-full min-w-0">
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {clients.map((client, i) => (
                <div key={i} className="flex items-center justify-center h-24 bg-[#F8F6F5] border border-[#14242D]/5 rounded-2xl grayscale hover:grayscale-0 transition-all duration-300 group">
                  <span className="text-[12px] font-semibold text-[#14242D]/40 uppercase tracking-widest group-hover:text-[#14242D] transition-colors">{client.name}</span>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet Marquee */}
            <div className="lg:hidden w-full overflow-hidden relative py-4">
              <div className="flex whitespace-nowrap animate-marquee gap-8">
                {[...clients, ...clients].map((client, i) => (
                  <div key={i} className="flex items-center justify-center h-16 w-36 bg-[#F8F6F5] border border-[#14242D]/5 rounded-xl shrink-0">
                    <span className="text-[10px] font-semibold text-[#14242D]/30 uppercase tracking-widest">{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;
