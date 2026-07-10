import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VALID_COUPONS = ['JULY500'];
const COUPON_DISCOUNT = 500;
const BASE_PRICE = 5000;
const DISPLAY_PRICE = 3000;
const FINAL_PRICE = 2500;

const validate = (form) => {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = 'Name is required.';
  } else if (form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (!/^[a-zA-Z\s]+$/.test(form.name.trim())) {
    errors.name = 'Name can only contain letters and spaces.';
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.';
  } else if (form.email.length > 100) {
    errors.email = 'Email is too long.';
  }

  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[\d\s\-+()]{7,15}$/.test(form.phone.trim())) {
    errors.phone = 'Enter a valid phone number (7-15 digits).';
  } else if (!/\d/.test(form.phone)) {
    errors.phone = 'Phone number must contain at least one digit.';
  }

  return errors;
};

const WorkshopModal = ({ isOpen, onClose, workshopTitle = 'AI Workshop' }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', coupon: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [couponValid, setCouponValid] = useState(false);

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

    const updatedForm = { ...form, [name]: value };
    const validationErrors = validate(updatedForm);

    if (validationErrors[name]) {
      setErrors(prev => ({ ...prev, [name]: validationErrors[name] }));
    } else {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }

    if (name === 'coupon') {
      setCouponValid(VALID_COUPONS.includes(value.toUpperCase()));
    }
  };

  const currentPrice = couponValid ? FINAL_PRICE : DISPLAY_PRICE;

  const handlePayment = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    try {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.body.appendChild(script);

      script.onload = () => {
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: currentPrice * 100,
          currency: 'INR',
          name: 'Crosslinks AI',
          description: workshopTitle,
          prefill: {
            name: form.name,
            email: form.email,
            contact: form.phone,
          },
          notes: {
            coupon_applied: couponValid ? form.coupon.toUpperCase() : 'none',
            workshop_type: workshopTitle,
          },
          handler: async (response) => {
            try {
              const formData = new FormData();
              formData.append('paymentRecord', 'true');
              formData.append('razorpay_payment_id', response.razorpay_payment_id);
              formData.append('name', form.name);
              formData.append('email', form.email);
              formData.append('phone', form.phone);
              formData.append('coupon', couponValid ? form.coupon.toUpperCase() : '');
              formData.append('amount', currentPrice);
              formData.append('workshop_type', workshopTitle);
              formData.append('workshop_date', '25 July 2026, 4pm - 7pm');
              formData.append('timestamp', new Date().toISOString());

              const googleScriptResponse = await fetch('https://script.google.com/macros/s/AKfycbx-DaBeNdi2lHqN0Ia3dau1Ut9pv_3hWBmOxySV18g5YJwEsrpysTNl7Heynrva_E5c/exec', {
                method: 'POST',
                body: formData,
              });

              const responseText = await googleScriptResponse.text();
              console.log(formData);

              console.log('Google Script Response:', responseText);

              try {
                const responseJson = JSON.parse(responseText);
                if (!responseJson.result || responseJson.result === 'error') {
                  console.error('Backend error:', responseJson.error);
                }
              } catch (e) {
                console.warn('Could not parse response as JSON');
              }

              setStatus('success');
              setForm({ name: '', email: '', phone: '', coupon: '' });
              setCouponValid(false);
              setErrors({});
              setTimeout(() => { setStatus('idle'); onClose(); }, 3000);
            } catch (err) {
              console.error('Error sending payment data:', err);
              setStatus('error');
            }
          },
          modal: {
            ondismiss: () => {
              setStatus('idle');
            }
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      };
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

              <p className="text-[13px] font-semibold text-[#14242D]/50 uppercase tracking-wider mb-2">
                Book Now
              </p>
              <h1
                className="text-[32px] font-normal leading-tight text-[#14242D] mb-2"
                style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-0.6px' }}
              >
                {workshopTitle}
              </h1>
              <p className="text-[14px] text-[#14242D]/60 mb-6">
                Master AI automation and transform your business
              </p>

              {status === 'success' ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#ffb950]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-[#ffb950]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[18px] font-normal text-[#14242D]">Payment Successful!</p>
                  <p className="text-[14px] text-[#14242D]/50 mt-1">Check your email for workshop details.</p>
                </div>
              ) : (
                <>
                  {/* Price Section */}
                  <div className="mb-6 p-4 bg-[#14242D]/5 rounded-lg">
                    <div className="text-[13px] text-[#14242D]/60 mb-2">Price</div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[28px] font-normal text-[#14242D]">
                          ₹{currentPrice.toLocaleString()}
                        </div>
                        <div className="text-[13px] text-[#14242D]/50 line-through">
                          ₹{BASE_PRICE.toLocaleString()}
                        </div>
                      </div>
                      {couponValid && (
                        <div className="px-3 py-1 bg-[#ffb950]/20 text-[#ffb950] text-[11px] font-semibold rounded-full whitespace-nowrap">
                          {form.coupon.toUpperCase()}
                        </div>
                      )}
                    </div>
                  </div>

                  <form onSubmit={handlePayment} className="space-y-4">
                    <div className="group">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Name *"
                          className={`flex-1 bg-white border-b-2 text-[#14242D] px-0 py-3 focus:outline-none transition-colors duration-300 placeholder:text-[#14242D]/30 text-[15px] rounded-none ${errors.name ? 'border-red-400 focus:border-red-400' : form.name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(form.name.trim()) ? 'border-green-400 focus:border-green-400' : 'border-[#14242D]/10 focus:border-[#ffb950]'}`}
                        />
                        {!errors.name && form.name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(form.name.trim()) && (
                          <span className="text-green-500">✓</span>
                        )}
                      </div>
                      {errors.name && <p className="text-[12px] text-red-500 mt-1">⚠️ {errors.name}</p>}
                    </div>

                    <div className="group">
                      <div className="flex items-center gap-2">
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Email *"
                          className={`flex-1 bg-white border-b-2 text-[#14242D] px-0 py-3 focus:outline-none transition-colors duration-300 placeholder:text-[#14242D]/30 text-[15px] rounded-none ${errors.email ? 'border-red-400 focus:border-red-400' : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) && form.email ? 'border-green-400 focus:border-green-400' : 'border-[#14242D]/10 focus:border-[#ffb950]'}`}
                        />
                        {!errors.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) && form.email && (
                          <span className="text-green-500">✓</span>
                        )}
                      </div>
                      {errors.email && <p className="text-[12px] text-red-500 mt-1">⚠️ {errors.email}</p>}
                    </div>

                    <div className="group">
                      <div className="flex items-center gap-2">
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Phone Number *"
                          className={`flex-1 bg-white border-b-2 text-[#14242D] px-0 py-3 focus:outline-none transition-colors duration-300 placeholder:text-[#14242D]/30 text-[15px] rounded-none ${errors.phone ? 'border-red-400 focus:border-red-400' : /^[\d\s\-+()]{7,15}$/.test(form.phone.trim()) && /\d/.test(form.phone) ? 'border-green-400 focus:border-green-400' : 'border-[#14242D]/10 focus:border-[#ffb950]'}`}
                        />
                        {!errors.phone && /^[\d\s\-+()]{7,15}$/.test(form.phone.trim()) && /\d/.test(form.phone) && (
                          <span className="text-green-500">✓</span>
                        )}
                      </div>
                      {errors.phone && <p className="text-[12px] text-red-500 mt-1">⚠️ {errors.phone}</p>}
                    </div>

                    <div className="group">
                      <input
                        type="text"
                        name="coupon"
                        value={form.coupon}
                        onChange={handleChange}
                        placeholder="Coupon Code (Optional)"
                        className={`w-full bg-white border-b-2 text-[#14242D] px-0 py-3 focus:outline-none transition-colors duration-300 placeholder:text-[#14242D]/30 text-[15px] rounded-none ${couponValid ? 'border-green-400 focus:border-green-400' : 'border-[#14242D]/10 focus:border-[#ffb950]'}`}
                      />
                      {form.coupon && !couponValid && (
                        <p className="text-[12px] text-red-500 mt-1">Invalid coupon code</p>
                      )}
                      {couponValid && (
                        <p className="text-[12px] text-green-500 mt-1">✓ Coupon applied! Save ₹{COUPON_DISCOUNT}</p>
                      )}
                    </div>

                    {status === 'error' && (
                      <p className="text-[13px] text-red-500">Payment failed. Please try again.</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === 'submitting'}
                      whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(255,185,80,0.5)" }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full px-6 py-4 rounded-full bg-[#14242D] hover:bg-[#ffb950] text-[#F8F6F5] hover:text-[#14242D] font-normal transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] mt-6 flex items-center justify-center gap-2 group/btn"
                    >
                      {status === 'submitting' ? 'Processing...' : `Pay ₹${currentPrice.toLocaleString()}`}
                      {status !== 'submitting' && (
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </motion.button>
                  </form>

                  <p className="text-[12px] text-[#14242D]/50 text-center mt-4">
                    💳 Secure payment powered by Razorpay
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WorkshopModal;
