import { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function Docs() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('getting-started');

  const documentationCategories = [
    {
      id: 'getting-started',
      name: 'Bắt đầu',
      icon: 'fas fa-play-circle',
      count: 5
    },
    {
      id: 'api-reference',
      name: 'API Reference',
      icon: 'fas fa-code',
      count: 12
    },
    {
      id: 'integrations',
      name: 'Tích hợp',
      icon: 'fas fa-puzzle-piece',
      count: 8
    },
    {
      id: 'tutorials',
      name: 'Hướng dẫn',
      icon: 'fas fa-graduation-cap',
      count: 15
    },
    {
      id: 'best-practices',
      name: 'Best Practices',
      icon: 'fas fa-star',
      count: 6
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      icon: 'fas fa-tools',
      count: 10
    }
  ];

  const documents = {
    'getting-started': [
      {
        title: 'Giới thiệu HDT AI Platform',
        description: 'Tổng quan về nền tảng AI và các tính năng chính',
        readTime: '5 phút',
        updated: '2024-01-15'
      },
      {
        title: 'Tạo tài khoản và thiết lập ban đầu',
        description: 'Hướng dẫn đăng ký và cấu hình tài khoản HDT AI',
        readTime: '3 phút',
        updated: '2024-01-15'
      },
      {
        title: 'Dashboard và giao diện người dùng',
        description: 'Làm quen với giao diện và các chức năng cơ bản',
        readTime: '7 phút',
        updated: '2024-01-14'
      },
      {
        title: 'Tạo chatbot đầu tiên',
        description: 'Hướng dẫn từng bước tạo chatbot AI đơn giản',
        readTime: '15 phút',
        updated: '2024-01-14'
      },
      {
        title: 'Quản lý và theo dõi hiệu suất',
        description: 'Cách theo dõi và tối ưu hóa hiệu suất AI',
        readTime: '10 phút',
        updated: '2024-01-13'
      }
    ],
    'api-reference': [
      {
        title: 'Authentication API',
        description: 'Hướng dẫn xác thực và quản lý token API',
        readTime: '8 phút',
        updated: '2024-01-15'
      },
      {
        title: 'Chatbot API',
        description: 'API endpoints cho quản lý và tương tác chatbot',
        readTime: '12 phút',
        updated: '2024-01-15'
      },
      {
        title: 'Analytics API',
        description: 'Truy cập dữ liệu phân tích và báo cáo',
        readTime: '10 phút',
        updated: '2024-01-14'
      }
    ],
    'integrations': [
      {
        title: 'Tích hợp với Facebook Messenger',
        description: 'Kết nối chatbot với Facebook Messenger',
        readTime: '12 phút',
        updated: '2024-01-15'
      },
      {
        title: 'Tích hợp với Zalo',
        description: 'Hướng dẫn tích hợp với Zalo Official Account',
        readTime: '10 phút',
        updated: '2024-01-14'
      },
      {
        title: 'Website Widget',
        description: 'Nhúng chatbot vào website của bạn',
        readTime: '8 phút',
        updated: '2024-01-14'
      }
    ]
  };

  const getCurrentDocs = () => {
    return documents[selectedCategory as keyof typeof documents] || [];
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Tài liệu HDT AI
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Hướng dẫn chi tiết, API reference và tài liệu kỹ thuật để giúp bạn tận dụng tối đa sức mạnh của HDT AI
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm tài liệu..."
                className="w-full px-6 py-4 pr-12 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                data-testid="docs-search"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <i className="fas fa-search text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Danh mục tài liệu</h3>
                <nav className="space-y-2">
                  {documentationCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-slate-200 text-slate-700'
                      }`}
                      data-testid={`docs-category-${category.id}`}
                    >
                      <div className="flex items-center">
                        <i className={`${category.icon} mr-3`}></i>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-300 text-slate-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </nav>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Cần hỗ trợ?</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Không tìm thấy thông tin bạn cần?
                  </p>
                  <Link
                    href="/contact"
                    className="text-blue-600 font-semibold hover:text-blue-700 text-sm"
                    data-testid="docs-contact-support"
                  >
                    Liên hệ hỗ trợ →
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {documentationCategories.find(cat => cat.id === selectedCategory)?.name}
                </h2>
                <p className="text-slate-600">
                  {selectedCategory === 'getting-started' && 'Tài liệu hướng dẫn cơ bản để bắt đầu với HDT AI'}
                  {selectedCategory === 'api-reference' && 'Tài liệu kỹ thuật chi tiết về API endpoints và usage'}
                  {selectedCategory === 'integrations' && 'Hướng dẫn tích hợp HDT AI với các nền tảng khác'}
                  {selectedCategory === 'tutorials' && 'Hướng dẫn thực hành từng bước cho các use cases phổ biến'}
                  {selectedCategory === 'best-practices' && 'Các phương pháp hay nhất và kinh nghiệm thực tế'}
                  {selectedCategory === 'troubleshooting' && 'Giải pháp cho các vấn đề thường gặp'}
                </p>
              </div>

              {/* Documents List */}
              <div className="space-y-6">
                {getCurrentDocs().map((doc, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer" data-testid={`doc-item-${index + 1}`}>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        {doc.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <i className="fas fa-clock mr-1"></i>
                          {doc.readTime}
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-calendar mr-1"></i>
                          {doc.updated}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4">{doc.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold hover:text-blue-700">
                        Đọc tài liệu →
                      </span>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-slate-400 hover:text-slate-600" title="Bookmark">
                          <i className="fas fa-bookmark"></i>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-600" title="Share">
                          <i className="fas fa-share"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-video text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Video Tutorials</h3>
                  <p className="text-slate-600 mb-4">
                    Học qua video hướng dẫn trực quan và dễ hiểu
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700">
                    Xem video →
                  </button>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-comments text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Community Forum</h3>
                  <p className="text-slate-600 mb-4">
                    Tham gia cộng đồng để thảo luận và chia sẻ kinh nghiệm
                  </p>
                  <button className="text-green-600 font-semibold hover:text-green-700">
                    Tham gia →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Tài liệu phổ biến
            </h2>
            <p className="text-slate-600">
              Những tài liệu được truy cập nhiều nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tạo chatbot đầu tiên',
                views: '15.2k',
                category: 'Getting Started',
                icon: 'fas fa-robot'
              },
              {
                title: 'API Authentication',
                views: '8.7k', 
                category: 'API Reference',
                icon: 'fas fa-key'
              },
              {
                title: 'Tích hợp Facebook Messenger',
                views: '12.1k',
                category: 'Integrations',
                icon: 'fab fa-facebook-messenger'
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift cursor-pointer" data-testid={`popular-doc-${index + 1}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className={`${article.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full">
                    {article.views} views
                  </span>
                </div>
                <span className="text-blue-600 text-sm font-semibold">{article.category}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-4">{article.title}</h3>
                <span className="text-blue-600 font-semibold hover:text-blue-700">
                  Đọc ngay →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
