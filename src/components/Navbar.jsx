import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4' : 'bg-transparent py-4 md:py-6'}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex justify-between items-center">
          {/* LOGO (LEFT) */}
          <div className="flex-shrink-0 cursor-pointer z-50">
            <Link to="/" onClick={() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }}>
              <span className="text-[16px] font-normal text-[#14242D]" style={{ letterSpacing: '-0.16px' }}>Crosslinks AI</span>
            </Link>
          </div>

          {/* NAV LINKS (CENTER - DESKTOP) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className={`transition-colors duration-300 text-[16px] font-normal ${location.pathname === '/' ? 'text-[#14242D]' : 'text-[#14242D]/60 hover:text-[#14242D]'}`}>Home</Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)} className={`transition-colors duration-300 text-[16px] font-normal ${location.pathname === '/about' ? 'text-[#14242D]' : 'text-[#14242D]/60 hover:text-[#14242D]'}`}>About</Link>
            <Link to="/services" onClick={() => window.scrollTo(0, 0)} className={`transition-colors duration-300 text-[16px] font-normal ${location.pathname === '/services' ? 'text-[#14242D]' : 'text-[#14242D]/60 hover:text-[#14242D]'}`}>Services</Link>
          </div>

          {/* CTA (RIGHT - DESKTOP) */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              whileHover={{ y: -2, boxShadow: "0 6px 20px rgba(255,185,80,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-[#14242D] hover:bg-[#ffb950] text-[#F8F6F5] hover:text-[#14242D] text-[16px] font-normal border border-transparent transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] block"
            >
              Contact Us
            </motion.a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#14242D] focus:outline-none p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-8 md:hidden shadow-xl"
          >
            <Link to="/" onClick={() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }} className={`text-[2rem] font-semibold tracking-tight ${location.pathname === '/' ? 'text-[#14242D]' : 'text-[#14242D]/50'}`}>Home</Link>
            <Link to="/about" onClick={() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }} className={`text-[2rem] font-semibold tracking-tight ${location.pathname === '/about' ? 'text-[#14242D]' : 'text-[#14242D]/50'}`}>About</Link>
            <Link to="/services" onClick={() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }} className={`text-[2rem] font-semibold tracking-tight ${location.pathname === '/services' ? 'text-[#14242D]' : 'text-[#14242D]/50'}`}>Services</Link>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-8 py-4 rounded-full bg-[#14242D] hover:bg-[#ffb950] text-[#F8F6F5] hover:text-[#14242D] transition-colors text-center text-[16px] font-normal"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
