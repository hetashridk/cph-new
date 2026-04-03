import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  "/about-hero-1.png",
  "/about-hero-2.png",
  "/about-hero-3.png",
  "/about-hero-4.png",
  "/about-hero-5.png",
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => { setDirection(1); setIndex(i => (i + 1) % heroImages.length); };
  const prev = () => { setDirection(-1); setIndex(i => (i - 1 + heroImages.length) % heroImages.length); };

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [index]);

  const variants = {
    enter: d => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: d => ({ x: d < 0 ? '100%' : '-100%', opacity: 0 }),
  };

  return (
    <div className="w-full h-full relative">

      {/* Left Arrow — inside on mobile, outside on lg */}
      <button
        onClick={prev}
        className="absolute left-3 lg:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-[#14242D]/10 flex items-center justify-center shadow-xl text-[#14242D] hover:bg-[#ffb950] transition-colors z-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      {/* Image container */}
      <div className="w-full h-full relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#14242D]/5">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.img
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            src={heroImages[index]}
            alt={`About ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className={`rounded-full transition-all duration-300 ${i === index ? 'w-6 h-2 bg-[#ffb950]' : 'w-2 h-2 bg-white/60 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>

      {/* Right Arrow — inside on mobile, outside on lg */}
      <button
        onClick={next}
        className="absolute right-3 lg:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-[#14242D]/10 flex items-center justify-center shadow-xl text-[#14242D] hover:bg-[#ffb950] transition-colors z-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

    </div>
  );
};

export default HeroCarousel;
