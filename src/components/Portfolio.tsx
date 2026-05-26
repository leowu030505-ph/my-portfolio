import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useAppContext } from '../App';
import { translations } from '../i18n';
import { portfolioWorks } from '../data';

const Portfolio: React.FC = () => {
  const { isDark, language } = useAppContext();
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'content' | 'ai'>('content');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const zoomTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInViewRef = useRef(false);

  const tp = isDark ? 'text-gray-100' : 'text-gray-900';
  const ts = isDark ? 'text-gray-300' : 'text-gray-600';

  const filteredWorks = portfolioWorks.filter(w => w.category === activeTab);
  const allWorks = [...filteredWorks, ...filteredWorks];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    scrollContainer.scrollLeft = 0;

    const innerWrapper = scrollContainer.querySelector('.portfolio-scroll-inner') as HTMLElement;
    if (!innerWrapper) return;

    const getOriginalWidth = () => {
      const cards = innerWrapper.children;
      let width = 0;
      const count = filteredWorks.length;
      for (let i = 0; i < count && i < cards.length; i++) {
        width += (cards[i] as HTMLElement).offsetWidth;
      }
      width += 24 * (count - 1);
      return width;
    };

    const scrollSpeed = 1;
    let isPaused = false;
    let animId = 0;

    const autoScroll = () => {
      if (!isPaused && !isDraggingRef.current) {
        scrollContainer.scrollLeft += scrollSpeed;
        const originalWidth = getOriginalWidth();
        if (originalWidth > 0 && scrollContainer.scrollLeft >= originalWidth) {
          scrollContainer.scrollLeft -= originalWidth;
        }
      }
      animId = requestAnimationFrame(autoScroll);
    };

    animId = requestAnimationFrame(autoScroll);

    const pauseScroll = () => { isPaused = true; };
    const resumeScroll = () => { isPaused = false; };

    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('mouseleave', resumeScroll);

    return () => {
      cancelAnimationFrame(animId);
      scrollContainer.removeEventListener('mouseenter', pauseScroll);
      scrollContainer.removeEventListener('mouseleave', resumeScroll);
    };
  }, [activeTab, filteredWorks.length]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX;
    scrollStartRef.current = container.scrollLeft;
    container.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = scrollRef.current;
    if (!isDraggingRef.current || !container) return;
    const dx = e.pageX - startXRef.current;
    container.scrollLeft = scrollStartRef.current - dx;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          zoomTimerRef.current = setTimeout(() => {
            if (isInViewRef.current) {
              setIsZoomed(true);
            }
          }, 3000);
        } else {
          if (zoomTimerRef.current) clearTimeout(zoomTimerRef.current);
          setIsZoomed(false);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (zoomTimerRef.current) clearTimeout(zoomTimerRef.current);
    };
  }, []);

  const handleMouseEnterArea = useCallback(() => {
    if (zoomTimerRef.current) clearTimeout(zoomTimerRef.current);
    setIsZoomed(false);
  }, []);

  const handleMouseLeaveArea = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const handleCardClick = useCallback((index: number) => {
    if (!isDraggingRef.current) {
      setIsZoomed(false);
      setSelectedIndex(index % filteredWorks.length);
    }
  }, [filteredWorks.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedIndex]);

  return (
    <section ref={sectionRef} id="portfolio" className="py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${tp}`}>
            {t.portfolio.title}
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mb-8" style={{ backgroundColor: '#0052FF' }} />

          <div className={`inline-flex p-1 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <button
              onClick={() => { setActiveTab('content'); setSelectedIndex(null); }}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'content'
                  ? 'text-white shadow'
                  : `${isDark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`
              }`}
              style={activeTab === 'content' ? { backgroundColor: '#0052FF' } : {}}
            >
              {t.portfolio.contentTab}
            </button>
            <button
              onClick={() => { setActiveTab('ai'); setSelectedIndex(null); }}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'ai'
                  ? 'text-white shadow'
                  : `${isDark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`
              }`}
              style={activeTab === 'ai' ? { backgroundColor: '#0052FF' } : {}}
            >
              {t.portfolio.aiTab}
            </button>
          </div>

          <p className={`text-base mt-4 ${ts}`}>
            {t.portfolio.subtitle}
          </p>
        </motion.div>
      </div>

      <div
        style={{
          transform: isZoomed ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.5s ease-in-out',
          transformOrigin: 'center center',
        }}
      >
        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden cursor-grab select-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseEnter={handleMouseEnterArea}
          onMouseLeave={handleMouseLeaveArea}
        >
          <style>{`#portfolio::-webkit-scrollbar{display:none}`}</style>
          <div className="portfolio-scroll-inner flex gap-6 px-12 py-4">
            {allWorks.map((work, index) => (
              <div
                key={`${work.id}-${index}-${activeTab}`}
                className={`flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer ${
                  isDark ? 'bg-[#1e1e1e] border-[#333333]' : 'bg-white border-[#f0f0f0]'
                } border`}
                style={{
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transitionProperty: 'transform, box-shadow',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: '0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.transform = 'scale(1.03)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.transform = 'scale(1)';
                  }
                }}
                onClick={() => handleCardClick(index)}
              >
                <div className="p-3">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-[180px] md:h-[240px] lg:h-[320px] w-auto rounded-xl object-contain"
                    style={{
                      background: isDark ? '#2a2a2a' : '#f5f5f5',
                      transitionProperty: 'transform',
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDuration: '0.3s',
                    }}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && filteredWorks[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={handleClose}
          >
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full mx-4 max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -top-12 right-0 flex items-center gap-4">
                <span className="text-white/60 text-sm">
                  {selectedIndex + 1} / {filteredWorks.length}
                </span>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <X size={28} />
                </button>
              </div>

              <h3 className="text-white text-lg font-semibold mb-4">
                {filteredWorks[selectedIndex].title}
              </h3>

              <div className="overflow-auto max-h-[75vh] w-full flex justify-center rounded-xl">
                <img
                  src={filteredWorks[selectedIndex].image}
                  alt={filteredWorks[selectedIndex].title}
                  className="max-w-full h-auto object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
