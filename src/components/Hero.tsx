import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Briefcase } from 'lucide-react';
import { scrollToSection } from '../utils';
import { useAppContext } from '../App';
import { translations, personalInfoData } from '../i18n';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  const { language, isDark } = useAppContext();
  const t = translations[language];
  const name = personalInfoData.name;

  const avatarRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subNameRef = useRef<HTMLParagraphElement>(null);
  const sloganRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const heroHeight = window.innerHeight;
          const progress = Math.min(scrollY / (heroHeight * 0.5), 1);

          const applyTransform = (
            ref: React.RefObject<HTMLElement>,
            maxOffset: number,
            direction: number
          ) => {
            if (ref.current) {
              const offset = maxOffset * progress * direction;
              const opacity = 1 - progress;
              ref.current.style.transform = `translateX(${offset}px) translateZ(0)`;
              ref.current.style.opacity = String(opacity);
            }
          };

          applyTransform(avatarRef, 150, -1);
          applyTransform(nameRef, 100, 1);
          applyTransform(subNameRef, 80, -1);
          applyTransform(sloganRef, 60, 1);
          applyTransform(buttonRef, 40, -1);

          if (scrollIndicatorRef.current) {
            scrollIndicatorRef.current.style.opacity = String(1 - progress * 2);
          }

          if (cardRef.current) {
            const cardOpacity = 1 - progress * 0.5;
            cardRef.current.style.opacity = String(Math.max(cardOpacity, 0));
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textPrimary = isDark ? 'text-gray-100' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-500';
  const textTertiary = isDark ? 'text-gray-300' : 'text-gray-600';

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 text-center relative z-10">
        <div
          ref={cardRef}
          className="space-y-10 p-8 md:p-12 rounded-3xl"
          style={{
            background: 'transparent !important',
            backgroundColor: 'transparent !important',
            backdropFilter: 'blur(24px) !important',
            WebkitBackdropFilter: 'blur(24px) !important',
            border: '1px solid rgba(255, 255, 255, 0.12) !important',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06) !important',
            willChange: 'transform, opacity'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center"
          >
            <div ref={avatarRef} style={{ willChange: 'transform, opacity' }}>
              <div
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden"
                style={{
                  border: '2px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                  transform: 'scale(1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.12)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                }}
              >
                <img
                  src={personalInfo.avatar}
                  alt={name[language]}
                  className="w-full h-full object-cover"
                  style={{
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            <h1
              ref={nameRef}
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight ${textPrimary}`}
              style={{ willChange: 'transform, opacity' }}
            >
              {name[language]}
            </h1>
            <p
              ref={subNameRef}
              className={`text-xl md:text-2xl font-light ${textSecondary}`}
              style={{ willChange: 'transform, opacity' }}
            >
              {language === 'zh' ? name.en : name.zh}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p
              ref={sloganRef}
              className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal ${textTertiary} whitespace-pre-line text-center`}
              style={{ willChange: 'transform, opacity' }}
            >
              {t.hero.slogan}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div ref={buttonRef} style={{ willChange: 'transform, opacity' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('internships')}
                className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-xl text-white"
                style={{ backgroundColor: '#0088ff' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0066cc'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0088ff'}
              >
                <Briefcase size={20} className="mr-2" />
                {t.hero.cta}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        style={{ willChange: 'opacity' }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full transition-colors duration-200 text-gray-400 hover:text-[#0052FF]"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
