import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { experiences } from '../data';

interface ExperienceProps {
  isDark: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: isDark ? '#fff' : '#111827' }}>
            职业经历
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#0052FF' }} />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="rounded-2xl shadow-lg cursor-pointer"
                style={{ backgroundColor: isDark ? '#1f2937' : '#fff' }}
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-medium mb-1" style={{ color: '#0052FF' }}>
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold mb-1" style={{ color: isDark ? '#fff' : '#111827' }}>
                        {exp.company}
                      </h3>
                      <p className="" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
                        {exp.position}
                      </p>
                    </div>
                    <div className="p-2 rounded-lg" style={{ backgroundColor: isDark ? '#374151' : '#f3f4f6' }}>
                      {expandedId === exp.id ? (
                        <ChevronUp size={20} style={{ color: '#0052FF' }} />
                      ) : (
                        <ChevronDown size={20} style={{ color: '#0052FF' }} />
                      )}
                    </div>
                  </div>

                  {expandedId === exp.id && (
                    <div className="mt-6 pt-6 border-t" style={{ borderColor: isDark ? '#374151' : '#e5e7eb' }}>
                      <p className="mb-4" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                        {exp.description}
                      </p>
                      <h4 className="text-sm font-semibold mb-3" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>
                        主要成就：
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                            <span className="mr-2 mt-1" style={{ color: '#0052FF' }}>•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
