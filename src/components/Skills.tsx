import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, PenTool, BarChart3, Sparkles } from 'lucide-react';
import { useAppContext } from '../App';
import { translations } from '../i18n';

const Skills: React.FC = () => {
  const { isDark, language } = useAppContext();
  const [activeTab, setActiveTab] = useState('tools');
  const t = translations[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette':
        return <Palette size={24} />;
      case 'sparkles':
        return <Sparkles size={24} />;
      case 'barchart':
        return <BarChart3 size={24} />;
      case 'pentool':
        return <PenTool size={24} />;
      default:
        return <Palette size={24} />;
    }
  };

  const levelMap: Record<string, Record<string, string>> = {
    zh: {
      'master': '精通',
      'proficient': '熟练',
      'familiar': '熟悉',
    },
    en: {
      'master': 'Master',
      'proficient': 'Proficient',
      'familiar': 'Familiar',
    },
  };

  const toolsSkills = [
    {
      category: t.skills.tools.design,
      iconName: 'palette',
      skills: [
        { name: 'Photoshop', level: 'master' },
        { name: 'Illustrator', level: 'master' },
        { name: 'Figma', level: 'proficient' },
        { name: 'Premiere', level: 'familiar' },
      ],
    },
    {
      category: t.skills.tools.ai,
      iconName: 'sparkles',
      skills: [
        { name: language === 'zh' ? '即梦/海螺' : 'Jimeng/Hailuo', level: 'proficient' },
        { name: 'Codex', level: 'proficient' },
        { name: 'Trae', level: 'proficient' },
      ],
    },
  ];

  const operationsSkills = [
    {
      category: t.skills.operations.analytics,
      iconName: 'barchart',
      skills: [
        { name: 'Excel', level: 'proficient' },
        { name: 'MySQL', level: 'proficient' },
        { name: language === 'zh' ? '需求调研' : 'User Research', level: 'proficient' },
        { name: language === 'zh' ? '竞品分析' : 'Competitive Analysis', level: 'proficient' },
      ],
    },
    {
      category: t.skills.operations.branding,
      iconName: 'pentool',
      skills: [
        { name: language === 'zh' ? '文案写作' : 'Copywriting', level: 'proficient' },
        { name: language === 'zh' ? '内容策划' : 'Content Planning', level: 'proficient' },
        { name: language === 'zh' ? '平面设计' : 'Graphic Design', level: 'master' },
        { name: language === 'zh' ? '活动组织' : 'Event Organization', level: 'proficient' },
      ],
    },
  ];

  const skills = activeTab === 'tools' ? toolsSkills : operationsSkills;

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            {t.skills.title}
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mb-8" style={{ backgroundColor: '#0052FF' }} />

          <div className={`inline-flex p-1 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'tools'
                  ? 'text-white shadow'
                  : `${isDark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`
              }`}
              style={activeTab === 'tools' ? { backgroundColor: '#0052FF' } : {}}
            >
              {t.skills.toolsTab}
            </button>
            <button
              onClick={() => setActiveTab('operations')}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'operations'
                  ? 'text-white shadow'
                  : `${isDark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`
              }`}
              style={activeTab === 'operations' ? { backgroundColor: '#0052FF' } : {}}
            >
              {t.skills.operationsTab}
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className={`rounded-2xl p-8 border ${isDark ? 'bg-[#1E1E1E] border-gray-700' : 'bg-white border-gray-200'}`}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl mr-4" style={{ backgroundColor: '#E8F0FF' }}>
                  <span style={{ color: '#0052FF' }}>{getIcon(skillGroup.iconName)}</span>
                </div>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                  {skillGroup.category}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-5 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
                  >
                    <p className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      {skill.name}
                    </p>
                    <p className="text-sm mt-1 font-light" style={{ color: '#0052FF' }}>
                      {levelMap[language][skill.level as keyof typeof levelMap[string]] || skill.level}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
