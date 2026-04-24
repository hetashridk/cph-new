import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';
import HeroCarousel from '../components/HeroCarousel';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const services = [
  {
    id: '01',
    title: 'AI Strategy & Business Audit for Smarter Growth',
    label: 'AI Consultation',
    description: 'Most businesses don\'t have an AI problem — they have a clarity problem.\nOur AI consultation service starts with a deep AI audit of your workflows, teams, and tools. We identify exactly where AI can reduce costs, save time, and unlock growth — then hand you a prioritised, actionable roadmap.\nNo guesswork. No jargon. Just a clear plan built around your business.',
    what: [
      'Comprehensive AI audit of your current workflows and operations',
      'Identification of highest-impact AI opportunities specific to your industry',
      'Prioritised roadmap with clear next steps and ROI potential',
      'Tool and vendor recommendations tailored to your budget and setup',
      'Strategic guidance on AI adoption to stay ahead of competitors',
    ],
    bg: 'bg-white',
  },
  {
    id: '02',
    title: 'AI Training That Builds Real Skills — 1:1 & Team',
    label: 'AI Training',
    description: 'Knowing AI exists is not enough. Your team needs to use it confidently every single day.\nWe offer both 1:1 AI coaching for founders, executives, and individuals who want personal, role-specific guidance — and structured team training programmes that upskill entire departments at once.\nPractical. Hands-on. Built around how your business actually works.',
    what: [
      '1:1 AI coaching sessions tailored to your role, goals, and tools',
      'Team training workshops with real examples from your industry',
      'Hands-on practice with the AI tools your team will actually use',
      'Custom training curriculum aligned to your business workflows',
      'Ongoing support and accountability to ensure lasting adoption',
    ],
    bg: 'bg-[#fafafa]',
  },
  {
    id: '03',
    title: 'Custom AI Integration & Automation Built for Your Business',
    label: 'Custom Integration',
    description: 'Off-the-shelf AI tools only get you so far. Real competitive advantage comes from AI that fits perfectly into how your business operates.\nWe design and build custom AI integrations and automation solutions — connecting your existing systems, eliminating manual tasks, and embedding AI directly into your core workflows.\nFrom intelligent process automation to fully bespoke AI builds, we make AI work seamlessly inside your operations.',
    what: [
      'Custom AI automation that eliminates repetitive, time-consuming tasks',
      'Seamless integration with your existing tools, CRMs, and platforms',
      'Bespoke AI solutions designed around your unique business processes',
      'End-to-end build, deployment, and testing — fully managed by us',
      'Scalable architecture so your AI systems grow with your business',
    ],
    bg: 'bg-white',
  },
];

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We learn about your business and how you currently work.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We identify where AI can help and create a simple approach.',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'We guide you and your team so AI becomes part of your workflow.',
  },
];

const ServicesPage = () => {
  const openModal = useModal();

  return (
    <div className="flex flex-col w-full bg-white">

      {/* ── HERO ── */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-white border-b border-[#14242D]/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center">

            {/* Left — Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              <motion.p variants={itemVariants} className="text-[14px] font-semibold text-[#14242D]/50 uppercase tracking-wider mb-6">
                What We Offer
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-[2.8rem] md:text-[4rem] lg:text-[70px] font-normal leading-[1.05] text-[#14242D] mb-8"
                style={{ letterSpacing: '-0.02em', fontFamily: "'Wix Madefor Display', sans-serif" }}
              >
                AI Services Built<br />for Real Business
              </motion.h1>
              <motion.p variants={itemVariants} className="text-[16px] md:text-[18px] text-[#14242D]/70 leading-relaxed max-w-xl" style={{ letterSpacing: '-0.16px' }}>
                From strategic AI consultation and hands-on training to fully custom AI integrations — we help businesses adopt AI with confidence, clarity, and measurable results.
              </motion.p>
            </motion.div>

            {/* Right — Hero Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
              className="w-full"
            >
              <HeroCarousel />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.08 }}
              className="group border-t border-[#14242D]/8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-8 lg:gap-12 items-start hover:bg-[#fafafa] -mx-6 sm:-mx-12 px-6 sm:px-12 transition-colors duration-300"
            >
              {/* Number */}
              <div className="flex items-start pt-1">
                <span className="text-[13px] font-mono font-semibold text-[#14242D]/25 tracking-widest">
                  {service.id}
                </span>
              </div>

              {/* Left — Label + Title + Description */}
              <div>
                <span className="inline-block text-[11px] font-semibold text-[#14242D] uppercase tracking-[0.18em] bg-[#ffb950]/20 px-3 py-1 rounded-full mb-5">
                  {service.label}
                </span>
                <h2
                  className="text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-normal leading-[1.1] text-[#14242D] mb-6"
                  style={{ letterSpacing: '-0.02em', fontFamily: "'Wix Madefor Display', sans-serif" }}
                >
                  {service.title}
                </h2>
                <div className="space-y-3 text-[#14242D]/60 text-[15px] md:text-[16px] leading-relaxed" style={{ letterSpacing: '-0.1px' }}>
                  {service.description.split('\n').map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Right — What you get */}
              <div className="lg:pt-10 flex flex-col gap-8">
                <div>
                  <p className="text-[11px] font-semibold text-[#14242D]/35 uppercase tracking-[0.18em] mb-5">
                    What you get
                  </p>
                  <ul className="space-y-3">
                    {service.what.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ffb950] flex-shrink-0" />
                        <span className="text-[#14242D]/75 text-[15px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  onClick={openModal}
                  whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(255,185,80,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="self-start px-8 py-4 rounded-full bg-[#ffb950] text-[#14242D] font-normal text-[18px] shadow-[0_4px_14px_0_rgba(255,185,80,0.4)] flex items-center gap-2 group/btn"
                >
                  Get Started
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-[#14242D]/8" />
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-20 md:py-28 bg-[#ffb950]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-16"
          >
            <p className="text-[13px] font-semibold text-[#14242D]/50 uppercase tracking-wider mb-4">Our Process</p>
            <h2
              className="text-[2.5rem] md:text-[3.5rem] lg:text-[60px] font-normal leading-[1.1] text-[#14242D]"
              style={{ letterSpacing: '-0.02em', fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              How We Work
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-3 gap-8 md:gap-12"
          >
            {steps.map((step) => (
              <motion.div key={step.number} variants={itemVariants} className="flex flex-col">
                <span className="text-[3rem] md:text-[4rem] font-mono font-semibold text-[#14242D]/15 leading-none mb-6">
                  {step.number}
                </span>
                <div className="w-8 h-px bg-[#14242D]/30 mb-6" />
                <h3 className="text-[22px] md:text-[26px] font-normal text-[#14242D] mb-3" style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#14242D]/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
