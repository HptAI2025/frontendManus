import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/enterprise', label: t('nav.enterprise') },
    { href: '/customers', label: t('nav.customers') },
    { href: '/about-us', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-6 lg:px-8 py-3">
        <div className="flex items-center justify-center">
          {/* Menu Container với Logo bên trong - nằm giữa */}
          <div className="flex items-center bg-[#0F1419]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg h-16 px-6">
            {/* Logo trong menu container */}
            <Link href="/" className="flex items-center group whitespace-nowrap flex-shrink-0 mr-4" data-testid="logo-link">
              <img 
                src="/images/logo.png" 
                alt="HDT AI Logo" 
                className="w-24 h-24 rounded-lg object-contain transition-colors duration-200"
                style={{width: '100px', height: '100px'}}
              />
            </Link>

            {/* Separator */}
            <div className="w-px h-6 bg-white/10 mr-4"></div>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 group whitespace-nowrap ${
                    location === item.href
                      ? 'text-[#4A90E2] bg-[#4A90E2]/10'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  data-testid={`nav-${item.href.slice(1) || 'home'}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 to-[#00D4FF]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </Link>
              ))}
            </nav>

            {/* Separator */}
            <div className="w-px h-6 bg-white/10 mx-4"></div>

            {/* Language Switcher & Actions */}
            <div className="flex items-center space-x-2">
              <LanguageSwitcher />
              <Link
                href="/login"
                className="relative px-3 py-2 text-white/90 hover:text-white font-medium text-sm transition-all duration-200 group rounded-lg hover:bg-white/10 whitespace-nowrap"
                data-testid="nav-login"
              >
                <span className="relative z-10">{t('nav.login')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 to-[#00D4FF]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>
              <Link
                href="/get-started"
                className="relative bg-gradient-to-r from-[#4A90E2] to-[#00D4FF] text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 group overflow-hidden whitespace-nowrap"
                data-testid="nav-get-started"
              >
                <span className="relative z-10">{t('nav.getStarted')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#4A90E2] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1419]/98 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                  location === item.href
                    ? 'text-[#4A90E2] bg-[#4A90E2]/10'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`mobile-nav-${item.href.slice(1) || 'home'}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-4 mt-4">
              <Link
                href="/login"
                className="block px-4 py-3 text-white/90 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-login"
              >
                {t('nav.login')}
              </Link>
              <Link
                href="/get-started"
                className="block px-4 py-3 bg-gradient-to-r from-[#4A90E2] to-[#00D4FF] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-get-started"
              >
                {t('nav.getStarted')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

