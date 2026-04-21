import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { useModal } from '../context/ModalContext';

const INITIAL_COUNT = 6;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.08 },
  }),
};

export default function BlogList() {
  const openModal = useModal();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const featured = blogs[0];
  const rest = blogs.slice(1);
  const visibleRest = rest.slice(0, visibleCount - 1);
  const hasMore = visibleCount - 1 < rest.length;

  return (
    <div className="min-h-screen bg-white pt-[72px]">

      {/* ── Page Header ── */}
      <div className="bg-white border-b border-[#14242D]/5 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
            initial="hidden" animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="text-[13px] font-semibold tracking-[0.2em] text-[#14242D]/40 uppercase mb-5"
            >
              From the Field
            </motion.p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <motion.h1
                variants={fadeUp}
                className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-normal text-[#14242D] leading-[1]"
                style={{ letterSpacing: '-0.025em' }}
              >
                Blogs &<br />Case Studies
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-[15px] text-[#14242D]/50 leading-relaxed max-w-xs md:text-right"
              >
                Real outcomes from businesses that integrated AI the right way.
              </motion.p>
            </div>

            {/* Count pill */}
            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
              <span className="text-[2.4rem] font-normal text-[#14242D]" style={{ letterSpacing: '-0.04em' }}>
                {blogs.length}
              </span>
              <span className="text-[12px] text-[#14242D]/40 uppercase tracking-widest leading-tight">
                {blogs.length === 1 ? 'Story' : 'Stories'}<br />& Growing
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-20 md:py-28">

        {/* ── Featured Post ── */}
        {featured && (
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-20 md:mb-28"
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#14242D]/30 uppercase mb-6">Featured</p>
            <Link to={`/blog/${featured.slug}`} className="group block">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] rounded-3xl overflow-hidden border border-[#14242D]/8 hover:border-[#ffb950]/60 transition-all duration-500 shadow-[0_8px_40px_rgba(20,36,45,0.06)] hover:shadow-[0_16px_60px_rgba(255,185,80,0.15)]">

                {/* Cover */}
                <div className="relative bg-[#14242D] min-h-[320px] lg:min-h-[460px] flex flex-col justify-between p-8 md:p-12 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
                  <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#ffb950]/10 blur-3xl pointer-events-none group-hover:bg-[#ffb950]/18 transition-all duration-700" />

                  <div className="relative z-10 flex items-center gap-3">
                    <span className="px-3 py-1.5 rounded-full bg-[#ffb950] text-[#14242D] text-[11px] font-semibold uppercase tracking-[0.15em]">{featured.category}</span>
                    {featured.tags.map((t, i) => (
                      <span key={i} className="text-white/30 text-[12px] tracking-widest uppercase font-medium hidden sm:block">{t}</span>
                    ))}
                  </div>

                  <div className="relative z-10 my-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
                    <img src={featured.coverImage} alt={featured.title} className="absolute inset-0 w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14242D]/40 to-transparent pointer-events-none" />
                  </div>

                  {/* <div className="relative z-10 flex gap-6 md:gap-10">
                    {featured.cardStats.map((s, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[1.8rem] md:text-[2.2rem] font-normal text-[#ffb950] leading-none" style={{ letterSpacing: '-0.03em' }}>{s.value}</span>
                        <span className="text-[11px] text-white/40 uppercase tracking-[0.12em] mt-1">{s.label}</span>
                      </div>
                    ))}
                  </div> */}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8 md:p-12 bg-white">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      {featured.clientLogo && (
                        <img src={featured.clientLogo} alt={featured.clientName} className="w-10 h-10 rounded-xl object-cover border border-[#14242D]/8" />
                      )}
                      <div>
                        <p className="text-[13px] font-semibold text-[#14242D] leading-none">{featured.clientName}</p>
                        <p className="text-[11px] text-[#14242D]/40 mt-0.5">{featured.clientLocation}</p>
                      </div>
                    </div>

                    <h2 className="text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-normal text-[#14242D] leading-[1.2]" style={{ letterSpacing: '-0.02em' }}>
                      {featured.title}
                    </h2>

                    <p className="text-[15px] text-[#14242D]/55 leading-relaxed">{featured.excerpt}</p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {featured.outcomes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <span className="text-[#ffb950] text-[13px] font-bold w-4 shrink-0">{item.icon}</span>
                          <span className="text-[12px] text-[#14242D]/60 leading-tight">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-[#14242D]/6 pt-6">
                    <span className="text-[12px] text-[#14242D]/30 uppercase tracking-[0.15em] font-medium">{featured.tags[0]}</span>
                    <span className="flex items-center gap-2 text-[14px] font-semibold text-[#14242D] group-hover:text-[#ffb950] transition-colors duration-300">
                      Read Full Story
                      <span className="w-8 h-8 rounded-full bg-[#14242D]/5 group-hover:bg-[#ffb950] flex items-center justify-center transition-all duration-300">
                        <svg className="w-3.5 h-3.5 text-[#14242D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* ── Rest of posts grid ── */}
        {visibleRest.length > 0 && (
          <>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#14242D]/30 uppercase mb-8">More Stories</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleRest.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>

            {/* ── Load More ── */}
            {hasMore && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-14 flex justify-center"
              >
                <motion.button
                  onClick={() => setVisibleCount(c => c + 6)}
                  whileHover={{ y: -3, boxShadow: '0 10px 30px rgba(255,185,80,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 rounded-full border border-[#14242D]/15 hover:border-[#ffb950] bg-white hover:bg-[#ffb950] text-[#14242D] font-medium text-[15px] transition-all duration-300 flex items-center gap-2.5 group"
                >
                  Load More
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </>
        )}

        {/* ── Empty state (only one post, no "more" section) ── */}
        {rest.length === 0 && (
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-4 flex flex-col md:flex-row md:items-center justify-between py-10 border-t border-[#14242D]/6 gap-6"
          >
            <div>
              <p className="text-[15px] text-[#14242D]/50 leading-relaxed max-w-md">
                More client stories are on the way. In the meantime, see how AI can transform your team.
              </p>
            </div>
            <motion.button
              onClick={openModal}
              whileHover={{ y: -3, boxShadow: '0 10px 30px rgba(255,185,80,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 rounded-full bg-[#14242D] hover:bg-[#ffb950] text-white hover:text-[#14242D] font-medium text-[15px] transition-colors duration-300 flex items-center gap-2 group w-max shrink-0"
            >
              Talk to Crosslinks AI
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        )}

      </div>
    </div>
  );
}

function PostCard({ post, index }) {
  return (
    <motion.div
      custom={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-30px' }}
    >
      <Link to={`/blog/${post.slug}`} className="group flex flex-col h-full rounded-2xl border border-[#14242D]/8 hover:border-[#ffb950]/50 overflow-hidden transition-all duration-400 shadow-[0_4px_20px_rgba(20,36,45,0.05)] hover:shadow-[0_12px_40px_rgba(255,185,80,0.12)]">
        {/* Cover */}
        <div className="relative bg-[#14242D] aspect-video overflow-hidden">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14242D]/60 to-transparent" />
          {/* <div className="absolute bottom-4 left-4 flex gap-2">
            {post.cardStats.slice(0, 2).map((s, i) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-[#ffb950] text-[13px] font-semibold" style={{ letterSpacing: '-0.02em' }}>{s.value}</span>
                <span className="text-white/50 text-[10px] uppercase tracking-[0.1em]">{s.label}</span>
              </span>
            ))}
          </div> */}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 bg-white">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-full bg-[#ffb950]/15 text-[#14242D] text-[10px] font-semibold uppercase tracking-[0.15em]">{post.category}</span>
          </div>
          <h3 className="text-[1.1rem] font-normal text-[#14242D] leading-[1.35] mb-3 group-hover:text-[#14242D]" style={{ letterSpacing: '-0.015em' }}>
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
