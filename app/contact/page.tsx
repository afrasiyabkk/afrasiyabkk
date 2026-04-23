'use client';

import { useState } from 'react';
import { usePersonalInfo, useContactPageData } from '@/hooks/usePersonalInfo';
import '@/styles/contact.css';

export default function ContactPage() {
  const personalInfo = usePersonalInfo();
  const pageData = useContactPageData();
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
          <h1 className="contact-page-title">{pageData.title}</h1>
          <p className="contact-page-subtitle">
            {pageData.subtitle}
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Info */}
          <section className="contact-info-section">
            <h2 className="contact-section-title">{pageData.contactInfoTitle}</h2>
            
            <div className="info-item">
              <span className="info-label">{pageData.contactInfoLabels.email}</span>
              <a href={`mailto:${personalInfo.email}`} className="info-link">
                {personalInfo.email}
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">{pageData.contactInfoLabels.phone}</span>
              <a href={`https://wa.me/${personalInfo.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="info-link">
                {personalInfo.phone}
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">{pageData.contactInfoLabels.location}</span>
              <p className="info-text">{personalInfo.address}</p>
            </div>

            <div className="info-item">
              <span className="info-label">{pageData.contactInfoLabels.discord}</span>
              <a href={personalInfo.discord} target="_blank" rel="noopener noreferrer" className="info-link">
                {pageData.discordLinkText}
              </a>
            </div>
          </section>

          {/* Contact Form */}
          <section className="contact-form-section">
            <h2 className="contact-section-title">{pageData.formSectionTitle}</h2>

            {submitted && (
              <div className="success-message">
                {pageData.successMessage}
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
                  <span className="toggle-text">{pageData.contactMethodOptions.email}</span>
                </label>
                <label className="toggle-label">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="whatsapp"
                    checked={contactMethod === 'whatsapp'}
                    onChange={() => setContactMethod('whatsapp')}
                  />
                  <span className="toggle-text">{pageData.contactMethodOptions.whatsapp}</span>
                </label>
              </div>

              {/* Form Fields */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {pageData.formLabels.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder={pageData.formPlaceholders.name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {pageData.formLabels.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder={pageData.formPlaceholders.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  {pageData.formLabels.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder={pageData.formPlaceholders.subject}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {pageData.formLabels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  placeholder={pageData.formPlaceholders.message}
                  rows={6}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="form-submit-btn"
              >
                {loading ? pageData.submitButtonText.sending : (contactMethod === 'email' ? pageData.submitButtonText.email : pageData.submitButtonText.whatsapp)}
              </button>
            </form>

            {contactMethod === 'whatsapp' && (
              <p className="contact-note">
                {pageData.whatsappNote}
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
