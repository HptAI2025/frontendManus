import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    serviceType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: t('contact.info.email.title'),
      content: 'contact@hdtai.com',
      description: t('contact.info.email.description')
    },
    {
      icon: 'fas fa-phone',
      title: t('contact.info.phone.title'),
      content: '+84 123 456 789',
      description: t('contact.info.phone.description')
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: t('contact.info.address.title'),
      content: t('contact.info.address.content'),
      description: t('contact.info.address.description')
    },
    {
      icon: 'fas fa-clock',
      title: t('contact.info.hours.title'),
      content: t('contact.info.hours.content'),
      description: t('contact.info.hours.description')
    }
  ];

  const serviceTypes = [
    { value: 'general', label: t('contact.form.serviceType.general') },
    { value: 'chatbot', label: t('contact.form.serviceType.chatbot') },
    { value: 'automation', label: t('contact.form.serviceType.automation') },
    { value: 'training', label: t('contact.form.serviceType.training') },
    { value: 'enterprise', label: t('contact.form.serviceType.enterprise') },
    { value: 'partnership', label: t('contact.form.serviceType.partnership') },
    { value: 'support', label: t('contact.form.serviceType.support') }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            {t('contact.hero.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('contact.hero.description')}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {t('contact.form.title')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="contact-name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="contact-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="contact-company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('contact.form.serviceTypeLabel')}
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="contact-service-type"
                      >
                        {serviceTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      data-testid="contact-subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      data-testid="contact-message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                    data-testid="contact-submit"
                  >
                    {t('contact.form.submit')}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {t('contact.info.title')}
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start" data-testid={`contact-info-${index + 1}`}>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <i className={`${info.icon} text-blue-600`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                        <p className="text-slate-900 mb-1">{info.content}</p>
                        <p className="text-slate-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">{t('contact.social.title')}</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors" data-testid="social-facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors" data-testid="social-linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors" data-testid="social-twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors" data-testid="social-youtube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <i className="fas fa-clock text-green-600 mr-2"></i>
                  <h4 className="font-semibold text-green-900">{t('contact.responseTime.title')}</h4>
                </div>
                <p className="text-green-800 text-sm">
                  {t('contact.responseTime.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              {t('contact.faq.title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('contact.faq.description')}
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm" data-testid="faq-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {t('contact.faq.q1.question')}
              </h3>
              <p className="text-slate-600">
                {t('contact.faq.q1.answer')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm" data-testid="faq-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {t('contact.faq.q2.question')}
              </h3>
              <p className="text-slate-600">
                {t('contact.faq.q2.answer')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm" data-testid="faq-3">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {t('contact.faq.q3.question')}
              </h3>
              <p className="text-slate-600">
                {t('contact.faq.q3.answer')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm" data-testid="faq-4">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {t('contact.faq.q4.question')}
              </h3>
              <p className="text-slate-600">
                {t('contact.faq.q4.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('contact.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('contact.cta.description')}
          </p>
          <a
            href="tel:+84123456789"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover-lift inline-block"
            data-testid="contact-phone-cta"
          >
            <i className="fas fa-phone mr-2"></i>
            {t('contact.cta.phone')}
          </a>
        </div>
      </section>
    </div>
  );
}
