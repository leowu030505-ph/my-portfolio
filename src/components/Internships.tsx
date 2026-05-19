import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, FileText, ChevronRight } from 'lucide-react';
import { useAppContext } from '../App';
import { internshipExperiences } from '../data';

const Internships: React.FC = () => {
  const { isDark, language } = useAppContext();
  const [selectedProject, setSelectedProject] = useState<typeof internshipExperiences[0] | null>(null);

  const tp = isDark ? 'text-gray-100' : 'text-gray-900';
  const ts = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDark ? 'bg-[#1E1E1E]' : 'bg-white';
  const cardBorder = isDark ? 'border-gray-700' : 'border-gray-200';

  return (
    <section id="internships" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${tp}`}>
            {language === 'zh' ? '实习经历' : 'Internships'}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {internshipExperiences.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group cursor-pointer rounded-2xl overflow-hidden border ${cardBorder} ${cardBg}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-light rounded-full bg-primary-light text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${tp}`}>
                  {project.title}
                </h3>
                <p className={`text-sm font-light mb-4 ${ts}`}>
                  {project.role} · {project.date}
                </p>
                <p className={`text-base leading-relaxed mb-6 ${ts}`}>
                  {project.background}
                </p>
                <div className="flex items-center text-sm font-medium text-primary">
                  {language === 'zh' ? '查看详情' : 'View Details'}
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
              isDark ? 'bg-[#121212]' : 'bg-white'
            } shadow-2xl`}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute top-6 right-6 p-3 rounded-full hover:bg-gray-100 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} ${ts} hover:text-primary transition-colors duration-200`}
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <div className="mb-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-light rounded-full bg-primary-light text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className={`text-3xl font-bold mb-3 ${tp}`}>
                {selectedProject.title}
              </h2>
              <p className={`text-base font-light mb-8 ${ts}`}>
                {selectedProject.role} · {selectedProject.date}
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className={`text-lg font-semibold mb-3 ${tp}`}>
                    {language === 'zh' ? '项目背景' : 'Background'}
                  </h3>
                  <p className={`text-base leading-relaxed ${ts}`}>
                    {selectedProject.background}
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-3 ${tp}`}>
                    {language === 'zh' ? '我的职责' : 'Responsibility'}
                  </h3>
                  <p className={`text-base leading-relaxed ${ts}`}>
                    {selectedProject.responsibility}
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-3 ${tp}`}>
                  {language === 'zh' ? '解决方案' : 'Solution'}
                  </h3>
                  <p className={`text-base leading-relaxed ${ts}`}>
                    {selectedProject.solution}
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-6 ${tp}`}>
                  {language === 'zh' ? '成果数据' : 'Results'}
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {selectedProject.results.map((result, idx) => (
                      <div
                        key={idx}
                        className={`p-6 rounded-2xl text-center ${
                        isDark ? 'bg-gray-800' : 'bg-gray-50'
                      }`}
                      >
                        <div className="text-2xl font-bold mb-2" style={{ color: '#0052FF' }}>
                          {result.value}
                        </div>
                        <div className={`text-sm font-light ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {selectedProject.links && (
                <div className={`flex flex-wrap gap-4 mt-8 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  {selectedProject.links.prototype && (
                    <a
                      href={selectedProject.links.prototype}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 text-sm font-semibold rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      <FileText size={18} className="mr-2" />
                      {language === 'zh' ? '查看原型' : 'Prototype'}
                    </a>
                  )}
                  {selectedProject.links.document && (
                    <a
                      href={selectedProject.links.document}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 text-sm font-semibold rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      <FileText size={18} className="mr-2" />
                      {language === 'zh' ? '查看文档' : 'Document'}
                    </a>
                  )}
                  {selectedProject.links.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 text-sm font-semibold rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      {language === 'zh' ? '在线体验' : 'Live Demo'}
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </section>
  );
};

export default Internships;
