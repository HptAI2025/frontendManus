import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/20 transition-colors"
        data-testid="language-toggle"
      >
        <i className="fas fa-globe text-slate-700"></i>
        <span className="text-sm font-medium text-slate-700">
          {language === 'vi' ? 'VI' : 'EN'}
        </span>
        <i className="fas fa-chevron-down text-xs text-slate-600"></i>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border z-50">
          <button
            onClick={() => {
              setLanguage('vi');
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-left hover:bg-slate-50 rounded-t-lg"
            data-testid="language-option-vi"
          >
            <span className="font-medium">Tiếng Việt</span>
          </button>
          <button
            onClick={() => {
              setLanguage('en');
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-left hover:bg-slate-50 rounded-b-lg"
            data-testid="language-option-en"
          >
            <span className="font-medium">English</span>
          </button>
        </div>
      )}
    </div>
  );
}
