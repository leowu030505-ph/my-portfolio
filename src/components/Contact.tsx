import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Music } from 'lucide-react';
import { useAppContext } from '../App';
import { translations } from '../i18n';
import { personalInfo } from '../data';

const Contact: React.FC = () => {
  const { isDark, language } = useAppContext();
  const t = translations[language];

  const tp = isDark ? 'text-gray-100' : 'text-gray-900';
  const ts = isDark ? 'text-gray-300' : 'text-gray-600';
  const tsm = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = isDark ? 'bg-[#1E1E1E]' : 'bg-white';
  const cardBorder = isDark ? 'border-gray-700' : 'border-gray-200';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      alert(language === 'zh' ? '邮箱已复制!' : 'Email copied!');
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${tp}`}>
            {t.contact.title}
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#0052FF' }} />
          <p className={`text-base mt-4 ${ts}`}>
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-3xl p-10 ${cardBg} border ${cardBorder}`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 82, 255, 0.1)' }}>
                  <Mail size={24} style={{ color: '#0052FF' }} />
                </div>
                <div>
                  <h3 className={`text-sm font-semibold mb-1 ${tsm}`}>
                    {t.contact.email}
                  </h3>
                  <button
                    onClick={handleCopyEmail}
                    className={`text-lg font-normal transition-colors duration-200 ${tp}`}
                    style={{ color: '#0052FF' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0033aa'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#0052FF'}
                  >
                    {personalInfo.email}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 82, 255, 0.1)' }}>
                  <Phone size={24} style={{ color: '#0052FF' }} />
                </div>
                <div>
                  <h3 className={`text-sm font-semibold mb-1 ${tsm}`}>
                    {t.contact.phone}
                  </h3>
                  <p className={`text-lg font-normal ${tp}`}>
                    {personalInfo.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 82, 255, 0.1)' }}>
                  <MapPin size={24} style={{ color: '#0052FF' }} />
                </div>
                <div>
                  <h3 className={`text-sm font-semibold mb-1 ${tsm}`}>
                    {t.contact.location}
                  </h3>
                  <p className={`text-lg font-normal ${tp}`}>
                    {t.about.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className={`text-lg font-semibold mb-4 ${tp}`}>
                {language === 'zh' ? '社交平台' : 'Social'}
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl border ${cardBorder} transition-all duration-200`}
                  style={{ borderColor: 'transparent' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0052FF'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                >
                  <Instagram size={20} style={{ color: '#0052FF' }} />
                  <span className={`text-base font-medium ${tp}`}>
                    {language === 'zh' ? '小红书' : 'Xiaohongshu'}
                  </span>
                </a>
                <a
                  href="#"
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl border ${cardBorder} transition-all duration-200`}
                  style={{ borderColor: 'transparent' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0052FF'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                >
                  <Music size={20} style={{ color: '#0052FF' }} />
                  <span className={`text-base font-medium ${tp}`}>
                    {language === 'zh' ? '抖音' : 'Douyin'}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
