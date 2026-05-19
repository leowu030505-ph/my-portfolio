import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { operationCases } from '../data';
import { OperationCase } from '../types';

interface OperationCasesProps {
  isDark: boolean;
}

const OperationCases: React.FC<OperationCasesProps> = ({ isDark }) => {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const allPlatforms = ['all', ...new Set(operationCases.map(c => c.platform))];

  const filteredCases = activeFilter === 'all'
    ? operationCases
    : operationCases.filter(c => c.platform.includes(activeFilter));

  return (
    <section id="cases" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            运营案例
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-8" style={{ backgroundColor: '#f97316' }} />
          
          <div className="flex flex-wrap justify-center gap-2">
            {allPlatforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setActiveFilter(platform)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === platform
                    ? 'text-white'
                    : isDark
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                style={{ backgroundColor: activeFilter === platform ? '#f97316' : 'transparent' }}
              >
                {platform === 'all' ? '全部' : platform}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`} />
          
          <div className="space-y-8">
            {filteredCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-20 ${index % 2 === 0 ? '' : ''}`}
              >
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                    isDark ? 'bg-gray-900' : 'bg-white'
                  }`}
                  style={{ top: '2rem', borderColor: '#0052FF' }}
                />

                <div
                  className={`rounded-2xl overflow-hidden shadow-lg cursor-pointer ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  }`}
                  onClick={() => setExpandedCase(
                    expandedCase === caseItem.id ? null : caseItem.id
                  )}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {caseItem.title}
                          </h3>
                          <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {caseItem.platform} · {caseItem.date}
                          </p>
                        </div>
                        <div className={`p-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          {expandedCase === caseItem.id ? (
                            <ChevronUp size={20} style={{ color: '#0052FF' }} />
                          ) : (
                            <ChevronDown size={20} style={{ color: '#0052FF' }} />
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseItem.data.map((d, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm font-medium rounded-full"
                            style={{ backgroundColor: 'rgba(0, 82, 255, 0.1)', color: '#0052FF' }}
                          >
                            {d.metric}: {d.value}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedCase === caseItem.id && (
                      <CaseDetail caseItem={caseItem} isDark={isDark} />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface CaseDetailProps {
  caseItem: OperationCase;
  isDark: boolean;
}

const CaseDetail: React.FC<CaseDetailProps> = ({ caseItem, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="border-t"
      style={{ borderColor: isDark ? '#374151' : '#e5e7eb' }}
    >
      <div className="p-6 space-y-6">
        <div>
          <h4 className={`text-lg font-semibold mb-2`} style={{ color: '#0052FF' }}>
            活动目标
          </h4>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            {caseItem.goal}
          </p>
        </div>

        <div>
          <h4 className={`text-lg font-semibold mb-2`} style={{ color: '#0052FF' }}>
            创意策略
          </h4>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            {caseItem.strategy}
          </p>
        </div>

        <div>
          <h4 className={`text-lg font-semibold mb-2`} style={{ color: '#0052FF' }}>
            执行过程
          </h4>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            {caseItem.execution}
          </p>
        </div>

        <div>
          <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-orange-400' : ''}`} style={{ color: isDark ? undefined : '#f97316' }}>
            数据表现
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseItem.data.map((d, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-xl text-center ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                <div className="text-2xl font-bold mb-1" style={{ color: '#0052FF' }}>
                  {d.value}
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {d.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {caseItem.materials.length > 0 && (
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-orange-400' : ''}`} style={{ color: isDark ? undefined : '#f97316' }}>
              物料展示
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {caseItem.materials.map((material, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-video rounded-lg overflow-hidden"
                >
                  <img
                    src={material}
                    alt={`物料 ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default OperationCases;
