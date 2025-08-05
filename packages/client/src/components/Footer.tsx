import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';
import hdtLogo from '@assets/Thiết kế chưa có tên_1753485335802.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={hdtLogo} 
                alt="HDT AI Logo" 
                className="w-10 h-10 rounded-lg object-contain"
              />
              <span className="text-2xl font-bold">HDT AI</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              {t('footer.company.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" data-testid="social-facebook">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" data-testid="social-linkedin">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" data-testid="social-twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" data-testid="social-youtube">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-3">
              <li><Link href="/about-us" className="text-slate-300 hover:text-white transition-colors" data-testid="footer-about">{t('nav.about')}</Link></li>
              <li><Link href="/pricing" className="text-slate-300 hover:text-white transition-colors" data-testid="footer-pricing">{t('nav.pricing')}</Link></li>
              <li><Link href="/customers" className="text-slate-300 hover:text-white transition-colors" data-testid="footer-customers">{t('nav.customers')}</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-white transition-colors" data-testid="footer-blog">{t('nav.blog')}</Link></li>
              <li><Link href="/careers" className="text-slate-300 hover:text-white transition-colors" data-testid="footer-careers">{t('nav.careers')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fas fa-envelope text-slate-400 mr-3"></i>
                <span className="text-slate-300">contact@hdtai.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-slate-400 mr-3"></i>
                <span className="text-slate-300">+84 123 456 789</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-slate-400 mr-3 mt-1"></i>
                <span className="text-slate-300">{t('footer.contact.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors" data-testid="footer-privacy">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors" data-testid="footer-terms">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

