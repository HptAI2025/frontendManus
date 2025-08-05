import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: 'fas fa-chart-line',
      title: t('about.values.efficiency.title'),
      description: t('about.values.efficiency.description'),
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'fas fa-handshake',
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'fas fa-users',
      title: t('about.values.humancentered.title'),
      description: t('about.values.humancentered.description'),
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const team = [
    {
      name: 'Hoàng Anh Tú',
      title: t('about.team.hoang_anh_tu.title'),
      image: '/images/tu_new.jpg',
      description: t('about.team.hoang_anh_tu.description'),
      linkedin: '#'
    },
    {
      name: 'Hoàng Phú Thịnh',
      title: t('about.team.hoang_phu_thinh.title'),
      image: '/images/Avat.png',
      description: t('about.team.hoang_phu_thinh.description'),
      linkedin: '#'
    },
    {
      name: 'Đinh Văn Hiếu',
      title: t('about.team.dinh_van_hieu.title'),
      image: '/images/hieudepgiai.jpg',
      description: t('about.team.dinh_van_hieu.description'),
      linkedin: '#'
    }
  ];

  const timeline = [
    {
      year: '2022',
      title: t('about.timeline.2022.title'),
      description: t('about.timeline.2022.description')
    },
    {
      year: '2023',
      title: t('about.timeline.2023.title'),
      description: t('about.timeline.2023.description')
    },
    {
      year: '2024',
      title: t('about.timeline.2024.title'),
      description: t('about.timeline.2024.description')
    },
    {
      year: '2025',
      title: t('about.timeline.2025.title'),
      description: t('about.timeline.2025.description')
    }
  ];

  const businessAreas = [
    {
      icon: 'fas fa-cogs',
      title: t('about.business.consulting.title'),
      description: t('about.business.consulting.description'),
      features: [
        t('about.business.consulting.feature1'),
        t('about.business.consulting.feature2'),
        t('about.business.consulting.feature3')
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'fas fa-laptop-code',
      title: t('about.business.development.title'),
      description: t('about.business.development.description'),
      features: [
        t('about.business.development.feature1'),
        t('about.business.development.feature2'),
        t('about.business.development.feature3')
      ],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: t('about.business.training.title'),
      description: t('about.business.training.description'),
      features: [
        t('about.business.training.feature1'),
        t('about.business.training.feature2'),
        t('about.business.training.feature3')
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'fas fa-code-branch',
      title: t('about.business.research.title'),
      description: t('about.business.research.description'),
      features: [
        t('about.business.research.feature1'),
        t('about.business.research.feature2'),
        t('about.business.research.feature3')
      ],
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                {t('about.hero.title')}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {t('company.mission')}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{t('about.hero.vision.title')}</h3>
                  <p className="text-slate-600">{t('company.vision')}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{t('about.hero.mission.title')}</h3>
                  <p className="text-slate-600">{t('company.mission')}</p>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="HDT AI office with modern technology"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('about.values.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group" data-testid={`value-${index + 1}`}>
                <div className={`w-20 h-20 ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`${value.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              {t('about.timeline.title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('about.timeline.description')}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} data-testid={`timeline-${index + 1}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h3>
                      <p className="text-slate-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('about.team.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group" data-testid={`team-member-${index + 1}`}>
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <a
                      href={member.linkedin}
                      className="text-white hover:text-blue-300 transition-colors"
                      data-testid={`team-member-${index + 1}-linkedin`}
                    >
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-4">{member.title}</div>
                <p className="text-slate-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              {t('about.business.title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('about.business.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg" data-testid={`business-area-${index + 1}`}>
                <div className={`w-16 h-16 ${area.color} rounded-xl flex items-center justify-center mb-6`}>
                  <i className={`${area.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 mb-4">
                  {area.description}
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('about.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/careers"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover-lift"
              data-testid="about-careers-cta"
            >
              {t('about.cta.joinTeam')}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
              data-testid="about-contact-cta"
            >
              {t('about.cta.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
