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
          message: `⚠️ [Simulation Mode] Thank you, ${formData.name}! Message simulated successfully because VITE_TELEGRAM credentials are not configured on your hosting dashboard.`
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setSubmitting(false);

        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 8000);
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
          message: `Thank you, ${formData.name}! Your message has been sent to Telegram successfully.`
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error(data.description || 'Failed to send to Telegram');
      }
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      setStatus({
        type: 'error',
        message: `Error sending message: ${error.message || 'Something went wrong. Please check your credentials and try again.'}`
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

        <div className="max-w-2xl mx-auto">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="p-8 border border-white/10 bg-[#0C0C0E] shadow-[0_12px_40px_rgba(0,0,0,0.15)] rounded-[24px] space-y-6 text-left">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-white font-sans">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121214] border border-white/10 focus:border-white rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-sm font-sans focus:outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-white font-sans">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121214] border border-white/10 focus:border-white rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-sm font-sans focus:outline-none transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-white font-sans">Mobile Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121214] border border-white/10 focus:border-white rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-sm font-sans focus:outline-none transition-all duration-300"
                    placeholder="Enter your mobile number"
                  />
                </div>
                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-white font-sans">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121214] border border-white/10 focus:border-white rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-sm font-sans focus:outline-none transition-all duration-300"
                    placeholder="Enter project subject"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-white font-sans">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#121214] border border-white/10 focus:border-white rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-sm font-sans focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project"
                />
              </div>

              {/* Form submit button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-white text-black font-extrabold text-sm rounded-xl hover:bg-[#EAE9E4] disabled:bg-zinc-800 disabled:text-zinc-500 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer select-none"
              >
                {submitting ? (
                  <>
                    Sending...
                    <i className="fa-solid fa-spinner fa-spin animate-spin" />
                  </>
                ) : (
                  <>
                    Submit
                    <i className="fa-solid fa-paper-plane text-xs" />
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