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

const Clients = () => {
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
  }, []);

  const clients = [
    { name: "CPH Films" },
    { name: "Mosiac Moments" },
    { name: "BringJal" },
    { name: "Quickybowl" },
    { name: "Life of a Miracle" },
    { name: "Constant Edits" },
  ];

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 50 : -50, opacity: 0 })
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
    <section id="clients" className="py-16 md:py-24 bg-white relative border-t border-[#14242D]/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">

          {/* Left Column: Heading & Logos */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="mb-8 md:mb-12"
            >
              <h2 className="text-[14px] font-semibold tracking-wider text-[#14242D]/50 uppercase mb-4">Trusted By</h2>
              <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[60px] font-normal leading-[1.1] text-[#14242D]" style={{ letterSpacing: '-0.02em' }}>
                Our Clients
              </h3>
            </motion.div>

            {/* Desktop Logos Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {clients.map((client, i) => (
                <div key={i} className="flex items-center justify-center h-20 bg-[#F8F6F5] border border-[#14242D]/5 rounded-xl grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="text-[12px] font-semibold text-[#14242D]/40 uppercase tracking-widest">{client.name}</span>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet Logos Marquee */}
            <div className="lg:hidden w-full overflow-hidden relative py-4">
              <div className="flex whitespace-nowrap animate-marquee gap-6">
                {[...clients, ...clients].map((client, i) => (
                  <div key={i} className="flex items-center justify-center h-16 w-32 bg-[#F8F6F5] border border-[#14242D]/5 rounded-xl shrink-0">
                    <span className="text-[10px] font-semibold text-[#14242D]/30 uppercase tracking-widest">{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Compact Testimonials */}
          <div className="min-w-0">
            <div className="relative bg-[#F8F6F5] rounded-3xl p-6 md:p-12 border border-[#14242D]/5 overflow-hidden w-full max-w-full">
              <div className="relative min-h-[380px] md:min-h-[300px] flex items-center">
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
                    className="w-full flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start lg:items-center cursor-grab active:cursor-grabbing"
                  >
                    {/* Small Rectangular Image */}
                    <div className="shrink-0 w-32 md:w-40 aspect-[4/5] bg-white rounded-xl overflow-hidden shadow-lg border border-[#14242D]/10 pointer-events-none">
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

                    {/* Text Content */}
                    <div className="flex flex-col text-center md:text-left select-none pointer-events-none">
                      <span className="text-[40px] text-[#ffb950] leading-none mb-2 font-serif hidden md:block">"</span>
                      <p className="text-[15px] md:text-[17px] leading-[1.6] text-[#14242D] mb-6 font-normal italic md:-mt-4" style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}>
                        {testimonials[index].text}
                      </p>
                      <div>
                        <h4 className="text-[16px] font-semibold text-[#14242D]">{testimonials[index].name}</h4>
                        <p className="text-[12px] text-[#14242D]/50 font-normal uppercase tracking-widest leading-relaxed">{testimonials[index].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Compact Pagination */}
              <div className="flex justify-center md:justify-start gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-[#ffb950] w-4' : 'bg-[#14242D]/10 hover:bg-[#14242D]/30'}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
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
