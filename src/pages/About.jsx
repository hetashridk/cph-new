import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    { name: "Piyush Bharoliya", role: "" },
    { name: "Nikhil Bharoliya", role: "" },
    { name: "Karisham Khubchandani", role: "" },
    { name: "Hetashri Kansariwala", role: "" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } }
  };

  return (
    <section id="about" className="flex flex-col w-full bg-white relative">

      {/* 1. About Hero Section */}
      <div className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center">

          {/* Left Column - Text */}
          <motion.div
            className="flex flex-col text-center lg:text-left items-center lg:items-start w-full max-w-3xl mx-auto lg:mx-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-[14px] font-semibold tracking-wider text-[#14242D]/50 uppercase mb-4">About Us</motion.h2>
            <motion.h3 variants={itemVariants} className="text-[2.5rem] md:text-[3rem] lg:text-[70px] font-normal leading-[1.1] text-[#14242D] mb-8" style={{ letterSpacing: '-0.02em' }}>
              Using AI Should<br /> Feel Simple,<br /> Not Confusing
            </motion.h3>
            <motion.div variants={containerVariants} className="pt-4 md:pt-8 flex flex-col items-center lg:items-start">
              <motion.p variants={itemVariants} className="text-[16px] md:text-[18px] text-[#14242D] leading-relaxed font-normal mb-6 max-w-2xl" style={{ letterSpacing: '-0.16px' }}>
                At Crosslinks AI, we help businesses understand where AI actually fits in their work. Most people know AI is useful, but they don’t know where to start or what to use. That’s where we help. We guide founders and teams step by step, what to use, how to use it, and how it can make everyday work faster and easier.
              </motion.p>
              <motion.p variants={itemVariants} className="text-[16px] md:text-[18px] text-[#14242D] leading-relaxed font-normal mb-10 max-w-2xl" style={{ letterSpacing: '-0.16px' }}>
                No complicated language. No overthinking. Just simple, practical use of AI.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - Large Portrait Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="w-full mx-auto aspect-[16/9] lg:aspect-[4/5] bg-[#14242D]/5 relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#14242D]/5 group mt-4 lg:mt-0"
          >
            <div className="absolute inset-0 flex items-center justify-center text-[#14242D]/40 font-medium tracking-widest text-sm uppercase group-hover:scale-105 transition-transform duration-700">
              [ Hero Image Placeholder ]
            </div>
          </motion.div>

        </div>
      </div>

      {/* 2. Unified Mission & Purpose Section */}
      <div className="w-full bg-[#ffb950] py-24 md:py-32 relative">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10 flex flex-col gap-16 md:gap-24">

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
            {/* Left Column */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="mb-20 lg:mb-28"
              >
                <h2 className="text-[3rem] md:text-[4rem] lg:text-[60px] font-normal tracking-tight leading-[1.1] text-[#14242D]" style={{ letterSpacing: '-0.02em' }}>
                  Our Mission
                </h2>
                <h3 className="text-[1.25rem] md:text-[1.5rem] lg:text-[22px] font-normal text-[#14242D]/70 mt-6 tracking-wide">
                  We want to make AI easy for everyone to understand and use.
                  Not just for tech people.
                  Not just for big companies.
                  For anyone who wants to save time, reduce effort, and work smarter.
                </h3>
              </motion.div>

              <motion.p
                className="text-[15px] md:text-[16px] leading-[1.8] font-normal text-[#14242D]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              >
                Many businesses struggle because they try to use AI without clarity. They try random tools, watch videos, and still feel confused. Our goal is to remove that confusion and give clear direction so people know exactly what to do.
              </motion.p>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-end">
              <motion.p
                className="text-[15px] md:text-[16px] leading-[1.8] font-normal text-[#14242D]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
              >
                We focus on real use. How AI can help in daily work. How it can save time. How it can reduce manual effort. We teach in a simple way so anyone can understand and start using AI with confidence.
              </motion.p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Our Team Section */}
      <div className="w-full bg-white py-24 border-b border-[#14242D]/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* <h2 className="text-[14px] font-semibold tracking-wider text-[#14242D]/50 uppercase mb-4">Meet Our Experts</h2> */}
            <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[70px] font-normal leading-[1.1] text-[#14242D]" style={{ letterSpacing: '-0.02em' }}>Our Team</h3>
            {/* <p className="max-w-3xl mx-auto mt-6 md:mt-8 text-[16px] md:text-[18px] text-[#14242D] leading-relaxed font-normal" style={{ letterSpacing: '-0.16px' }}>
              The Crosslinks AI team comprises seasoned professionals with diverse expertise in artificial intelligence and its applications. Each member is passionate about empowering others through education and training, ensuring that our clients receive the best guidance in their AI journey.
            </p> */}
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12"
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
                <div className="w-full aspect-[3/4] bg-[#14242D]/5 relative overflow-hidden mb-6 shadow-sm group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                  <div className="absolute inset-0 flex items-center justify-center text-[#14242D]/40 font-medium tracking-widest text-sm uppercase group-hover:scale-105 transition-transform duration-700">
                    [ Team Member Image ]
                  </div>
                  {/* Text Overlay on image bottom (like Wix) */}
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h4 className="text-[22px] font-semibold text-white mb-1 tracking-tight">{member.name}</h4>
                    <p className="text-white/80 text-[15px] font-normal">{member.role}</p>
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
