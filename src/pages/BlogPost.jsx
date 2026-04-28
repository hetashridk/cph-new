import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
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

  return (
    <div className="min-h-screen bg-white pt-[72px]">

      {/* Reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#ffb950] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ── Hero ── */}
      {/* Centered layout: image → title below on white bg */}
      <div ref={heroRef} className="relative bg-white">

        {/* Container — same max-width as article content */}
        <div className="max-w-[760px] mx-auto px-6 sm:px-12 py-6 md:py-8">
          
          {/* Image — aspect-video, centered */}
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl mb-5">
            <motion.div className="absolute inset-0" style={{ y: heroY }}>
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>

          {/* Text — title below image */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
          >
            {/* Title */}
            <h1
              className="text-[1.6rem] sm:text-[2.2rem] md:text-[3rem] font-normal text-[#14242D] leading-[1.15]"
              style={{ letterSpacing: '-0.025em' }}
            >
              {post.title}
            </h1>
          </motion.div>

        </div>
      </div>

      {/* ── Share Bar ── */}
      <ShareBar title={post.title} />

      {/* ── Audio Player ── */}
      {/* {post.audioUrl && <AudioPlayer src={post.audioUrl} />} */}

      {/* ── Article Body ── */}
      <article className="max-w-[760px] mx-auto px-6 sm:px-12 py-12 md:py-16">

        {/* Sections */}
        {post.sections.map((section, si) => (
          <Section key={si} label={section.label}>
            {section.blocks.map((block, bi) => renderBlock(block, bi))}
          </Section>
        ))}

        {/* Author row */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex items-center gap-4 mt-16 pt-8 border-t border-[#14242D]/8"
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

      </article>

      {/* ── CTA Banner ── */}
      <div className="bg-[#14242D] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-64 rounded-full bg-[#ffb950]/8 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-56 rounded-full bg-[#ffb950]/5 blur-[80px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-16 md:py-24 relative z-10">
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

/* ── Audio Player ── */
function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const speeds = [1, 1.25, 1.5, 2];

  useEffect(() => {
    const audio = audioRef.current;
    const onLoaded = () => setDuration(audio.duration);
    const onTime = () => setCurrent(audio.currentTime);
    const onEnded = () => setPlaying(false);
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  function togglePlay() {
    const audio = audioRef.current;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  }

  function seek(e) {
    const audio = audioRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * duration;
  }

  function cycleSpeed() {
    const next = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
    audioRef.current.playbackRate = next;
    setSpeed(next);
  }

  function fmt(s) {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white border-b border-[#14242D]/6"
    >
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="max-w-[760px] mx-auto px-6 sm:px-12 py-5">

        {/* Card */}
        <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#14242D]/8 bg-[#14242D]/[0.02]">

          {/* Play button */}
          <button
            onClick={togglePlay}
            className="shrink-0 w-11 h-11 rounded-full bg-[#14242D] flex items-center justify-center hover:bg-[#14242D]/80 transition-colors duration-200 shadow-sm"
          >
            {playing ? (
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 translate-x-[1px]">
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            )}
          </button>

          {/* Middle — label + waveform + progress */}
          <div className="flex-1 min-w-0 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#14242D]/40">
                Listen to this article
              </span>
              <span className="text-[11px] text-[#14242D]/35 tabular-nums">
                {fmt(current)} / {fmt(duration)}
              </span>
            </div>

            {/* Progress bar */}
            <div
              className="relative h-[5px] bg-[#14242D]/8 rounded-full cursor-pointer group"
              onClick={seek}
            >
              <div
                className="h-full bg-[#ffb950] rounded-full relative transition-all duration-100"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#ffb950] border-2 border-white shadow opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </div>
            </div>
          </div>

          {/* Speed */}
          <button
            onClick={cycleSpeed}
            className="shrink-0 w-10 h-8 rounded-lg border border-[#14242D]/12 text-[12px] font-semibold text-[#14242D]/50 hover:text-[#14242D] hover:border-[#14242D]/25 hover:bg-[#14242D]/4 transition-all duration-200"
          >
            {speed}x
          </button>

        </div>
      </div>
    </motion.div>
  );
}

/* ── Share Bar ── */
function ShareBar({ title }) {
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function shareOnLinkedIn() {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, 'linkedin-share', 'width=550,height=435');
  }

  function shareOnX() {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, 'x-share', 'width=550,height=435');
  }

  function shareOnWhatsApp() {
    const message = `${title} ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, 'whatsapp-share');
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-md border-b border-[#14242D]/6"
      >
        <div className="max-w-[760px] mx-auto px-6 sm:px-12 py-3 flex items-center gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#14242D]/35 mr-1 hidden sm:inline">Share</span>

          {/* LinkedIn Button */}
          <button
            onClick={shareOnLinkedIn}
            aria-label="Share on LinkedIn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium text-[#14242D]/60 hover:text-[#14242D] hover:bg-[#14242D]/6 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </button>

          {/* X / Twitter Button */}
          <button
            onClick={shareOnX}
            aria-label="Share on X / Twitter"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium text-[#14242D]/60 hover:text-[#14242D] hover:bg-[#14242D]/6 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
            <span className="hidden sm:inline">X / Twitter</span>
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={shareOnWhatsApp}
            aria-label="Share on WhatsApp"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium text-[#14242D]/60 hover:text-[#14242D] hover:bg-[#14242D]/6 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </button>

          {/* Copy Link Button */}
          <button
            onClick={copyLink}
            aria-label="Copy link"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 ml-auto"
            style={copied
              ? { color: '#14242D', background: 'rgba(255,185,80,0.15)' }
              : { color: 'rgba(20,36,45,0.6)' }}
          >
            {copied ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-[#ffb950]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span className="hidden sm:inline">Copy link</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </>
  );
}

/* ── Sub-components ── */
function Section({ label, children }) {
  return (
    <motion.section
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } } }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
      className="mb-12 md:mb-16"
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
      className="my-12 md:my-16 pl-6 border-l-[3px] border-[#ffb950]"
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