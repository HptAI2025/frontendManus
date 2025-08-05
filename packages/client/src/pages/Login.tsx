import { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function Login() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="py-24">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img 
                src="/images/logo.png" 
                alt="HDT AI Logo" 
                className="w-[150px] h-[150px] rounded-lg object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Đăng nhập vào tài khoản
            </h1>
            <p className="text-slate-600">
              Chào mừng bạn quay trở lại với HDT AI
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Nhập email của bạn"
                  data-testid="login-email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Nhập mật khẩu"
                  data-testid="login-password"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                    data-testid="login-remember"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-slate-700">
                    Ghi nhớ đăng nhập
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700" data-testid="forgot-password-link">
                  Quên mật khẩu?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                data-testid="login-submit"
              >
                Đăng nhập
              </button>
            </form>

            {/* Divider */}
            <div className="my-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-slate-500">Hoặc đăng nhập với</span>
                </div>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors" data-testid="login-google">
                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5 mr-2" />
                <span className="text-slate-700 font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors" data-testid="login-microsoft">
                <i className="fab fa-microsoft text-blue-600 mr-2"></i>
                <span className="text-slate-700 font-medium">Microsoft</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-slate-600">
                Chưa có tài khoản?{' '}
                <Link href="/get-started" className="text-blue-600 font-semibold hover:text-blue-700" data-testid="signup-link">
                  Đăng ký miễn phí
                </Link>
              </p>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-8 bg-blue-50 rounded-lg p-4">
            <div className="flex items-start">
              <i className="fas fa-shield-alt text-blue-600 mr-3 mt-1"></i>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Bảo mật thông tin</h3>
                <p className="text-blue-700 text-sm">
                  Thông tin đăng nhập của bạn được bảo vệ bằng mã hóa SSL 256-bit và các biện pháp bảo mật tiên tiến.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Tại sao chọn HDT AI?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Hàng nghìn doanh nghiệp đã tin tưởng HDT AI để chuyển đổi số và tăng hiệu suất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="login-feature-1">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Triển khai nhanh chóng</h3>
              <p className="text-slate-600">
                Bắt đầu sử dụng AI chỉ trong vài phút với giao diện thân thiện
              </p>
            </div>

            <div className="text-center" data-testid="login-feature-2">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bảo mật tuyệt đối</h3>
              <p className="text-slate-600">
                Dữ liệu được bảo vệ với tiêu chuẩn bảo mật cấp ngân hàng
              </p>
            </div>

            <div className="text-center" data-testid="login-feature-3">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headset text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hỗ trợ 24/7</h3>
              <p className="text-slate-600">
                Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ khi bạn cần
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
