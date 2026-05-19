import React from 'react';
import { Instagram, Music } from 'lucide-react';
import { useAppContext } from '../App';
import { translations } from '../i18n';

const Footer: React.FC = () => {
  const { isDark, language } = useAppContext();
  const t = translations[language];

  const currentYear = new Date().getFullYear();
  const ts = isDark ? 'text-gray-400' : 'text-gray-600';
  const iconColor = isDark ? '#9ca3af' : '#6b7280';

  return (
    <footer className={`border-t ${isDark ? 'border-gray-800 bg-[#121212]' : 'border-gray-100 bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className={`text-sm font-light ${ts}`}>
              © {currentYear} {t.footer.rights}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="#"
              className={`p-3 rounded-lg transition-colors duration-200 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              aria-label={language === 'zh' ? '小红书' : 'Xiaohongshu'}
              style={{ color: iconColor }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0052FF'}
              onMouseLeave={(e) => e.currentTarget.style.color = iconColor}
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className={`p-3 rounded-lg transition-colors duration-200 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              aria-label={language === 'zh' ? '抖音' : 'Douyin'}
              style={{ color: iconColor }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0052FF'}
              onMouseLeave={(e) => e.currentTarget.style.color = iconColor}
            >
              <Music size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
