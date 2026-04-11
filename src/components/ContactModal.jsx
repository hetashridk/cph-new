import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx-DaBeNdi2lHqN0Ia3dau1Ut9pv_3hWBmOxySV18g5YJwEsrpysTNl7Heynrva_E5c/exec';

const SERVICES = [
  'AI Consultation',
  'Team Training',
  'Generative Workflows',
  'Other',
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
  if (!form.company.trim()) errors.company = 'Company name is required.';
  if (!form.service) errors.service = 'Please select a service.';
  if (!form.message.trim()) errors.message = 'Message is required.';
  return errors;
};

const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      formData.append('sendThankYouEmail', 'true');
      await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: formData });
      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      setErrors({});
      setTimeout(() => { setStatus('idle'); onClose(); }, 3000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 md:p-10 relative max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#14242D]/5 transition-colors text-[#14242D]/50 hover:text-[#14242D]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <p className="text-[13px] font-semibold text-[#14242D]/50 uppercase tracking-wider mb-2">Get in Touch</p>
              <h2
                className="text-[32px] font-normal leading-tight text-[#14242D] mb-8"
                style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-0.6px' }}
              >
                Let's make your business AI enabled
              </h2>

              {status === 'success' ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#ffb950]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-[#ffb950]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[18px] font-normal text-[#14242D]">Message sent!</p>
                  <p className="text-[14px] text-[#14242D]/50 mt-1">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="group">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Name *"
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
                        placeholder="Email *"
                        className={`w-full bg-white border-b-2 text-[#14242D] px-0 py-3 focus:outline-none transition-colors duration-300 placeholder:text-[#14242D]/30 text-[15px] rounded-none ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-[#14242D]/10 focus:border-[#ffb950]'}`}
                      />
                      {errors.email && <p className="text-[12px] text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="group">
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        className={`w-full bg-white border-b-2 text-[#14242D] px-0 py-3 focus:outline-none transition-colors duration-300 placeholder:text-[#14242D]/30 text-[15px] rounded-none ${errors.phone ? 'border-red-400 focus:border-red-400' : 'border-[#14242D]/10 focus:border-[#ffb950]'}`}
                      />
                      {errors.phone && <p className="text-[12px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                    <div className="group">
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company Name *"
                        className={`w-full bg-white border-b-2 text-[#14242D] px-0 py-3 focus:outline-none transition-colors duration-300 placeholder:text-[#14242D]/30 text-[15px] rounded-none ${errors.company ? 'border-red-400 focus:border-red-400' : 'border-[#14242D]/10 focus:border-[#ffb950]'}`}
                      />
                      {errors.company && <p className="text-[12px] text-red-500 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="group relative">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`w-full bg-white border-b-2 text-[#14242D] px-0 py-3 focus:outline-none transition-colors duration-300 text-[15px] rounded-none appearance-none cursor-pointer ${errors.service ? 'border-red-400 focus:border-red-400' : 'border-[#14242D]/10 focus:border-[#ffb950]'}`}
                      style={{ color: form.service ? '#14242D' : 'rgba(20,36,45,0.3)' }}
                    >
                      <option value="" disabled hidden>Service Interested In *</option>
                      {SERVICES.map(s => (
                        <option key={s} value={s} style={{ color: '#14242D' }}>{s}</option>
                      ))}
                    </select>
                    <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#14242D]/40 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {errors.service && <p className="text-[12px] text-red-500 mt-1">{errors.service}</p>}
                  </div>

                  <div className="group">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Message *"
                      className={`w-full bg-white border-b-2 text-[#14242D] px-0 py-3 focus:outline-none transition-colors duration-300 resize-none placeholder:text-[#14242D]/30 text-[15px] rounded-none ${errors.message ? 'border-red-400 focus:border-red-400' : 'border-[#14242D]/10 focus:border-[#ffb950]'}`}
                    />
                    {errors.message && <p className="text-[12px] text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <p className="text-[13px] text-red-500">Something went wrong. Please try again.</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(255,185,80,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full px-10 py-4 rounded-full bg-[#14242D] hover:bg-[#ffb950] text-[#F8F6F5] hover:text-[#14242D] font-normal transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] mt-2 flex items-center justify-center gap-2 group/btn"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Get Started'}
                    {status !== 'submitting' && (
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
  );
};

export default ContactModal;
