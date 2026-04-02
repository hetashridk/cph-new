import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzPU0FQNN5hW6iUVMDsRTLK5c8xR8sX_QefohzS8QMCWjKLjheFe27EeVqycsuQU7vI6g/exec';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setNewsletterStatus('submitting');

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('timestamp', new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setNewsletterStatus('success');
      setEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 4000);
    } catch {
      setNewsletterStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } }
  };

  return (
    <footer id="contact" className="bg-white pt-24 pb-8 relative border-t border-[#14242D]/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16">

          {/* Left: Company Info */}
          <div className="flex flex-col">
            <motion.h2
              variants={itemVariants}
              className="text-[40px] md:text-[55px] font-normal leading-none text-[#14242D] mb-10"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-1.1px' }}
            >
              Crosslinks AI
            </motion.h2>

            <div className="space-y-6 mb-12">
              <motion.div variants={itemVariants} className="flex items-start text-[#14242D] w-fit text-[15px]">
                <span className="w-24 shrink-0 font-medium">Address</span>
                <span className="max-w-xs leading-relaxed">506, Royal Trade Center, Opp. Star Bazaar, Adajan, Surat, 395005.</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center text-[#14242D] w-fit text-[15px]">
                <span className="w-24 font-medium">Phone</span>
                +91 84602 80468
              </motion.div>
              <motion.a variants={itemVariants} href="mailto:hello@crosslinks.ai" className="flex items-center text-[#14242D] hover:text-[#ffb950] transition-colors w-fit text-[15px]">
                <span className="w-24 font-medium">Email</span>
                hello@crosslinks.ai
              </motion.a>
            </div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-[#14242D] flex items-center justify-center text-white hover:bg-[#ffb950] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#14242D] flex items-center justify-center text-white hover:bg-[#ffb950] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Newsletter */}
          <motion.div
            className="relative md:pt-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 variants={itemVariants} className="text-[14px] font-semibold text-[#14242D]/60 mb-6 uppercase tracking-wider">Newsletter</motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-[28px] md:text-[36px] font-normal leading-tight text-[#14242D] mb-8"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-0.5px' }}
            >
              Stay updated with our latest news and insights.
            </motion.p>
            <motion.form variants={containerVariants} onSubmit={handleNewsletterSubmit} className="space-y-4">
              <motion.div variants={itemVariants}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white border-b-2 border-[#14242D]/10 text-[#14242D] px-0 py-3 focus:outline-none focus:border-[#ffb950] transition-colors duration-300 placeholder:text-[#14242D]/30 text-[16px]"
                  required
                />
              </motion.div>
              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={newsletterStatus === 'submitting'}
                whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(255,185,80,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-[#14242D] hover:bg-[#ffb950] text-[#F8F6F5] hover:text-[#14242D] font-normal transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] flex items-center gap-2 group w-full justify-center mt-6"
              >
                {newsletterStatus === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </motion.button>
            </motion.form>
            {newsletterStatus === 'success' && (
              <p className="text-[14px] text-green-600 mt-4">Thanks for subscribing!</p>
            )}
            {newsletterStatus === 'error' && (
              <p className="text-[14px] text-red-500 mt-4">Something went wrong. Try again.</p>
            )}
          </motion.div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#14242D]/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#14242D]/60">
          <div className="flex gap-6">
            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#14242D] transition-colors">Privacy Policy</Link>
            <Link to="/accessibility-statement" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#14242D] transition-colors">Accessibility Statement</Link>
          </div>
          <p>© 2026 by Crosslinks AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
