import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Mail, Linkedin, Github } from 'lucide-react';
import { useAppContext } from '../App';
import { translations } from '../i18n';
import { personalInfo } from '../data';

interface EduNode {
  date: string;
  school: string;
  major: string;
  degree: string;
  detail: string;
}

const About: React.FC = () => {
  const { isDark, language } = useAppContext();
  const t = translations[language];
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const tp = isDark ? 'text-gray-100' : 'text-gray-900';
  const ts = isDark ? 'text-gray-300' : 'text-gray-600';
  const tsm = isDark ? 'text-gray-400' : 'text-gray-500';

  const eduNodes: EduNode[] =
    language === 'zh'
      ? [
          {
            date: '2025.09 - 2028.06',
            school: '西安交通大学',
            major: '科学技术哲学',
            degree: '硕士在读',
            detail:
              '研究方向为科技美学、信息美学、认识论美学。参与国际信息哲学会议并作展示，参与专著《第三世界的逻辑:人类共享未来的范式转变》翻译1部。',
          },
          {
            date: '2021.09 - 2025.06',
            school: '西安交通大学',
            major: '哲学',
            degree: '本科',
            detail:
              '辅修德语专业，《认知科学的哲学基础》《复杂信息系统》等专业课程满绩，本科毕设《信息美学的价值论阐述》。',
          },
        ]
      : [
          {
            date: '2025.09 - 2028.06',
            school: "Xi'an Jiaotong University",
            major: 'Philosophy of Science & Technology',
            degree: 'Master (In Progress)',
            detail:
              'Research focuses on aesthetics of science and technology, information aesthetics, and epistemological aesthetics. Presented at the International Conference on Philosophy of Information and co-translated the monograph "Logic of the Third World: Paradigm Shifts for a Shared Human Future".',
          },
          {
            date: '2021.09 - 2025.06',
            school: "Xi'an Jiaotong University",
            major: 'Philosophy',
            degree: "Bachelor's Degree",
            detail:
              'Minored in German. Achieved top grades in courses including Philosophical Foundations of Cognitive Science and Complex Information Systems. Undergraduate thesis: "An Axiological Exposition of Information Aesthetics".',
          },
        ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${tp}`}>
            {t.about.title}
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#0052FF' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-md">
              <div className={`aspect-square rounded-2xl overflow-hidden shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className={`text-lg font-semibold mb-6 ${tp}`}>
                {language === 'zh' ? '教育经历' : 'Education'}
              </h3>

              {/* Desktop: horizontal timeline */}
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute top-3 left-0 right-0 h-0.5" style={{ backgroundColor: '#0052FF' }} />
                  <div className="relative flex justify-between">
                    {eduNodes.map((node, idx) => (
                      <div
                        key={idx}
                        className="relative flex flex-col items-center"
                        style={{ width: `${100 / eduNodes.length}%` }}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                      >
                        <div
                          className="w-6 h-6 rounded-full border-4 z-10 transition-transform duration-300"
                          style={{
                            backgroundColor: hoveredIdx === idx ? '#0052FF' : isDark ? '#1E1E1E' : '#ffffff',
                            borderColor: '#0052FF',
                            transform: hoveredIdx === idx ? 'scale(1.3)' : 'scale(1)',
                          }}
                        />
                        <div className="mt-4 text-center px-2">
                          <p className="text-sm font-semibold" style={{ color: '#0052FF' }}>
                            {node.date}
                          </p>
                          <p className={`text-base font-semibold mt-1 ${tp}`}>
                            {node.school}
                          </p>
                          <p className={`text-sm mt-1 ${ts}`}>
                            {node.major}
                          </p>
                          <p className={`text-sm mt-1 ${tsm}`}>
                            {node.degree}
                          </p>
                        </div>

                        <div
                          className="absolute top-10 left-1/2 -translate-x-1/2 w-72 z-20 transition-all duration-300"
                          style={{
                            opacity: hoveredIdx === idx ? 1 : 0,
                            transform: `translateX(-50%) translateY(${hoveredIdx === idx ? '0' : '8px'})`,
                            pointerEvents: hoveredIdx === idx ? 'auto' : 'none',
                          }}
                        >
                          <div
                            className="p-5 rounded-xl"
                            style={{
                              background: isDark
                                ? 'rgba(30, 30, 30, 0.9)'
                                : 'rgba(255, 255, 255, 0.9)',
                              backdropFilter: 'blur(12px)',
                              WebkitBackdropFilter: 'blur(12px)',
                              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                            }}
                          >
                            <p className={`text-sm leading-relaxed ${ts}`}>
                              {node.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile: vertical timeline */}
              <div className="md:hidden">
                <div className="relative pl-8">
                  <div
                    className="absolute top-0 bottom-0 left-3 w-0.5"
                    style={{ backgroundColor: '#0052FF' }}
                  />
                  {eduNodes.map((node, idx) => (
                    <div key={idx} className="relative mb-8 last:mb-0">
                      <div
                        className="absolute left-[-20px] top-1 w-6 h-6 rounded-full border-4 z-10"
                        style={{
                          backgroundColor: hoveredIdx === idx ? '#0052FF' : isDark ? '#1E1E1E' : '#ffffff',
                          borderColor: '#0052FF',
                          transition: 'background-color 0.3s',
                        }}
                      />
                      <div
                        className="p-5 rounded-xl cursor-pointer transition-all duration-300"
                        style={{
                          background: isDark ? 'rgba(30, 30, 30, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                        }}
                        onTouchStart={() => setHoveredIdx(hoveredIdx === idx ? null : idx)}
                        onClick={() => setHoveredIdx(hoveredIdx === idx ? null : idx)}
                      >
                        <p className="text-sm font-semibold" style={{ color: '#0052FF' }}>
                          {node.date}
                        </p>
                        <p className={`text-base font-semibold mt-1 ${tp}`}>
                          {node.school}
                        </p>
                        <p className={`text-sm mt-1 ${ts}`}>
                          {node.major} · {node.degree}
                        </p>
                        <div
                          className="overflow-hidden transition-all duration-300"
                          style={{
                            maxHeight: hoveredIdx === idx ? '200px' : '0',
                            opacity: hoveredIdx === idx ? 1 : 0,
                          }}
                        >
                          <p className={`text-sm leading-relaxed mt-3 pt-3 ${ts}`} style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}` }}>
                            {node.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-2xl border ${isDark ? 'bg-[#1E1E1E] border-gray-700' : 'bg-white border-gray-200'}`}>
              <h3 className={`text-lg font-semibold mb-6 ${tp}`}>
                {t.about.contact}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-3 rounded-xl mr-4" style={{ backgroundColor: '#E8F0FF' }}>
                    <MapPin size={20} style={{ color: '#0052FF' }} />
                  </div>
                  <span className={`text-base font-normal ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t.about.location}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="p-3 rounded-xl mr-4" style={{ backgroundColor: '#E8F0FF' }}>
                    <Briefcase size={20} style={{ color: '#0052FF' }} />
                  </div>
                  <span className={`text-base font-normal ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t.about.status}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="p-3 rounded-xl mr-4" style={{ backgroundColor: '#E8F0FF' }}>
                    <Mail size={20} style={{ color: '#0052FF' }} />
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={`text-base font-normal hover:underline transition-colors duration-200 ${isDark ? 'text-gray-100 hover:text-[#0052FF]' : 'text-gray-900 hover:text-[#0052FF]'}`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 pt-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all duration-200 ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-[#0052FF]' : 'hover:bg-gray-100 text-gray-600 hover:text-[#0052FF]'}`}
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all duration-200 ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-[#0052FF]' : 'hover:bg-gray-100 text-gray-600 hover:text-[#0052FF]'}`}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
