import { useState, useEffect } from 'react';
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
    <div className="w-full aspect-[4/5] relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#14242D]/5">
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
          alt={`Hero ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </AnimatePresence>
    </div>
  );
};

export default HeroCarousel;
