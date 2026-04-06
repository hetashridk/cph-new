import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is an AI audit?',
    answer: "It's a review of your business to find where AI can save time, reduce costs, and improve your workflow.",
  },
  {
    question: 'Who is this for?',
    answer: "Business owners, teams, and professionals who want to use AI but don't know where to start.",
  },
  {
    question: 'What will I get after the audit?',
    answer: 'A clear action plan, tool recommendations, and practical steps you can start using immediately.',
  },
  {
    question: 'Do I need technical knowledge?',
    answer: 'No. Everything is explained in simple terms and focused on real use.',
  },
  {
    question: 'How is this different from AI training?',
    answer: 'This is about identifying opportunities in your business. Training can be done after to help your team implement it.',
  },
  {
    question: 'How long is the session?',
    answer: 'Typically 60–90 minutes, depending on your business and requirements.',
  },
  {
    question: 'Will you help with implementation?',
    answer: 'Yes, I can guide you further or train your team after the audit.',
  },
  {
    question: 'What kind of businesses do you work with?',
    answer: 'I work with different types of businesses where AI can improve daily operations, marketing, or workflows.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#14242D]/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={itemVariants}
            className="text-[13px] uppercase tracking-[0.18em] text-[#14242D]/40 mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-[36px] md:text-[52px] font-normal leading-none text-[#14242D] mb-14"
            style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-1px' }}
          >
            Common questions
          </motion.h2>

          <div className="divide-y divide-[#14242D]/8">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={itemVariants}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span
                    className="text-[16px] md:text-[18px] font-normal text-[#14242D] group-hover:text-[#ffb950] transition-colors duration-200"
                    style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-0.3px' }}
                  >
                    {faq.question}
                  </span>
                  <span className="ml-6 shrink-0 w-7 h-7 rounded-full border border-[#14242D]/20 flex items-center justify-center text-[#14242D] group-hover:border-[#ffb950] group-hover:text-[#ffb950] transition-colors duration-200">
                    <motion.svg
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                    </motion.svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[15px] text-[#14242D]/60 leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
