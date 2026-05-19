import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
  Globe,
} from 'lucide-react';
import { scrollToSection } from '../utils';
import { useAppContext } from '../App';
import { translations } from '../i18n';

const Navbar: React.FC = () => {
  const { isDark, toggleTheme, language, toggleLanguage, activeSection } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'internships', label: t.nav.internships },
    { id: 'campus', label: t.nav.campus },
    { id: 'portfolio', label: language === 'zh' ? '作品展示' : 'Portfolio' },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/用户研究的吴磊_西安交通大学_13152863007.pdf';
    link.download = '用户研究的吴磊_西安交通大学_13152863007.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDark ? 'bg-[#121212]/95' : 'bg-white/95'} backdrop-blur-md border-b border-gray-200 dark:border-gray-700`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src={isDark ? '/logo-light.png' : '/logo-dark.png'}
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-[#0052FF] bg-[#E8F0FF]'
                      : `${isDark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-[#0052FF]' : 'hover:bg-gray-100 text-gray-600 hover:text-[#0052FF]'}`}
              aria-label="Toggle Language"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-[#0052FF]' : 'hover:bg-gray-100 text-gray-600 hover:text-[#0052FF]'}`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={handleDownloadResume}
              className="shrink-0 flex items-center whitespace-nowrap bg-[#0052FF] hover:bg-[#0044cc] text-white text-sm font-semibold rounded-lg px-3 py-2 md:px-5 md:py-2 transition-all duration-200"
              style={{ width: 'auto', minWidth: 'auto', overflow: 'visible' }}
            >
              <Download size={18} className="shrink-0" />
              <span className="ml-2 hidden md:inline">{language === 'zh' ? '简历' : 'Resume'}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t border-gray-200 dark:border-gray-700 ${isDark ? 'bg-[#121212]' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-6">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-[#0052FF] bg-[#E8F0FF]'
                        : `${isDark ? 'text-gray-100 hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}`
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    toggleLanguage();
                  }}
                  className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}
                >
                  <Globe size={20} />
                </button>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={handleDownloadResume}
                  className="shrink-0 flex items-center whitespace-nowrap bg-[#0052FF] hover:bg-[#0044cc] text-white text-sm font-semibold rounded-lg px-3 py-2 md:px-5 md:py-2 transition-all duration-200"
                  style={{ width: 'auto', minWidth: 'auto', overflow: 'visible' }}
                >
                  <Download size={18} className="shrink-0" />
                  <span className="ml-2 hidden md:inline">{language === 'zh' ? '简历' : 'Resume'}</span>
                </button>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
