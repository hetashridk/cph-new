import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
  };

  return (
    <footer id="contact" className="bg-white pt-24 pb-8 relative border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-24">
          
          {/* Left Side text */}
          <motion.div 
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-semibold leading-[1.08] text-black mb-8 tracking-tight">Get in Touch</motion.h2>
            <motion.p variants={itemVariants} className="text-black/70 text-[18px] mb-12 max-w-md leading-relaxed font-medium">
              Connect with us to explore how Crosslinks AI can enhance your AI capabilities. Whether you're looking for specific solutions or seeking expert insights, we are here to guide you on your journey to AI mastery.
            </motion.p>
            
            <div className="space-y-6">
              <motion.a variants={itemVariants} href="mailto:hello@crosslinks.ai" className="flex items-center text-black/80 hover:text-[#ffb950] transition-all duration-300 group w-fit text-[16px] transform hover:translate-x-1">
                <span className="font-semibold w-24 text-black">Email</span>
                hello@crosslinks.ai
              </motion.a>
              <motion.div variants={itemVariants} className="flex items-center text-black/80 w-fit text-[16px]">
                <span className="font-semibold w-24 text-black">Phone</span>
                +91 84602 80468
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start text-black/80 w-fit text-[16px]">
                <span className="font-semibold w-24 shrink-0 text-black">Address</span>
                <span className="max-w-xs leading-relaxed">506, Royal Trade Center, Opp. Star Bazaar, Adajan, Surat, 395005.</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Side form */}
          <motion.div 
            className="relative md:pt-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 variants={itemVariants} className="text-[14px] font-semibold text-black/60 mb-6 uppercase tracking-wider">Send a Message</motion.h3>
            <motion.form variants={containerVariants} className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <motion.div variants={itemVariants} className="group relative">
                <input type="text" placeholder="Name" className="w-full bg-white border-b-2 border-black/10 text-black px-0 py-3 focus:outline-none focus:border-[#ffb950] transition-colors duration-300 placeholder:text-black/30 text-[16px] font-medium rounded-none" />
              </motion.div>
              <motion.div variants={itemVariants} className="group relative">
                <input type="email" placeholder="Email *" className="w-full bg-white border-b-2 border-black/10 text-black px-0 py-3 focus:outline-none focus:border-[#ffb950] transition-colors duration-300 placeholder:text-black/30 text-[16px] font-medium rounded-none" required />
              </motion.div>
              <motion.div variants={itemVariants} className="group relative">
                <textarea rows={3} placeholder="Message" className="w-full bg-white border-b-2 border-black/10 text-black px-0 py-3 focus:outline-none focus:border-[#ffb950] transition-colors duration-300 resize-none placeholder:text-black/30 text-[16px] font-medium rounded-none"></textarea>
              </motion.div>
              <motion.button 
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(255,185,80,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-black hover:bg-[#ffb950] text-white hover:text-black font-medium transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] mt-6 flex items-center gap-2 group w-max"
              >
                Submit
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
