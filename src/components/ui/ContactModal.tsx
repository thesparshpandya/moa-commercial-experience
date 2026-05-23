'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
}

export default function ContactModal({ isOpen, onClose, subject = 'Partnership Inquiry' }: ContactModalProps) {
  const [form, setForm] = useState({ name: '', company: '', email: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setForm({ name: '', company: '', email: '', type: '', message: '' });
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-black-card border-gold-subtle w-full max-w-[580px] mx-4"
          >
            {/* Gold top accent */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
            
            <div className="p-8 md:p-12">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 cursor-none text-silver-dim hover:text-gold-light transition-colors duration-200 text-2xl leading-none"
              >
                ×
              </button>

              {!submitted ? (
                <>
                  <div className="label-tag mb-4">{subject}</div>
                  <h2 className="font-display text-3xl font-light text-platinum mb-2">
                    Start the Conversation
                  </h2>
                  <p className="text-silver-dim text-sm mb-8">
                    Our partnership team responds within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="label-tag" style={{ fontSize: '0.55rem' }}>Full Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          placeholder="Alex Johnson"
                          className="bg-black-mid border border-gold/10 text-platinum text-sm px-4 py-3 outline-none focus:border-gold/40 transition-colors duration-200 placeholder:text-silver-dim/50 cursor-none"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="label-tag" style={{ fontSize: '0.55rem' }}>Company</label>
                        <input
                          type="text"
                          required
                          value={form.company}
                          onChange={e => setForm({...form, company: e.target.value})}
                          placeholder="Brand Name"
                          className="bg-black-mid border border-gold/10 text-platinum text-sm px-4 py-3 outline-none focus:border-gold/40 transition-colors duration-200 placeholder:text-silver-dim/50 cursor-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="label-tag" style={{ fontSize: '0.55rem' }}>Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        placeholder="alex@brand.com"
                        className="bg-black-mid border border-gold/10 text-platinum text-sm px-4 py-3 outline-none focus:border-gold/40 transition-colors duration-200 placeholder:text-silver-dim/50 cursor-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="label-tag" style={{ fontSize: '0.55rem' }}>Partnership Type</label>
                      <select
                        required
                        value={form.type}
                        onChange={e => setForm({...form, type: e.target.value})}
                        className="bg-black-mid border border-gold/10 text-platinum text-sm px-4 py-3 outline-none focus:border-gold/40 transition-colors duration-200 cursor-none appearance-none"
                      >
                        <option value="" className="bg-black-mid">Select one...</option>
                        <option value="leasing" className="bg-black-mid">Retail Leasing</option>
                        <option value="sponsorship" className="bg-black-mid">Brand Sponsorship</option>
                        <option value="events" className="bg-black-mid">Event Booking</option>
                        <option value="popup" className="bg-black-mid">Pop-Up Activation</option>
                        <option value="other" className="bg-black-mid">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="label-tag" style={{ fontSize: '0.55rem' }}>Message</label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        placeholder="Tell us about your brand and goals..."
                        className="bg-black-mid border border-gold/10 text-platinum text-sm px-4 py-3 outline-none focus:border-gold/40 transition-colors duration-200 placeholder:text-silver-dim/50 cursor-none resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center mt-2">
                      <span>Submit Partnership Request</span>
                      <span>→</span>
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 text-center"
                >
                  <div className="text-5xl mb-6">✦</div>
                  <h3 className="font-display text-3xl font-light gold-gradient mb-3">
                    Request Received
                  </h3>
                  <p className="text-silver-dim text-sm">
                    Our team will be in touch within 24 hours to discuss your partnership.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
