import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    { name: "Piyush Bharoliya", role: "Founder & CEO" },
    { name: "John Doe", role: "AI Strategist" },
    { name: "Jane Smith", role: "Lead Consultant" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section id="about" className="flex flex-col w-full bg-white relative">
      
      {/* 1. About Hero Section */}
      <div className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-start">
          
          {/* Left Column - Text */}
          <motion.div 
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-[14px] font-semibold tracking-wider text-black/50 uppercase mb-4">About Us</motion.h2>
            <motion.h3 variants={itemVariants} className="text-[3rem] md:text-[4rem] font-semibold leading-[1.08] text-black tracking-tight mb-8">
              Demystifying <br /> AI for Every <br /> Business
            </motion.h3>
            <motion.div variants={containerVariants} className="pt-4 md:pt-8">
              <motion.p variants={itemVariants} className="text-[18px] text-black/80 leading-relaxed font-medium mb-6 max-w-2xl">
                At Crosslinks AI, we strive to simplify artificial intelligence for everyone. Our mission is to simplify AI for a normal person through tailored consultation, team training, and workshops that empower individuals and businesses.
              </motion.p>
              <motion.p variants={itemVariants} className="text-[18px] text-black/80 leading-relaxed font-medium mb-10 max-w-2xl">
                With a deep understanding of the evolving AI landscape, we guide founders and teams on how to leverage AI tools in real workflows, moving beyond just experiments to create lasting value.
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Large Portrait Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full aspect-[4/5] bg-black/5 relative overflow-hidden rounded-2xl shadow-2xl shadow-black/5 group"
          >
            <div className="absolute inset-0 flex items-center justify-center text-black/40 font-medium tracking-widest text-sm uppercase group-hover:scale-105 transition-transform duration-700">
               [ Hero Image Placeholder ]
            </div>
          </motion.div>

        </div>
      </div>

      {/* 2. Mission & Purpose Section: Interactive Expanding Split-Cards */}
      <div className="w-full bg-[#ffb950] py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-12 relative z-10 flex flex-col items-center">
          
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="text-[14px] font-semibold tracking-wider text-black/50 uppercase mb-4">Core Values</h2>
             <h3 className="text-[3rem] md:text-[4rem] font-semibold leading-[1.08] text-black tracking-tight">Our Driving Forces</h3>
          </motion.div>

          {/* Expanding Flex Container */}
          <motion.div 
            className="w-full h-[70vh] min-h-[500px] flex flex-col md:flex-row gap-4 md:gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* Mission Card */}
            <div className="relative flex-1 md:hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] bg-white rounded-3xl overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.08)] cursor-pointer">
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply transition-opacity duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center text-black/20 font-medium tracking-widest text-sm uppercase z-0 pointer-events-none group-hover:scale-105 transition-transform duration-1000">
                [ Mission Image ]
              </div>
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-white via-white/40 to-transparent">
                 <h3 className="text-black text-[2.5rem] md:text-[4rem] font-bold tracking-tight leading-none mb-4 group-hover:-translate-y-2 transition-transform duration-700">
                   Our Mission.
                 </h3>
                 <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                   <div className="overflow-hidden">
                     <p className="text-black/70 text-[16px] md:text-[18px] leading-relaxed font-medium md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-xl">
                       Bringing clarity and actionable strategies to organizations trying to navigate the complex world of Artificial Intelligence. We believe that AI should be accessible, understandable, and immediately applicable to your daily workflows.
                     </p>
                   </div>
                 </div>
              </div>
            </div>

            {/* Purpose Card */}
            <div className="relative flex-1 md:hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] bg-white rounded-3xl overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.08)] cursor-pointer">
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply transition-opacity duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center text-black/20 font-medium tracking-widest text-sm uppercase z-0 pointer-events-none group-hover:scale-105 transition-transform duration-1000">
                [ Purpose Image ]
              </div>
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-white via-white/40 to-transparent">
                 <h3 className="text-black text-[2.5rem] md:text-[4rem] font-bold tracking-tight leading-none mb-4 group-hover:-translate-y-2 transition-transform duration-700">
                   Our Purpose.
                 </h3>
                 <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                   <div className="overflow-hidden">
                     <p className="text-black/70 text-[16px] md:text-[18px] leading-relaxed font-medium md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-xl">
                       To build a bridge between cutting-edge AI technologies and practical business applications. We empower teams to confidently adopt AI, fostering innovation and driving significant growth without the confusion or overwhelm.
                     </p>
                   </div>
                 </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* 3. Our Team Section */}
      <div className="w-full bg-white py-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="text-[14px] font-semibold tracking-wider text-black/50 uppercase mb-4">Meet Our Experts</h2>
             <h3 className="text-[3rem] md:text-[4rem] font-semibold leading-[1.08] text-black tracking-tight">Our Team</h3>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
             {teamMembers.map((member, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group cursor-pointer"
                >
                  {/* Large Vertical Image Card */}
                  <div className="w-full aspect-[3/4] bg-black/5 relative overflow-hidden rounded-2xl mb-6 shadow-sm group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                     <div className="absolute inset-0 flex items-center justify-center text-black/40 font-medium tracking-widest text-sm uppercase group-hover:scale-105 transition-transform duration-700">
                        [ Team Member Image ]
                     </div>
                     {/* Text Overlay on image bottom (like Wix) */}
                     <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <h4 className="text-[22px] font-semibold text-white mb-1 tracking-tight">{member.name}</h4>
                        <p className="text-white/80 text-[15px] font-medium">{member.role}</p>
                     </div>
                  </div>
                </motion.div>
             ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default About;
