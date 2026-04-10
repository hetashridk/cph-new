import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { getBlogBySlug } from '../data/blogs';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.1 },
  }),
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  return <PostRenderer post={post} />;
}

function PostRenderer({ post }) {
  const openModal = useModal();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY       = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-white pt-[72px]">

      {/* Reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#ffb950] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ── Hero ── */}
      {/* On mobile: stacked layout — image on top, text below on dark bg */}
      {/* On desktop: classic aspect-video with overlay text */}
      <div ref={heroRef} className="relative bg-[#14242D]">

        {/* Image — aspect-video on all sizes */}
        <div className="relative w-full aspect-video overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover object-center opacity-60"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#14242D] via-[#14242D]/30 to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#ffb950]/8 blur-[100px] pointer-events-none" />
        </div>

        {/* Text — sits below image on mobile, overlaid on desktop */}
        <motion.div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-8 md:py-0 md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:pb-12"
          style={{ opacity: heroOpacity }}
        >
          <div className="flex items-center gap-2 text-[12px] text-white/40 uppercase tracking-[0.15em] font-medium mb-5">
            <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white/70 transition-colors">Stories</Link>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="px-3 py-1.5 rounded-full bg-[#ffb950] text-[#14242D] text-[11px] font-semibold uppercase tracking-[0.15em]">
              {post.category}
            </span>
            {post.tags.map((t, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full bg-white/10 text-white/60 text-[11px] font-semibold uppercase tracking-[0.15em]">
                {t}
              </span>
            ))}
          </div>

          <h1
            className="text-[1.6rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-normal text-white leading-[1.15] max-w-4xl"
            style={{ letterSpacing: '-0.025em' }}
          >
            {post.title}
          </h1>
        </motion.div>
      </div>

      {/* ── Metrics Strip ── */}
      {/* <div className="bg-[#14242D] border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {post.metrics.map((m, i) => (
              <motion.div
                key={i} custom={i} variants={fadeUp} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className="bg-[#14242D] px-6 md:px-8 py-6 flex flex-col gap-1"
              >
                <span className="text-[2.4rem] md:text-[3rem] font-normal leading-none" style={{ letterSpacing: '-0.04em', color: m.color }}>
                  {m.value}
                </span>
                <span className="text-white text-[13px] font-medium mt-1">{m.label}</span>
                <span className="text-white/35 text-[11px] uppercase tracking-[0.1em]">{m.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}

      {/* ── Article Body ── */}
      <article className="max-w-[760px] mx-auto px-6 sm:px-12 py-20 md:py-28">

        {/* Author row */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 pb-8 border-b border-[#14242D]/8"
        >
          {post.clientLogo && (
            <img src={post.clientLogo} alt={post.clientName} className="w-12 h-12 rounded-xl object-cover border border-[#14242D]/10" />
          )}
          <div>
            <p className="text-[14px] font-semibold text-[#14242D]">{post.clientName}</p>
            <p className="text-[12px] text-[#14242D]/40 mt-0.5">{post.clientLocation}</p>
          </div>
          <div className="ml-auto text-right hidden sm:block">
            <p className="text-[11px] text-[#14242D]/30 uppercase tracking-[0.15em]">Published by</p>
            <p className="text-[13px] font-semibold text-[#14242D]">{post.publishedBy}</p>
          </div>
        </motion.div>

        {/* Sections */}
        {post.sections.map((section, si) => (
          <Section key={si} label={section.label}>
            {section.blocks.map((block, bi) => renderBlock(block, bi))}
          </Section>
        ))}

      </article>

      {/* ── CTA Banner ── */}
      <div className="bg-[#14242D] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-64 rounded-full bg-[#ffb950]/8 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-56 rounded-full bg-[#ffb950]/5 blur-[80px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-20 md:py-28 relative z-10">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } } }}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col items-center text-center max-w-2xl mx-auto"
          >
            <p className="text-[13px] font-semibold tracking-[0.2em] text-[#ffb950]/60 uppercase mb-5">Your Turn</p>
            <h2 className="text-[2.2rem] md:text-[3rem] font-normal text-white leading-[1.1] mb-6" style={{ letterSpacing: '-0.025em' }}>
              {post.cta.heading}
            </h2>
            <p className="text-[16px] text-white/50 leading-relaxed mb-10 max-w-lg">{post.cta.sub}</p>
            <motion.button
              onClick={openModal}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(255,185,80,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-[#ffb950] text-[#14242D] font-semibold text-[16px] shadow-[0_4px_20px_rgba(255,185,80,0.3)] flex items-center gap-2.5 group w-max"
            >
              {post.cta.button}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

    </div>
  );
}

/* ── Block renderer ── */
function renderBlock(block, key) {
  switch (block.type) {
    case 'paragraph':
      return <P key={key}>{block.text}</P>;

    case 'pullQuote':
      return <PullQuote key={key} attribution={block.attribution}>{block.text}</PullQuote>;

    case 'steps':
      return (
        <div key={key} className="mt-8 flex flex-col gap-4">
          {block.items.map((step, i) => (
            <motion.div
              key={i} custom={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.1 } }) }}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="group flex gap-5 p-5 rounded-2xl border border-[#14242D]/6 hover:border-[#ffb950]/40 hover:bg-[#ffb950]/4 transition-all duration-300"
            >
              <span className="text-[2rem] font-normal text-[#14242D]/12 group-hover:text-[#ffb950]/60 transition-colors duration-300 leading-none shrink-0 mt-0.5" style={{ letterSpacing: '-0.04em' }}>
                {step.num}
              </span>
              <div>
                <p className="text-[15px] font-semibold text-[#14242D] mb-1">{step.title}</p>
                <p className="text-[14px] text-[#14242D]/55 leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      );

    case 'metricGrid':
      return (
        <div key={key} className="my-10 grid grid-cols-3 gap-3">
          {block.items.map((m, i) => (
            <motion.div
              key={i} custom={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.1 } }) }}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#14242D]/[0.03] border border-[#14242D]/6"
            >
              <span className="text-[2.2rem] font-normal leading-none mb-2" style={{ color: m.c, letterSpacing: '-0.04em' }}>{m.v}</span>
              <span className="text-[11px] text-[#14242D]/50 uppercase tracking-[0.1em] leading-snug whitespace-pre-line">{m.l}</span>
            </motion.div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

/* ── Sub-components ── */
function Section({ label, children }) {
  return (
    <motion.section
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } } }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
      className="mb-16 md:mb-20"
    >
      <p className="text-[11px] font-semibold tracking-[0.22em] text-[#14242D]/30 uppercase mb-6">{label}</p>
      {children}
    </motion.section>
  );
}

function P({ children }) {
  return (
    <p className="text-[16px] md:text-[17px] text-[#14242D]/75 leading-[1.8] mb-5 last:mb-0">{children}</p>
  );
}

function PullQuote({ children, attribution }) {
  return (
    <motion.blockquote
      variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } } }}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      className="my-14 md:my-20 pl-6 border-l-[3px] border-[#ffb950]"
    >
      <p className="text-[1.3rem] md:text-[1.55rem] font-normal text-[#14242D] leading-[1.5]" style={{ letterSpacing: '-0.01em' }}>
        {children}
      </p>
      {attribution && (
        <p className="mt-4 text-[12px] text-[#14242D]/35 uppercase tracking-[0.15em] font-medium">{attribution}</p>
      )}
    </motion.blockquote>
  );
}
