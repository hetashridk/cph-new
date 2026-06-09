import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx-DaBeNdi2lHqN0Ia3dau1Ut9pv_3hWBmOxySV18g5YJwEsrpysTNl7Heynrva_E5c/exec';

const RESOURCES = [
  {
    id: 'operations-masterclass',
    title: 'AI Operation Strategy Masterclass',
    description: 'In this masterclass, we break down exactly how you can map out your repetitive processes, identify automation bottlenecks, and successfully roll out generative AI workflows to your team without resistance.',
    videoUrl: 'https://www.youtube.com/embed/JdE4NsTCUIk',
    pdfPath: '/resources/crosslinks-ai-guide.pdf',
    pdfFilename: 'crosslinks-ai-guide.pdf',
  },
];

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[+\d\s\-()]{7,15}$/.test(form.phone)) {
    errors.phone = 'Enter a valid phone number.';
  }
  return errors;
};

const Resources = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleDownloadClick = (resource) => {
    setSelectedResource(resource);
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedResource) return;

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('submitting');
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([k, v]) => formData.append(k, v));
      formData.append('timestamp', new Date().toISOString());
      formData.append('downloadResource', 'true');
      formData.append('resourceName', selectedResource.title);

      // Submit data to Google Sheets App Script
      await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: formData });

      setStatus('success');

      // Trigger actual PDF download
      const link = document.createElement('a');
      link.href = selectedResource.pdfPath;
      link.download = selectedResource.pdfFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form and close modal
      setForm({ name: '', email: '', phone: '' });
      setErrors({});
      setTimeout(() => {
        setStatus('idle');
        setModalOpen(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#F8F6F5] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        {/* Header Section */}
        <div className="max-w-3xl mb-10 sm:mb-20">
          <p className="text-[13px] font-semibold text-[#14242D]/60 uppercase tracking-wider mb-3">Free Learning Hub</p>
          <h1
            className="text-[44px] sm:text-[56px] font-normal leading-[1.15] text-[#14242D] tracking-[-1.5px]"
            style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
          >
            Level up your business operations
          </h1>
          {/* <div className="w-20 h-1 bg-[#ffb950] mt-6 rounded-full" /> */}
        </div>

        {/* Video Resources List */}
        <div className="space-y-16">
          {RESOURCES.map((resource) => {
            return (
              <div
                key={resource.id}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(20,36,45,0.04)] border border-[#14242D]/5 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Video column (Left) */}
                <div className="lg:col-span-7 w-full bg-black relative aspect-video lg:aspect-auto lg:h-full min-h-[250px] lg:min-h-0">
                  <iframe
                    className="w-full h-full absolute inset-0"
                    src={resource.videoUrl}
                    title={resource.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Details column (Right) */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white relative">
                  <div className="space-y-6">

                    {/* Title & Description */}
                    <div>
                      <h2
                        className="text-[26px] sm:text-[30px] font-semibold text-[#14242D] leading-tight mb-3"
                        style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-0.5px' }}
                      >
                        {resource.title}
                      </h2>
                      <p className="text-[14px] text-[#14242D]/60 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>


                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 mt-8 border-t border-[#14242D]/5">
                    <motion.button
                      onClick={() => handleDownloadClick(resource)}
                      whileHover={{ y: -2, backgroundColor: '#ffb950', color: '#14242D', boxShadow: "0 10px 20px rgba(255,185,80,0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-full bg-[#14242D] text-[#F8F6F5] text-[14px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <span>Download Companion PDF</span>
                      <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Download Modal Popup */}
      <AnimatePresence>
        {modalOpen && selectedResource && (
          <>
            {/* Backdrop */}
            <motion.div
              key="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => { if (status !== 'submitting') setModalOpen(false); }}
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                {/* Close Button */}
                {status !== 'submitting' && (
                  <button
                    onClick={() => setModalOpen(false)}
                    className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#14242D]/5 transition-colors text-[#14242D]/50 hover:text-[#14242D]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}

                <p className="text-[12px] font-semibold text-[#14242D]/50 uppercase tracking-wider mb-2">Free Instant Download</p>
                <h2
                  className="text-[28px] font-normal leading-tight text-[#14242D] mb-6"
                  style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-0.5px' }}
                >
                  Enter details to access PDF
                </h2>

                {status === 'success' ? (
                  <div className="py-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#ffb950]/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-[#ffb950]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[18px] font-normal text-[#14242D]">Download started!</p>
                    <p className="text-[14px] text-[#14242D]/50 mt-1">Please check your downloads folder.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="group">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        disabled={status === 'submitting'}
                        className={`w-full bg-white border-b-2 text-[#14242D] px-0 py-3 focus:outline-none transition-colors duration-300 placeholder:text-[#14242D]/30 text-[15px] rounded-none ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-[#14242D]/10 focus:border-[#ffb950]'}`}
                      />
                      {errors.name && <p className="text-[12px] text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div className="group">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        disabled={status === 'submitting'}
                        className={`w-full bg-white border-b-2 text-[#14242D] px-0 py-3 focus:outline-none transition-colors duration-300 placeholder:text-[#14242D]/30 text-[15px] rounded-none ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-[#14242D]/10 focus:border-[#ffb950]'}`}
                      />
                      {errors.email && <p className="text-[12px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div className="group">
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        disabled={status === 'submitting'}
                        className={`w-full bg-white border-b-2 text-[#14242D] px-0 py-3 focus:outline-none transition-colors duration-300 placeholder:text-[#14242D]/30 text-[15px] rounded-none ${errors.phone ? 'border-red-400 focus:border-red-400' : 'border-[#14242D]/10 focus:border-[#ffb950]'}`}
                      />
                      {errors.phone && <p className="text-[12px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    {status === 'error' && (
                      <p className="text-[13px] text-red-500">Something went wrong. Please try again.</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === 'submitting'}
                      whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(255,185,80,0.4)" }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full px-10 py-4 rounded-full bg-[#14242D] hover:bg-[#ffb950] text-[#F8F6F5] hover:text-[#14242D] font-medium transition-colors duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.15)] mt-2 flex items-center justify-center gap-2 group/btn"
                    >
                      {status === 'submitting' ? 'Processing...' : 'Get Instant Access'}
                      {status !== 'submitting' && (
                        <svg className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resources;
