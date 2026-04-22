'use client';

import { useState } from 'react';
import { usePersonalInfo } from '@/hooks/usePersonalInfo';
import '@/styles/contact.css';

export default function ContactPage() {
  const personalInfo = usePersonalInfo();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [contactMethod, setContactMethod] = useState<'email' | 'whatsapp'>('email');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (contactMethod === 'email') {
        // Using Formspree (free, no backend needed)
        // NOTE: Replace FORM_ID with your actual Formspree form ID from https://formspree.io/
        // Steps to setup:
        // 1. Go to https://formspree.io
        // 2. Create a new form and get your FORM_ID
        // 3. Replace 'FORM_ID' below with your actual ID
        
        const FORMSPREE_ID = 'mlgonngq'; // TODO: Update with your Formspree ID
        
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          alert('Error sending email. Please try WhatsApp or email directly.');
        }
      } else {
        // WhatsApp - create message and open WhatsApp
        const phoneNumber = personalInfo.phone.replace(/\D/g, ''); // Remove non-digits
        const message = `Hi, my name is ${formData.name}\n\nEmail: ${formData.email}\n\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        <section className="contact-header-section">
          <h1 className="contact-page-title">Get in Touch</h1>
          <p className="contact-page-subtitle">
            Have a question or proposal? I'd love to hear from you!
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Info */}
          <section className="contact-info-section">
            <h2 className="contact-section-title">Contact Information</h2>
            
            <div className="info-item">
              <span className="info-label">📧 Email</span>
              <a href={`mailto:${personalInfo.email}`} className="info-link">
                {personalInfo.email}
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">📱 Phone / WhatsApp</span>
              <a href={`https://wa.me/${personalInfo.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="info-link">
                {personalInfo.phone}
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">📍 Location</span>
              <p className="info-text">{personalInfo.address}</p>
            </div>

            <div className="info-item">
              <span className="info-label">💬 Discord</span>
              <a href={personalInfo.discord} target="_blank" rel="noopener noreferrer" className="info-link">
                Join my Discord
              </a>
            </div>
          </section>

          {/* Contact Form */}
          <section className="contact-form-section">
            <h2 className="contact-section-title">Send me a Message</h2>

            {submitted && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent. I'll get back to you soon!
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Contact Method Toggle */}
              <div className="contact-method-toggle">
                <label className="toggle-label">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={contactMethod === 'email'}
                    onChange={() => setContactMethod('email')}
                  />
                  <span className="toggle-text">📧 Email</span>
                </label>
                <label className="toggle-label">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="whatsapp"
                    checked={contactMethod === 'whatsapp'}
                    onChange={() => setContactMethod('whatsapp')}
                  />
                  <span className="toggle-text">💬 WhatsApp</span>
                </label>
              </div>

              {/* Form Fields */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  placeholder="Your message here..."
                  rows={6}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="form-submit-btn"
              >
                {loading ? 'Sending...' : `Send via ${contactMethod === 'email' ? 'Email' : 'WhatsApp'}`}
              </button>
            </form>

            {contactMethod === 'whatsapp' && (
              <p className="contact-note">
                💡 WhatsApp will open in a new window with your message pre-filled.
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
