import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';
import { useAppContext } from '../App';
import { campusExperiences } from '../data';

const Campus: React.FC = () => {
  const { isDark, language } = useAppContext();

  const tp = isDark ? 'text-gray-100' : 'text-gray-900';
  const ts = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDark ? 'bg-[#1E1E1E]' : 'bg-white';
  const cardBorder = isDark ? 'border-gray-700' : 'border-gray-200';

  return (
    <section id="campus" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${tp}`}>
            {language === 'zh' ? '校园经历' : 'Campus Activities'}
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#0052FF' }} />
        </motion.div>

        <div className="grid gap-8">
          {campusExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex gap-8 ${cardBg} rounded-2xl p-8 border ${cardBorder}`}
            >
              <div className="flex-shrink-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full mb-4" style={{ backgroundColor: '#0052FF' }} />
                  <div className={`w-0.5 flex-1 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className={`flex items-center text-sm font-light ${ts}`}>
                    <Calendar size={16} className="mr-2" />
                    {exp.date}
                  </span>
                  <span className={`flex items-center text-sm font-light ${ts}`}>
                    <Users size={16} className="mr-2" />
                    {exp.platform}
                  </span>
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${tp}`}>
                  {exp.title}
                </h3>
                <p className={`text-base leading-relaxed mb-6 ${ts}`}>
                  {exp.goal}
                </p>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className={`text-sm font-semibold mb-2 ${tp}`}>
                      {language === 'zh' ? '策略' : 'Strategy'}
                    </h4>
                    <p className={`text-base leading-relaxed ${ts}`}>
                      {exp.strategy}
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold mb-2 ${tp}`}>
                      {language === 'zh' ? '执行' : 'Execution'}
                    </h4>
                    <p className={`text-base leading-relaxed ${ts}`}>
                      {exp.execution}
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-4 gap-4">
                  {exp.data.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-xl text-center ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
                    >
                      <div className="text-2xl font-bold mb-2" style={{ color: '#0052FF' }}>
                        {item.value}
                      </div>
                      <div className={`text-sm font-light ${ts}`}>
                        {item.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campus;
