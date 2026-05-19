import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, FileText, Layout } from 'lucide-react';
import { productProjects } from '../data';
import { ProductProject } from '../types';

interface ProductProjectsProps {
  isDark: boolean;
}

const ProductProjects: React.FC<ProductProjectsProps> = ({ isDark }) => {
  const [selectedProject, setSelectedProject] = useState<ProductProject | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const allTags = ['all', ...new Set(productProjects.flatMap(p => p.tags))];

  const filteredProjects = activeFilter === 'all'
    ? productProjects
    : productProjects.filter(p => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            产品案例
          </h2>
          <div className="w-20 h-1 bg-product mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === tag
                    ? 'text-white'
                    : isDark
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                style={{ backgroundColor: activeFilter === tag ? '#0052FF' : 'transparent' }}
              >
                {tag === 'all' ? '全部' : tag}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className={`rounded-2xl overflow-hidden shadow-lg cursor-pointer ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {project.role} · {project.date}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-product/10 text-product"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isDark={isDark}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

interface ProjectModalProps {
  project: ProductProject;
  isDark: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isDark, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full z-10 ${
            isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          <X size={24} />
        </button>

        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="mb-6">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {project.title}
            </h2>
            <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {project.role} · {project.date}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium rounded-full"
                  style={{ backgroundColor: 'rgba(0, 82, 255, 0.1)', color: '#0052FF' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className={`text-lg font-semibold mb-2`} style={{ color: '#0052FF' }}>
                项目背景
              </h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                {project.background}
              </p>
            </div>

            <div>
              <h3 className={`text-lg font-semibold mb-2`} style={{ color: '#0052FF' }}>
                我的职责
              </h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                {project.responsibility}
              </p>
            </div>

            <div>
              <h3 className={`text-lg font-semibold mb-2`} style={{ color: '#0052FF' }}>
                解决方案
              </h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                {project.solution}
              </p>
            </div>

            <div>
              <h3 className={`text-lg font-semibold mb-4 text-product ${isDark ? 'text-blue-400' : ''}`}>
                数据成果
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl text-center ${
                      isDark ? 'bg-gray-800' : 'bg-gray-50'
                    }`}
                  >
                    <div className="text-3xl font-bold text-data mb-2">
                      {result.value}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {result.metric}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {project.links.prototype && (
                <a
                  href={project.links.prototype}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isDark
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <Layout size={16} className="mr-2" />
                  查看原型
                </a>
              )}
              {project.links.document && (
                <a
                  href={project.links.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isDark
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <FileText size={16} className="mr-2" />
                  产品文档
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
                  style={{ backgroundColor: '#0052FF' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0033aa'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0052FF'}
                >
                  <ExternalLink size={16} className="mr-2" />
                  在线体验
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductProjects;
