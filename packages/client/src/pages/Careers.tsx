import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function Careers() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: 'fas fa-chart-line',
      title: 'Phát triển sự nghiệp',
      description: 'Cơ hội học hỏi và phát triển với các dự án AI tiên tiến nhất',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'fas fa-users',
      title: 'Đội ngũ tài năng',
      description: 'Làm việc cùng những chuyên gia AI hàng đầu trong ngành',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Work-life balance',
      description: 'Môi trường làm việc linh hoạt, hỗ trợ cân bằng cuộc sống',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Đào tạo liên tục',
      description: 'Ngân sách đào tạo và tham gia các hội nghị công nghệ quốc tế',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: 'fas fa-heart',
      title: 'Bảo hiểm sức khỏe',
      description: 'Gói bảo hiểm sức khỏe toàn diện cho nhân viên và gia đình',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Cổ phần công ty',
      description: 'Cơ hội sở hữu cổ phần và chia sẻ thành công của công ty',
      color: 'bg-cyan-100 text-cyan-600'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Hà Nội',
      type: 'Full-time',
      experience: '3+ năm',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning'],
      description: 'Phát triển và triển khai các mô hình AI cho sản phẩm của công ty.'
    },
    {
      title: 'Product Manager - AI Solutions',
      department: 'Product',
      location: 'Hà Nội / Remote',
      type: 'Full-time',
      experience: '2+ năm',
      skills: ['Product Management', 'AI/ML', 'Data Analysis', 'User Research'],
      description: 'Quản lý và phát triển roadmap sản phẩm AI, làm việc với đội kỹ thuật.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Hà Nội',
      type: 'Full-time',
      experience: '2+ năm',
      skills: ['Docker', 'Kubernetes', 'AWS/GCP', 'CI/CD', 'Monitoring'],
      description: 'Xây dựng và duy trì hạ tầng cloud cho các ứng dụng AI quy mô lớn.'
    },
    {
      title: 'Business Development Executive',
      department: 'Sales',
      location: 'Hà Nội / TP.HCM',
      type: 'Full-time',
      experience: '1+ năm',
      skills: ['B2B Sales', 'Relationship Building', 'Presentation', 'CRM'],
      description: 'Phát triển quan hệ khách hàng và mở rộng thị trường cho giải pháp AI.'
    }
  ];

  const cultureValues = [
    {
      title: 'Đổi mới sáng tạo',
      description: 'Khuyến khích thử nghiệm, học hỏi từ thất bại và tìm kiếm giải pháp mới.',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Làm việc nhóm',
      description: 'Tin tưởng, hỗ trợ lẫn nhau và cùng nhau đạt được mục tiêu chung.',
      icon: 'fas fa-handshake'
    },
    {
      title: 'Chất lượng cao',
      description: 'Cam kết mang đến những sản phẩm và dịch vụ tốt nhất cho khách hàng.',
      icon: 'fas fa-star'
    },
    {
      title: 'Học hỏi liên tục',
      description: 'Luôn cập nhật kiến thức mới và phát triển kỹ năng chuyên môn.',
      icon: 'fas fa-book'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Tham gia đội ngũ HDT AI
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Cùng chúng tôi xây dựng tương lai AI và mang lại giá trị thực tiễn cho doanh nghiệp Việt Nam
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#open-positions"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              data-testid="careers-view-positions"
            >
              Xem vị trí tuyển dụng
            </a>
            <Link
              href="/about-us"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              data-testid="careers-learn-more"
            >
              Tìm hiểu về chúng tôi
            </Link>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Văn hóa công ty
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Con người là trung tâm của HDT AI. Chúng tôi tin rằng AI chỉ có giá trị khi phục vụ con người.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {cultureValues.map((value, index) => (
              <div key={index} className="text-center" data-testid={`culture-value-${index + 1}`}>
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Cam kết của HDT AI với nhân viên
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Phát triển nghề nghiệp</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Lộ trình phát triển cá nhân rõ ràng</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Mentoring từ các chuyên gia senior</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Cơ hội tham gia các dự án thách thức</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Môi trường làm việc</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Không gian làm việc hiện đại, sáng tạo</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Flexible working hours và remote work</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Đồng hành lâu dài với mục tiêu cá nhân</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Quyền lợi nhân viên
            </h2>
            <p className="text-xl text-slate-600">
              Chúng tôi đầu tư vào nhân viên để họ có thể phát huy hết tiềm năng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift" data-testid={`benefit-${index + 1}`}>
                <div className={`w-16 h-16 ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                  <i className={`${benefit.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Vị trí đang tuyển dụng
            </h2>
            <p className="text-xl text-slate-600">
              Tìm kiếm cơ hội phù hợp với kỹ năng và đam mê của bạn
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow" data-testid={`position-${index + 1}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">{position.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 mb-6">{position.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-slate-500">Địa điểm</div>
                        <div className="font-semibold text-slate-900">{position.location}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Hình thức</div>
                        <div className="font-semibold text-slate-900">{position.type}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Kinh nghiệm</div>
                        <div className="font-semibold text-slate-900">{position.experience}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Cập nhật</div>
                        <div className="font-semibold text-slate-900">1 tuần trước</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-slate-500 mb-2">Kỹ năng yêu cầu:</div>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-white text-slate-700 text-sm px-3 py-1 rounded-full border">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <Link
                      href="/contact"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors mb-4"
                      data-testid={`apply-position-${index + 1}`}
                    >
                      Ứng tuyển ngay
                    </Link>
                    <button className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-slate-400 transition-colors">
                      Lưu việc làm
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Không tìm thấy vị trí phù hợp? Chúng tôi luôn chào đón những tài năng xuất sắc.
            </p>
            <Link
              href="/contact"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              data-testid="careers-general-application"
            >
              Gửi hồ sơ chung →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sẵn sàng thay đổi tương lai cùng HDT AI?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Gia nhập đội ngũ và cùng chúng tôi định hình tương lai của trí tuệ nhân tạo
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover-lift"
            data-testid="careers-final-cta"
          >
            Ứng tuyển ngay
          </Link>
        </div>
      </section>
    </div>
  );
}
