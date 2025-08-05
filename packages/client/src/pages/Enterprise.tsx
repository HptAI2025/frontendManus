import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function Enterprise() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('enterprise.hero.title')}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              {t('enterprise.hero.description')}
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              data-testid="enterprise-contact-cta"
            >
              {t('enterprise.hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                {t('enterprise.customization.title')}
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                {t('enterprise.customization.description')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start" data-testid="enterprise-feature-1">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>{t('enterprise.customization.feature1')}</span>
                </li>
                <li className="flex items-start" data-testid="enterprise-feature-2">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>{t('enterprise.customization.feature2')}</span>
                </li>
                <li className="flex items-start" data-testid="enterprise-feature-3">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>{t('enterprise.customization.feature3')}</span>
                </li>
                <li className="flex items-start" data-testid="enterprise-feature-4">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>{t('enterprise.customization.feature4')}</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Enterprise team collaboration"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              {t('enterprise.usecases.title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('enterprise.usecases.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg" data-testid="use-case-1">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-building text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {t('enterprise.usecases.banking.title')}
              </h3>
              <p className="text-slate-600">
                {t('enterprise.usecases.banking.description')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" data-testid="use-case-2">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-shopping-cart text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {t('enterprise.usecases.ecommerce.title')}
              </h3>
              <p className="text-slate-600">
                {t('enterprise.usecases.ecommerce.description')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" data-testid="use-case-3">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-industry text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {t('enterprise.usecases.manufacturing.title')}
              </h3>
              <p className="text-slate-600">
                {t('enterprise.usecases.manufacturing.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              {t('enterprise.process.title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('enterprise.process.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="implementation-step-1">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {t('enterprise.process.step1.title')}
              </h3>
              <p className="text-slate-600">
                {t('enterprise.process.step1.description')}
              </p>
            </div>

            <div className="text-center" data-testid="implementation-step-2">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {t('enterprise.process.step2.title')}
              </h3>
              <p className="text-slate-600">
                {t('enterprise.process.step2.description')}
              </p>
            </div>

            <div className="text-center" data-testid="implementation-step-3">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {t('enterprise.process.step3.title')}
              </h3>
              <p className="text-slate-600">
                {t('enterprise.process.step3.description')}
              </p>
            </div>

            <div className="text-center" data-testid="implementation-step-4">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {t('enterprise.process.step4.title')}
              </h3>
              <p className="text-slate-600">
                {t('enterprise.process.step4.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('enterprise.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('enterprise.cta.description')}
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover-lift"
            data-testid="enterprise-final-cta"
          >
            {t('enterprise.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}

