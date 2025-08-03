import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function Home() {
  const { t, language } = useLanguage();

  const workflowSteps = [
    { num: 1, title: t('home.hero.step1.title'), desc: t('home.hero.step1.desc') },
    { num: 2, title: t('home.hero.step2.title'), desc: t('home.hero.step2.desc') },
    { num: 3, title: t('home.hero.step3.title'), desc: t('home.hero.step3.desc') },
    { num: 4, title: t('home.hero.step4.title'), desc: t('home.hero.step4.desc') }
  ];

  const useCases = [
    {
      title: t('home.usecases.migration.title'),
      items: [
        t('home.usecases.migration.item1'),
        t('home.usecases.migration.item2'),
        t('home.usecases.migration.item3')
      ],
      visual: t('home.usecases.migration.visual'),
      gradient: 'from-[#4A90E2] to-[#00D4FF]'
    },
    {
      title: t('home.usecases.data.title'),
      items: [
        t('home.usecases.data.item1'),
        t('home.usecases.data.item2'),
        t('home.usecases.data.item3')
      ],
      visual: t('home.usecases.data.visual'),
      gradient: 'from-[#00D4FF] to-[#00FF88]'
    },
    {
      title: t('home.usecases.bugs.title'),
      items: [
        t('home.usecases.bugs.item1'),
        t('home.usecases.bugs.item2'),
        t('home.usecases.bugs.item3')
      ],
      visual: t('home.usecases.bugs.visual'),
      gradient: 'from-[#00FF88] to-[#4A90E2]'
    }
  ];

  const additionalUseCases = [
    {
      title: t('home.usecases.app.title'),
      items: [
        t('home.usecases.app.item1'),
        t('home.usecases.app.item2'),
        t('home.usecases.app.item3')
      ]
    },
    {
      title: t('home.usecases.triage.title'),
      items: [
        t('home.usecases.triage.item1'),
        t('home.usecases.triage.item2'),
        t('home.usecases.triage.item3')
      ]
    },
    {
      title: t('home.usecases.others.title'),
      items: [
        t('home.usecases.others.item1'),
        t('home.usecases.others.item2'),
        t('home.usecases.others.item3'),
        t('home.usecases.others.item4'),
        t('home.usecases.others.item5')
      ]
    }
  ];

  const integrations = [
    {
      title: t('home.tools.github.title'),
      desc: t('home.tools.github.desc')
    },
    {
      title: t('home.tools.linear.title'),
      desc: t('home.tools.linear.desc')
    },
    {
      title: t('home.tools.slack.title'),
      desc: t('home.tools.slack.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Hero Section - Enhanced Devin.ai style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F1419]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1419] via-[#1a2332] to-[#0F1419]"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#4A90E2] via-[#00D4FF] to-[#4A90E2] bg-clip-text text-transparent animate-pulse whitespace-nowrap">
                  {t('home.hero.title')}
                </span>
              </h1>
              
              <p className="text-lg text-white/80 mt-8 mb-8 max-w-lg">
                {t('home.hero.description')}
              </p>
              
              <Link
                href="/get-started"
                className="inline-block bg-gradient-to-r from-[#00FF88] to-[#00D4FF] text-black px-8 py-4 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                data-testid="hero-cta-primary"
              >
                {t('home.hero.cta')}
              </Link>

              {/* Workflow steps with enhanced styling */}
              <div className="space-y-6 mt-12">
                {workflowSteps.map((step, index) => (
                  <div key={step.num} className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#4A90E2] to-[#00D4FF] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-300">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <span className="text-white/90 font-semibold text-lg">{step.title}</span>
                      <div className="text-white/60 text-sm">{step.desc}</div>
                    </div>
                    {/* Connecting line */}
                    {index < 3 && (
                      <div className="absolute left-5 mt-10 w-0.5 h-6 bg-gradient-to-b from-[#4A90E2] to-transparent opacity-50"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - YouTube Video */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-blue-500/10 overflow-hidden">
                <div className="flex items-center space-x-2 p-4 bg-black/20">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/KUsnOibtiWQ?si=5GsW1MxggQ7T4qNY"
                    title="Hướng dẫn đăng ký khóa học HDT AI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section with enhanced styling */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl md:text-2xl text-gray-800 font-medium">
            {t('home.quote.text')}
          </p>
          <Link 
            href="/customers" 
            className="inline-block mt-4 text-[#4A90E2] hover:text-[#00D4FF] transition-colors duration-300 font-medium border-b-2 border-transparent hover:border-[#00D4FF]"
          >
            {t('home.quote.link')}
          </Link>
        </div>
      </section>

      {/* Use Cases Section with gradient cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#4A90E2] to-[#00D4FF] bg-clip-text text-transparent">
                {t('home.usecases.title')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('home.usecases.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>
                <div className={`relative bg-gradient-to-br ${useCase.gradient} rounded-xl p-8 text-white transform group-hover:scale-105 transition-all duration-300`}>
                  <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                  <ul className="space-y-2 text-white/90">
                    {useCase.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg h-32 flex items-center justify-center border border-white/20">
                    <div className="text-white/80 text-sm font-medium">{useCase.visual}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Use Cases with subtle styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {additionalUseCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#4A90E2]/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {useCase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn & Work Together Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.learn.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('home.learn.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center">
                <div className="text-gray-500 font-medium">Knowledge Learning Interface</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('home.learn.knowledge.title')}
              </h3>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center">
                <div className="text-gray-500 font-medium">Mobile Interface</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('home.learn.mobile.title')}</h3>
              <p className="text-gray-600">
                {t('home.learn.mobile.desc')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center">
                <div className="text-gray-500 font-medium">Development Environment</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('home.learn.editor.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.learn.editor.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Integration Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.tools.title')}
            </h2>
          </div>

          {/* Tool Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-16">
            {['Confluence', 'Airtable', 'Segment', 'Asana', 'Notion', 'Stripe', 'AWS', 'GitHub', 'Datadog', 'Linear', 'Databricks', 'Slack', 'Google Drive', 'Sentry', 'PostgreSQL', 'Azure', 'Snowflake', 'MongoDB'].map((tool, index) => (
              <div key={index} className="bg-gray-100 rounded-lg h-16 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                <span className="text-gray-600 font-medium text-sm">{tool}</span>
              </div>
            ))}
          </div>

          {/* Featured Integrations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{integration.title}</h3>
                <p className="text-gray-600 mb-4">{integration.desc}</p>
                <div className="bg-gray-200 rounded-lg h-32"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.customer.title1')}</h2>
          <h3 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#4A90E2] to-[#00D4FF] bg-clip-text text-transparent">
              {t('home.customer.title2')}
            </span>
          </h3>
          <Link 
            href="/customers"
            className="inline-block text-[#4A90E2] hover:text-[#00D4FF] transition-colors duration-300 font-medium text-lg border-b-2 border-transparent hover:border-[#00D4FF]"
          >
            {t('home.customer.link')}
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0F1419] text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#4A90E2] to-[#00D4FF] bg-clip-text text-transparent">
              {t('home.cta.title')}
            </span>
          </h2>
          <Link
            href="/get-started"
            className="inline-block bg-gradient-to-r from-[#00FF88] to-[#00D4FF] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            data-testid="final-cta"
          >
            {t('home.cta.button')}
          </Link>

          {/* Enterprise CTA */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">{t('home.cta.enterprise.title')}</h3>
            <h4 className="text-xl font-semibold text-white/90 mb-6">{t('home.cta.enterprise.subtitle')}</h4>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              {t('home.cta.enterprise.desc')}
            </p>
            <Link
              href="/enterprise"
              className="inline-block border-2 border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300"
            >
              {t('home.cta.enterprise.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

