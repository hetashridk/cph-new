import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex justify-between items-center">
        {/* LOGO (LEFT) */}
        <div className="flex-shrink-0 cursor-pointer">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
             <span className="text-[18px] font-semibold tracking-tight text-black">Crosslinks <span className="text-[#ffb950]">AI</span></span>
          </Link>
        </div>
        
        {/* NAV LINKS (CENTER) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10">
          <Link to="/" onClick={() => window.scrollTo(0,0)} className={`transition-colors duration-300 text-[14px] font-medium tracking-wide ${location.pathname === '/' ? 'text-black' : 'text-black/60 hover:text-black'}`}>Home</Link>
          <Link to="/about" onClick={() => window.scrollTo(0,0)} className={`transition-colors duration-300 text-[14px] font-medium tracking-wide ${location.pathname === '/about' ? 'text-black' : 'text-black/60 hover:text-black'}`}>About</Link>
        </div>

        {/* CTA (RIGHT) */}
        <div className="hidden md:block">
          <motion.a 
            href="#contact" 
            whileHover={{ y: -2, boxShadow: "0 6px 20px rgba(255,185,80,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full bg-black hover:bg-[#ffb950] text-white hover:text-black text-[13px] font-medium border border-transparent transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] block"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
