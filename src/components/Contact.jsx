import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn("Telegram API variables (VITE_TELEGRAM_BOT_TOKEN, VITE_TELEGRAM_CHAT_ID) are missing. Simulating form submission.");
      setTimeout(() => {
        setStatus({
          type: 'success',
          message: `[Simulated] Thank you, ${formData.name}! Your message was simulated successfully.`
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setSubmitting(false);

        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 5000);
      }, 1200);
      return;
    }

    try {
      // Format markdown message text for Telegram
      const telegramMessage = `📬 *New Contact Form Submission*\n\n` +
                              `👤 *Name:* ${formData.name}\n` +
                              `📧 *Email:* ${formData.email}\n` +
                              `📞 *Phone:* ${formData.phone}\n` +
                              `🏷️ *Subject:* ${formData.subject}\n\n` +
                              `💬 *Message:*\n${formData.message}`;

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'Markdown'
        })
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus({
          type: 'success',
          message: `Thank you, ${formData.name}! Your message has been sent successfully.`
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error(data.description || 'Failed to send to Telegram');
      }
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your message. Please check your internet connection or try again.'
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 6000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-warmWhite z-10 px-6 md:px-12">
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purpleAccent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-purpleAccent font-semibold font-mono">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal mt-2 font-sans tracking-tight">Contact Me</h2>
          <div className="w-16 h-1 bg-purpleAccent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left panel: Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="p-8 border border-zinc-200/60 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] space-y-8">
              <h3 className="text-xl font-bold text-charcoal font-syne tracking-tight">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purpleAccent/10 border border-purpleAccent/20 flex items-center justify-center text-purpleAccent shrink-0">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div>
                    <h4 className="text-xs text-zinc-400 uppercase tracking-widest font-semibold font-mono">Location</h4>
                    <p className="text-zinc-600 font-sans mt-1">Bhavnagar, Gujarat, India</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purpleAccent/10 border border-purpleAccent/20 flex items-center justify-center text-purpleAccent shrink-0">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div>
                    <h4 className="text-xs text-zinc-400 uppercase tracking-widest font-semibold font-mono">Email</h4>
                    <a href="mailto:arjun@optenary.tech" className="text-zinc-600 hover:text-purpleAccent transition-colors font-sans mt-1 block">
                      arjun@optenary.tech
                    </a>
                  </div>
                </div>

                {/* COO Optenary info */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purpleAccent/10 border border-purpleAccent/20 flex items-center justify-center text-purpleAccent shrink-0">
                    <i className="fa-solid fa-briefcase" />
                  </div>
                  <div>
                    <h4 className="text-xs text-zinc-400 uppercase tracking-widest font-semibold font-mono">Company</h4>
                    <a href="https://optenary.tech" target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-purpleAccent transition-colors font-sans mt-1 block">
                      Optenary
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-6 border-t border-zinc-200">
                <h4 className="text-xs text-zinc-400 uppercase tracking-widest font-semibold font-mono mb-4">Connect With Me</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/arjunparmar03"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-purpleAccent hover:border-purpleAccent/40 hover:bg-purpleAccent/5 transition-all duration-300"
                  >
                    <i className="fa-brands fa-github text-lg" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-purpleAccent hover:border-purpleAccent/40 hover:bg-purpleAccent/5 transition-all duration-300"
                  >
                    <i className="fa-brands fa-linkedin text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right panel: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="p-8 border border-zinc-200/60 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs text-zinc-500 font-mono tracking-wider uppercase">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-purpleAccent focus:bg-white focus:shadow-[0_0_15px_rgba(124,90,237,0.08)] rounded-xl px-4 py-3 text-charcoal placeholder-zinc-400 text-sm font-sans focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs text-zinc-500 font-mono tracking-wider uppercase">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-purpleAccent focus:bg-white focus:shadow-[0_0_15px_rgba(124,90,237,0.08)] rounded-xl px-4 py-3 text-charcoal placeholder-zinc-400 text-sm font-sans focus:outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs text-zinc-500 font-mono tracking-wider uppercase">Mobile Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-purpleAccent focus:bg-white focus:shadow-[0_0_15px_rgba(124,90,237,0.08)] rounded-xl px-4 py-3 text-charcoal placeholder-zinc-400 text-sm font-sans focus:outline-none transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs text-zinc-500 font-mono tracking-wider uppercase">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-purpleAccent focus:bg-white focus:shadow-[0_0_15px_rgba(124,90,237,0.08)] rounded-xl px-4 py-3 text-charcoal placeholder-zinc-400 text-sm font-sans focus:outline-none transition-all duration-300"
                    placeholder="Inquiry about project..."
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs text-zinc-500 font-mono tracking-wider uppercase">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-purpleAccent focus:bg-white focus:shadow-[0_0_15px_rgba(124,90,237,0.08)] rounded-xl px-4 py-3 text-charcoal placeholder-zinc-400 text-sm font-sans focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Hi Arjun, I'd like to talk about..."
                />
              </div>

              {/* Form submit button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-charcoal text-white font-extrabold uppercase text-xs tracking-widest rounded-xl hover:bg-zinc-800 disabled:bg-zinc-300 disabled:text-zinc-500 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitting ? (
                  <>
                    Sending...
                    <i className="fa-solid fa-spinner fa-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fa-solid fa-paper-plane" />
                  </>
                )}
              </button>

              {/* Form status notification */}
              {status.message && (
                <div className={`p-4 rounded-xl text-xs font-semibold ${
                  status.type === 'success' ? 'bg-green-500/10 text-green-600 border border-green-500/20' : 'bg-red-500/10 text-red-600 border border-red-500/20'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;