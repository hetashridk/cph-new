import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { blogs } from '../data/blogs';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.08 },
  }),
};

// How many cards visible at once per breakpoint — handled via CSS, JS just controls scroll
const VISIBLE = 3; // max on desktop

const BlogSection = () => {
  const [current, setCurrent] = useState(0);
  const total = blogs.length;

  if (!total) return null;

  const max = Math.max(0, total - VISIBLE);
  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  const canPrev = current > 0;
  const canNext = current < max;

  return (
    <section className="bg-white border-t border-[#14242D]/5 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-[13px] font-semibold tracking-[0.2em] text-[#14242D]/40 uppercase mb-4">
              From the Field
            </p>
            <h2
              className="text-[2.8rem] md:text-[3.5rem] font-normal leading-[1.1] text-[#14242D]"
              style={{ letterSpacing: '-0.02em' }}
            >
              Blogs &<br />Case Studies
            </h2>
          </motion.div>

          {/* Desktop controls */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex items-center gap-4"
          >
            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                disabled={!canPrev}
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  canPrev
                    ? 'border-[#14242D]/15 text-[#14242D] hover:bg-[#ffb950] hover:border-[#ffb950] hover:text-[#14242D] shadow-sm'
                    : 'border-[#14242D]/6 text-[#14242D]/20 cursor-not-allowed'
                }`}
                aria-label="Previous"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={!canNext}
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  canNext
                    ? 'border-[#14242D]/15 text-[#14242D] hover:bg-[#ffb950] hover:border-[#ffb950] hover:text-[#14242D] shadow-sm'
                    : 'border-[#14242D]/6 text-[#14242D]/20 cursor-not-allowed'
                }`}
                aria-label="Next"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="w-px h-6 bg-[#14242D]/10" />

            <Link
              to="/blog"
              className="group flex items-center gap-2 text-[13px] font-semibold tracking-[0.15em] uppercase text-[#14242D]/40 hover:text-[#14242D] transition-colors duration-300"
            >
              View All
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Carousel viewport */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${current} * (100% / ${VISIBLE} + 6px / ${VISIBLE} * (${VISIBLE} - 1)))` }}
            transition={{ type: 'spring', stiffness: 300, damping: 35, mass: 0.8 }}
            style={{ willChange: 'transform' }}
          >
            {blogs.map((post, i) => (
              <div
                key={post.slug}
                className="shrink-0 w-[calc((100%-48px)/3)] max-lg:w-[calc((100%-24px)/2)] max-sm:w-full"
              >
                <PostCard post={post} index={i} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dot indicators */}
        {total > VISIBLE && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-6 h-2 bg-[#ffb950]'
                    : 'w-2 h-2 bg-[#14242D]/15 hover:bg-[#14242D]/30'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Mobile arrows + view all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-between md:hidden"
        >
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canPrev
                  ? 'border-[#14242D]/15 text-[#14242D] hover:bg-[#ffb950] hover:border-[#ffb950]'
                  : 'border-[#14242D]/6 text-[#14242D]/20 cursor-not-allowed'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canNext
                  ? 'border-[#14242D]/15 text-[#14242D] hover:bg-[#ffb950] hover:border-[#ffb950]'
                  : 'border-[#14242D]/6 text-[#14242D]/20 cursor-not-allowed'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <Link
            to="/blog"
            className="group flex items-center gap-2 text-[13px] font-semibold tracking-[0.15em] uppercase text-[#14242D]/40 hover:text-[#14242D] transition-colors duration-300"
          >
            View All Posts
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

function PostCard({ post, index }) {
  return (
    <motion.div
      custom={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-30px' }}
      className="h-full"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group flex flex-col h-full rounded-2xl border border-[#14242D]/8 hover:border-[#ffb950]/50 overflow-hidden transition-all duration-400 shadow-[0_4px_20px_rgba(20,36,45,0.05)] hover:shadow-[0_12px_40px_rgba(255,185,80,0.12)]"
      >
        {/* Cover */}
        <div className="relative bg-[#14242D] aspect-video overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14242D]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 bg-white">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-full bg-[#ffb950]/15 text-[#14242D] text-[10px] font-semibold uppercase tracking-[0.15em]">
              {post.category}
            </span>
          </div>
          <h3
            className="text-[1.1rem] font-normal text-[#14242D] leading-[1.35] mb-3"
            style={{ letterSpacing: '-0.015em' }}
          >
            {post.title}
          </h3>
          <p className="text-[13px] text-[#14242D]/50 leading-relaxed flex-1">{post.excerpt}</p>
          <div className="mt-5 pt-4 border-t border-[#14242D]/6 flex items-center justify-between">
            <span className="text-[11px] text-[#14242D]/30 uppercase tracking-[0.15em]">{post.clientName}</span>
            <span className="text-[12px] font-semibold text-[#14242D]/40 group-hover:text-[#ffb950] transition-colors duration-300 flex items-center gap-1">
              Read
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default BlogSection;
