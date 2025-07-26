import { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';
import hdtLogo from '@assets/Thiết kế chưa có tên_1753485335802.png';

export default function GetStarted() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    
    // Step 2: Business Needs
    companySize: '',
    industry: '',
    currentChallenges: [],
    
    // Step 3: AI Interests
    interestedServices: [],
    budget: '',
    timeline: '',
    
    // Step 4: Account Setup
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeTo: false
  });

  const companySize = [
    { value: '1-10', label: t('getStarted.companySize.1-10') },
    { value: '11-50', label: t('getStarted.companySize.11-50') },
    { value: '51-200', label: t('getStarted.companySize.51-200') },
    { value: '201-1000', label: t('getStarted.companySize.201-1000') },
    { value: '1000+', label: t('getStarted.companySize.1000+') }
  ];

  const industries = [
    { value: 'technology', label: t('getStarted.industry.technology') },
    { value: 'finance', label: t('getStarted.industry.finance') },
    { value: 'retail', label: t('getStarted.industry.retail') },
    { value: 'manufacturing', label: t('getStarted.industry.manufacturing') },
    { value: 'healthcare', label: t('getStarted.industry.healthcare') },
    { value: 'education', label: t('getStarted.industry.education') },
    { value: 'real-estate', label: t('getStarted.industry.real-estate') },
    { value: 'other', label: t('getStarted.industry.other') }
  ];

  const challenges = [
    { value: 'customer-support', label: t('getStarted.challenge.customer-support') },
    { value: 'manual-processes', label: t('getStarted.challenge.manual-processes') },
    { value: 'data-analysis', label: t('getStarted.challenge.data-analysis') },
    { value: 'content-creation', label: t('getStarted.challenge.content-creation') },
    { value: 'lead-generation', label: t('getStarted.challenge.lead-generation') },
    { value: 'cost-optimization', label: t('getStarted.challenge.cost-optimization') }
  ];

  const services = [
    { value: 'chatbot', label: t('getStarted.service.chatbot') },
    { value: 'automation', label: t('getStarted.service.automation') },
    { value: 'content-ai', label: t('getStarted.service.content-ai') },
    { value: 'data-analytics', label: t('getStarted.service.data-analytics') },
    { value: 'training', label: t('getStarted.service.training') },
    { value: 'custom-ai', label: t('getStarted.service.custom-ai') }
  ];

  const budgetRanges = [
    { value: 'under-5m', label: t('getStarted.budget.under-5m') },
    { value: '5m-15m', label: t('getStarted.budget.5m-15m') },
    { value: '15m-30m', label: t('getStarted.budget.15m-30m') },
    { value: '30m-100m', label: t('getStarted.budget.30m-100m') },
    { value: 'over-100m', label: t('getStarted.budget.over-100m') },
    { value: 'discuss', label: t('getStarted.budget.discuss') }
  ];

  const timelines = [
    { value: 'immediate', label: t('getStarted.timeline.immediate') },
    { value: '1-month', label: t('getStarted.timeline.1-month') },
    { value: '3-months', label: t('getStarted.timeline.3-months') },
    { value: '6-months', label: t('getStarted.timeline.6-months') },
    { value: 'planning', label: t('getStarted.timeline.planning') }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleMultiSelect = (category: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category as keyof typeof prev].includes(value)
        ? (prev[category as keyof typeof prev] as string[]).filter((item: string) => item !== value)
        : [...(prev[category as keyof typeof prev] as string[]), value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registration submitted:', formData);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    { number: 1, title: t('getStarted.step1.title'), icon: 'fas fa-user' },
    { number: 2, title: t('getStarted.step2.title'), icon: 'fas fa-building' },
    { number: 3, title: t('getStarted.step3.title'), icon: 'fas fa-brain' },
    { number: 4, title: t('getStarted.step4.title'), icon: 'fas fa-check' }
  ];

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img 
                src={hdtLogo} 
                alt="HDT AI Logo" 
                className="w-12 h-12 rounded-lg object-contain"
              />
              <span className="text-2xl font-bold text-slate-900">HDT AI</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {t('getStarted.title')}
            </h1>
            <p className="text-xl text-slate-600">
              {t('getStarted.subtitle')}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4 mb-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                    currentStep >= step.number 
                      ? 'bg-blue-600 border-blue-600 text-white' 
                      : 'bg-white border-slate-300 text-slate-400'
                  }`}>
                    <i className={step.icon}></i>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mx-4 ${
                      currentStep > step.number ? 'bg-blue-600' : 'bg-slate-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {steps[currentStep - 1].title}
              </h2>
              <p className="text-slate-600">
                {t('getStarted.stepOf', { current: currentStep, total: steps.length })}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-6" data-testid="step-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('getStarted.fullName')} *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="fullName"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('getStarted.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('getStarted.company')} *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('getStarted.jobTitle')}
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="jobTitle"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Business Needs */}
              {currentStep === 2 && (
                <div className="space-y-6" data-testid="step-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('getStarted.companySize')} *
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        required
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="companySize"
                      >
                        <option value="">{t('getStarted.selectCompanySize')}</option>
                        {companySize.map((size) => (
                          <option key={size.value} value={size.value}>
                            {size.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('getStarted.industry')} *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="industry"
                      >
                        <option value="">{t('getStarted.selectIndustry')}</option>
                        {industries.map((industry) => (
                          <option key={industry.value} value={industry.value}>
                            {industry.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-4">
                      {t('getStarted.currentChallenges')} *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {challenges.map((challenge) => (
                        <div key={challenge.value} className="flex items-center">
                          <input
                            type="checkbox"
                            id={challenge.value}
                            checked={formData.currentChallenges.includes(challenge.value)}
                            onChange={() => handleMultiSelect('currentChallenges', challenge.value)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                            data-testid={`challenge-${challenge.value}`}
                          />
                          <label htmlFor={challenge.value} className="ml-2 text-slate-700">
                            {challenge.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: AI Interests */}
              {currentStep === 3 && (
                <div className="space-y-6" data-testid="step-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-4">
                      {t('getStarted.interestedServices')} *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div key={service.value} className="flex items-center">
                          <input
                            type="checkbox"
                            id={service.value}
                            checked={formData.interestedServices.includes(service.value)}
                            onChange={() => handleMultiSelect('interestedServices', service.value)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                            data-testid={`service-${service.value}`}
                          />
                          <label htmlFor={service.value} className="ml-2 text-slate-700">
                            {service.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('getStarted.budget')} *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="budget"
                      >
                        <option value="">{t('getStarted.selectBudget')}</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget.value} value={budget.value}>
                            {budget.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('getStarted.timeline')} *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="timeline"
                      >
                        <option value="">{t('getStarted.selectTimeline')}</option>
                        {timelines.map((timeline) => (
                          <option key={timeline.value} value={timeline.value}>
                            {timeline.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Account Setup */}
              {currentStep === 4 && (
                <div className="space-y-6" data-testid="step-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('getStarted.password')} *
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="password"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('getStarted.confirmPassword')} *
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        data-testid="confirmPassword"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        required
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                        data-testid="agreeToTerms"
                      />
                      <label htmlFor="agreeToTerms" className="ml-2 text-slate-700">
                        {t('getStarted.agreeToTerms')} *
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="subscribeTo"
                        name="subscribeTo"
                        checked={formData.subscribeTo}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                        data-testid="subscribeTo"
                      />
                      <label htmlFor="subscribeTo" className="ml-2 text-slate-700">
                        {t('getStarted.subscribeToNewsletter')}
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    currentStep === 1
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                  data-testid="prevButton"
                >
                  {t('getStarted.back')}
                </button>
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                    data-testid="nextButton"
                  >
                    {t('getStarted.continue')}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                    data-testid="submitButton"
                  >
                    {t('getStarted.submit')}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Login Link */}
          <div className="text-center mt-8">
            <p className="text-slate-600">
              {t('getStarted.alreadyHaveAccount')}{' '}
              <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                {t('getStarted.loginNow')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

