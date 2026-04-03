import { motion } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';

const About = () => {
  const teamMembers = [
    { name: "Piyush Bharoliya", role: "Founder", image: "/piyush.jpg", linkedin: "https://www.linkedin.com/in/piyushbharoliya/", objectPosition: "center 10%" },
    { name: "Nikhil Bharoliya", role: "Co-Founder", image: "/Nikhil.jpeg", linkedin: "https://www.linkedin.com/in/nikhil-bharoliya/", objectPosition: "center 5%" },
    { name: "Karishma Khubchandani", role: "Co-Founder", image: "/Karishma.jpeg", linkedin: "https://www.linkedin.com/in/karishmakhubchandani/", objectPosition: "center 20%" },
    { name: "Hetashri Kansariwala", role: "AI & Full Stack Developer", image: "/HetashriKansariwala.jpg", linkedin: "https://www.linkedin.com/in/hetashrikansariwala", objectPosition: "center 8%" },
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
                At Crosslinks AI, we help businesses understand where AI actually fits in their work. Most people know AI is useful, but they don't know where to start or what to use. That's where we help. We guide founders and teams step by step, what to use, how to use it, and how it can make everyday work faster and easier.
              </motion.p>
              <motion.p variants={itemVariants} className="text-[16px] md:text-[18px] text-[#14242D] leading-relaxed font-normal mb-10 max-w-2xl" style={{ letterSpacing: '-0.16px' }}>
                No complicated language. No overthinking. Just simple, practical use of AI.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="w-full mx-auto aspect-[4/5] mt-4 lg:mt-0 lg:px-16"
          >
            <HeroCarousel />
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
            <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[70px] font-normal leading-[1.1] text-[#14242D]" style={{ letterSpacing: '-0.02em' }}>Our Team</h3>
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
                <div className="w-full aspect-[3/4] bg-[#14242D]/5 relative overflow-hidden mb-6 shadow-sm group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 rounded-[2rem]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ objectPosition: member.objectPosition }}
                  />
                  {/* Text Overlay — visible only on hover */}
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <h4 className="text-[20px] font-semibold text-white mb-1 tracking-tight">{member.name}</h4>
                    <p className="text-white/80 text-[14px] font-normal">{member.role}</p>
                  </div>
                  {/* LinkedIn hover overlay */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:bg-[#ffb950]"
                    onClick={e => e.stopPropagation()}
                  >
                    <svg className="w-5 h-5 text-[#14242D]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
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
