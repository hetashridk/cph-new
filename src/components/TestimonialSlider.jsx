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

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [index]);

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
    <div className="w-full h-full bg-[#F8F6F5]/50 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-4xl px-4 md:px-12 py-10 md:py-0">
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
            className="flex flex-col md:flex-row items-center gap-6 md:gap-12 cursor-grab active:cursor-grabbing w-full"
          >
            {/* Small Aspect Ratio Image */}
            <div className="shrink-0 w-28 md:w-36 aspect-[4/5] bg-white rounded-xl overflow-hidden shadow-xl border border-[#14242D]/5 pointer-events-none self-center">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-full h-full object-cover select-none"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                  if (!e.target.parentElement.querySelector('.no-image-text')) {
                    const p = document.createElement('span');
                    p.className = 'no-image-text text-[8px] text-[#14242D]/30 uppercase text-center px-2';
                    p.innerText = 'No Image';
                    e.target.parentElement.appendChild(p);
                  }
                }}
              />
            </div>

            {/* Testimonial Text Content */}
            <div className="flex flex-col text-center md:text-left pointer-events-none select-none flex-1 pb-12 md:pb-0">
              <span className="text-[32px] md:text-[40px] text-[#ffb950] leading-none mb-1 font-serif">"</span>
              <p className="text-[14px] md:text-[16px] leading-[1.6] text-[#14242D] mb-4 font-normal italic md:-mt-2 max-w-2xl mx-auto md:mx-0" style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}>
                {testimonials[index].text}
              </p>
              <div>
                <h4 className="text-[15px] md:text-[16px] font-semibold text-[#14242D]">{testimonials[index].name}</h4>
                <p className="text-[11px] md:text-[12px] text-[#14242D]/50 font-normal uppercase tracking-widest leading-relaxed">{testimonials[index].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 flex gap-2">
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
    </div>
  );
};

export default TestimonialSlider;
