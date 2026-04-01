import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    title: 'Understand Where AI Fits in Your Business',
    label: 'AI Consultation',
    description: 'Many businesses try AI without knowing where it actually helps.\nWe study how your business works and show you where AI can make a real difference.\nNo complex terms. No confusion. Just clear direction.',
    what: [
      'Understanding of your current workflow',
      'Areas where AI can save time or reduce effort',
      'Tool suggestions based on your needs',
      'Simple action plan to get started',
    ],
    bg: 'bg-white',
  },
  {
    id: '02',
    title: 'Help Your Team Use AI with Confidence',
    label: 'Team Training',
    description: 'Learning AI is one thing. Using it daily is another.\nWe train your team in a simple and practical way so they can actually use AI in their work.\nNo technical background needed.',
    what: [
      'Easy explanation of AI tools',
      'Hands-on training sessions',
      'Real examples based on your work',
      'Clear ways to use AI in daily tasks',
    ],
    bg: 'bg-[#fafafa]',
  },
  {
    id: '03',
    title: 'Reduce Manual Work with Simple AI Systems',
    label: 'Generative AI Workflows',
    description: 'Many tasks are repeated every day.\nWe help you replace that manual effort with simple AI workflows.\nThis makes your work faster and more efficient.',
    what: [
      'Review of your current processes',
      'Identification of repetitive tasks',
      'AI workflow setup',
      'Guidance on how to maintain and use it',
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
  return (
    <div className="flex flex-col w-full bg-white">

      {/* ── HERO ── */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-white border-b border-[#14242D]/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <motion.p variants={itemVariants} className="text-[14px] font-semibold text-[#14242D]/50 uppercase tracking-wider mb-6">
              What We Offer
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-[2.8rem] md:text-[4rem] lg:text-[72px] font-normal leading-[1.05] text-[#14242D] mb-8"
              style={{ letterSpacing: '-0.02em', fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              Simple AI Support for Your Business
            </motion.h1>
            <motion.p variants={itemVariants} className="text-[17px] md:text-[19px] text-[#14242D]/70 leading-relaxed" style={{ letterSpacing: '-0.16px' }}>
              We help you understand, use, and apply AI in your daily work. Whether you&apos;re starting from zero or already exploring AI, we guide you with clear steps and practical use.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      {services.map((service, i) => (
        <section key={service.id} className={`py-20 md:py-28 ${service.bg} border-b border-[#14242D]/5`}>
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid md:grid-cols-2 gap-12 md:gap-24 items-start"
            >
              {/* Left */}
              <div>
                <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                  <span className="text-[13px] font-mono text-[#14242D]/30 font-semibold tracking-widest">{service.id}</span>
                  <span className="text-[13px] font-semibold text-[#14242D]/50 uppercase tracking-wider">{service.label}</span>
                </motion.div>
                <motion.h2
                  variants={itemVariants}
                  className="text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-normal leading-[1.1] text-[#14242D] mb-8"
                  style={{ letterSpacing: '-0.02em', fontFamily: "'Wix Madefor Display', sans-serif" }}
                >
                  {service.title}
                </motion.h2>
                <motion.div variants={itemVariants} className="space-y-4 text-[#14242D]/70 text-[16px] md:text-[17px] leading-relaxed" style={{ letterSpacing: '-0.16px' }}>
                  {service.description.split('\n').map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </motion.div>
              </div>

              {/* Right — What you get */}
              <motion.div variants={itemVariants} className="bg-[#14242D] rounded-[2rem] p-8 md:p-10">
                <p className="text-[13px] font-semibold text-white/40 uppercase tracking-wider mb-6">What you get</p>
                <ul className="space-y-4">
                  {service.what.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ffb950] flex-shrink-0" />
                      <span className="text-white/90 text-[15px] md:text-[16px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

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

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto gap-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-[2.5rem] md:text-[3.5rem] lg:text-[60px] font-normal leading-[1.1] text-[#14242D]"
              style={{ letterSpacing: '-0.02em', fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              If you want to use AI in a simple and practical way, we can help.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[16px] md:text-[18px] text-[#14242D]/70 leading-relaxed" style={{ letterSpacing: '-0.16px' }}>
              No complex setup. No confusing tools. Just a clear conversation about your business and where AI can make your work easier.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/#contact">
                <motion.button
                  whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(255,185,80,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-full bg-[#14242D] hover:bg-[#ffb950] text-[#F8F6F5] hover:text-[#14242D] font-normal transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] flex items-center gap-2 group"
                >
                  Start a Conversation
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
