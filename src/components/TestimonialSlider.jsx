import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Coach Hardik Lukhi",
    role: "Weight Loss & Wellness Coach",
    image: "/CoachHardikLukhi.jpeg",
    text: "Thank you, Piyushbhai. Your AI video training helped me greatly. Even with limited computer knowledge, I can now create AI videos independently. Your guidance on content creation and social media sharing was especially valuable. I’m truly grateful for the practical and easy way you taught everything.",
    rating: 5
  },
  {
    name: "Nirav Vachhani",
    role: "Founder of Mosaic Moments, Quickybowl",
    image: "/NiravVachhani.jpeg",
    text: "I attended Piyush’s AI workshop and was impressed by his deep knowledge and clear teaching style. He explains AI in a structured, practical way, making it easy for non-technical participants. The session offered valuable insights, tools, and strategies. Highly recommended.",
    rating: 5
  },
  {
    name: "Chandresh vaghasiya",
    role: "Manager",
    image: "/ChandreshVaghasiya.jpeg",
    text: "Piyushbhai, owner of CPH Film, guided us thoroughly in AI and introduced us to its practical use. We had little knowledge initially, but after the course, our work became faster, simpler, and more cost-effective. He taught us how to use AI correctly and effectively in everyday business.",
    rating: 5
  },
  {
    name: "Paricher Tavaria",
    role: "Creative Director",
    image: "/ParicherTavaria.jpeg",
    text: "Piyush stays ahead with the latest AI tools, always finding smart solutions despite budget or time constraints. His teaching is relevant, easy to understand, and perfectly timed for today’s needs. Learning AI under his guidance helps you upgrade skills, excel at work, and deliver winning projects.",
    rating: 5
  },
  {
    name: "Punyada Deshmukh",
    role: "Director, Co Founder, BringJal",
    image: "/PunyadaDeshmukh.jpeg",
    text: "I attended Piyush Bharoliya’s AI workshop as a techie and still walked away impressed. His clarity makes even complex AI concepts simple and practical. The session was engaging, easy to follow, and deeply logical. If you want AI explained in a way that truly makes sense, it’s worth attending.",
    rating: 5
  },
  {
    name: "constant edits",
    role: "Creative director and Video editor",
    image: "/constantEdits.jpeg",
    text: "Before learning from Piyush Bharoliya, I used AI as a tool. After learning from him, I use AI as a system. He taught strategic AI application in video editing, automation, and workflow optimization—making everything clearer, scalable, and future-ready for editors..",
    rating: 5
  },
  {
    name: "Karishma Khubchandani",
    role: "Founder - Life of a Miracle",
    image: "/Karishma.jpeg",
    text: "I thought I was using AI well until Piyush showed what was truly possible. Today, AI feels like a dedicated team for my Miracle brand—handling research, content, and sales in my voice. My focus has shifted from execution to growth, influence, and meaningful impact.",
    rating: 5
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextTestimonial, 4000); // Snappy 4-second auto-scroll
    return () => clearInterval(timer);
  }, [index, isHovered]);

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 })
  };

  const SWIPE_THRESHOLD = 50;
  const onDragEnd = (e, info) => {
    const offset = info.offset.x;
    if (offset < -SWIPE_THRESHOLD) {
      nextTestimonial();
    } else if (offset > SWIPE_THRESHOLD) {
      prevTestimonial();
    }
  };

  return (
    <div
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className="w-full h-full bg-[#F8F6F5]/50 flex flex-col items-center justify-center relative overflow-hidden pointer-events-auto"
    >
      <div className="w-full max-w-5xl px-4 md:px-20 py-10 md:py-0 relative z-10">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={onDragEnd}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 cursor-grab active:cursor-grabbing w-full"
          >
            {/* Enlarged Aspect Ratio Image */}
            <div className="shrink-0 w-56 md:w-72 lg:w-80 aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#14242D]/5 pointer-events-none self-center ring-1 ring-[#14242D]/5 mt-10 lg:mt-0">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-full h-full object-cover select-none scale-[1.02]"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                  if (!e.target.parentElement.querySelector('.no-image-text')) {
                    const p = document.createElement('span');
                    p.className = 'no-image-text text-[10px] text-[#14242D]/30 uppercase text-center px-4';
                    p.innerText = 'No Image';
                    e.target.parentElement.appendChild(p);
                  }
                }}
              />
            </div>

            {/* Testimonial Text Content */}
            <div className="flex flex-col text-center lg:text-left select-none flex-1 pb-28 lg:pb-0 px-6 lg:px-0">
              <span className="text-[40px] md:text-[52px] text-[#ffb950] leading-none mb-2 font-serif opacity-80">"</span>
              <p className="text-[14px] md:text-[18px] leading-[1.7] text-[#14242D] mb-6 font-normal italic md:-mt-4 max-w-2xl mx-auto md:mx-0" style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}>
                {testimonials[index].text}
              </p>
              <div>
                <h4 className="text-[16px] md:text-[18px] font-semibold text-[#14242D] tracking-tight">{testimonials[index].name}</h4>
                <p className="text-[11px] md:text-[13px] text-[#14242D]/50 font-normal uppercase tracking-[0.2em] mt-1">{testimonials[index].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Desktop Only */}
      <div className="hidden lg:flex absolute inset-x-4 top-1/2 -translate-y-1/2 justify-between pointer-events-none z-20">
        <motion.button
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevTestimonial}
          className="w-14 h-14 rounded-full bg-white backdrop-blur-md border border-[#14242D]/10 flex items-center justify-center shadow-xl pointer-events-auto transition-all hover:bg-[#ffb950] hover:text-[#14242D] text-[#14242D]"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextTestimonial}
          className="w-14 h-14 rounded-full bg-white backdrop-blur-md border border-[#14242D]/10 flex items-center justify-center shadow-xl pointer-events-auto transition-all hover:bg-[#ffb950] hover:text-[#14242D] text-[#14242D]"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </motion.button>
      </div>

      {/* Pagination & Mobile/Tablet Arrows */}
      <div className="absolute bottom-6 flex items-center gap-6 z-20">
        {/* Mobile Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="lg:hidden w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#14242D] active:scale-95 transition-transform"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-1 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-[#ffb950] h-6' : 'bg-[#14242D]/10 hover:bg-[#14242D]/30'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="lg:hidden w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#14242D] active:scale-95 transition-transform"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
