export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    internships: string;
    campus: string;
    contact: string;
    resume: string;
  };
  hero: {
    subtitle: string;
    slogan: string;
    cta: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    keyMetrics: {
      projects: string;
      activities: string;
      growth: string;
      improvement: string;
    };
    contact: string;
    location: string;
    status: string;
  };
  skills: {
    title: string;
    toolsTab: string;
    operationsTab: string;
    tools: {
      design: string;
      ai: string;
    };
    operations: {
      analytics: string;
      branding: string;
    };
  };
  internships: {
    title: string;
    all: string;
    background: string;
    role: string;
    solution: string;
    results: string;
    prototype: string;
    document: string;
    live: string;
  };
  campus: {
    title: string;
    all: string;
    goal: string;
    strategy: string;
    execution: string;
    performance: string;
    materials: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    social: string;
  };
  footer: {
    quickLinks: string;
    lastUpdated: string;
    rights: string;
  };
}

export const translations: Record<string, Translations> = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我',
      skills: '核心能力',
      internships: '实习经历',
      campus: '校园经历',
      contact: '联系我',
      resume: '下载简历',
    },
    hero: {
      subtitle: '品牌公关 & 产品设计',
      slogan: '🧠 用逻辑解决问题，用审美创造体验 🎨\n🔍 永远对新工具和 AI 技术保持好奇 🤖',
      cta: '查看经历',
    },
    about: {
      title: '关于我',
      description1: '你好！我是吴磊，西安交通大学人文学院科学技术哲学硕士在读（2025.09-2028.06），研究方向为科技美学、信息美学、认识论美学。',
      description2: '本科期间辅修德语专业，认知科学的哲学基础、复杂信息系统等专业课程满绩，本科毕设《信息美学的价值论阐述》。参与国际信息哲学会议并作展示，参与专著《第三世界的逻辑:人类共享未来的范式转变》翻译1部。',
      description3: '在品牌公关、平面设计、公众号运营方面有丰富的实践经验，精通Photoshop、Adobe Illustrator，熟悉Premiere，熟练使用Figma，也善于运用AI工具提高工作效率。',
      keyMetrics: {
        projects: '实习经历',
        activities: '校园经历',
        growth: '图文内容',
        improvement: '覆盖人群',
      },
      contact: '联系方式',
      location: '西安',
      status: '在读，寻找实习机会',
    },
    skills: {
      title: '核心能力',
      toolsTab: '设计与AI工具',
      operationsTab: '内容与运营',
      tools: {
        design: '设计软件',
        ai: 'AI工具',
      },
      operations: {
        analytics: '统计分析',
        branding: '品牌建设',
      },
    },
    internships: {
      title: '实习经历',
      all: '全部',
      background: '项目背景',
      role: '我的职责',
      solution: '解决方案',
      results: '数据成果',
      prototype: '查看原型',
      document: '产品文档',
      live: '在线体验',
    },
    campus: {
      title: '校园经历',
      all: '全部',
      goal: '活动目标',
      strategy: '创意策略',
      execution: '执行过程',
      performance: '数据表现',
      materials: '物料展示',
    },
    contact: {
      title: '联系我',
      subtitle: '期待与您交流',
      email: '邮箱',
      phone: '电话',
      location: '位置',
      social: '社交媒体',
    },
    footer: {
      quickLinks: '快速导航',
      lastUpdated: '最后更新于：2026年5月',
      rights: '保留所有权利。',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      internships: 'Internships',
      campus: 'Campus',
      contact: 'Contact',
      resume: 'Download Resume',
    },
    hero: {
      subtitle: 'Brand PR & Product Design',
      slogan: '🧠 Solve problems with logic, create experiences with aesthetics 🎨\n🔍 Always curious about new tools and AI technology 🤖',
      cta: 'View Experience',
    },
    about: {
      title: 'About Me',
      description1: 'Hello! I am Wu Lei, a graduate student in Philosophy of Science and Technology at the School of Humanities, Xi\'an Jiaotong University (2025.09-2028.06). My research focuses on philosophy of science and technology aesthetics, information aesthetics, and epistemological aesthetics.',
      description2: 'During my undergraduate studies, I minored in German. I achieved full marks in courses like Philosophical Foundations of Cognitive Science and Complex Information Systems. My undergraduate thesis was "An Axiological Exposition of Information Aesthetics." I also participated in the International Conference on Philosophy of Information and translated one monograph.',
      description3: 'I have rich practical experience in brand PR, graphic design, and WeChat public account operations. Proficient in Photoshop and Adobe Illustrator, familiar with Premiere, skilled in Figma, and adept at using AI tools to improve work efficiency.',
      keyMetrics: {
        projects: 'Internships',
        activities: 'Campus',
        growth: 'Content',
        improvement: 'Reach',
      },
      contact: 'Contact',
      location: 'Xi\'an',
      status: 'Student, seeking internships',
    },
    skills: {
      title: 'Core Skills',
      toolsTab: 'Design & AI Tools',
      operationsTab: 'Content & Operations',
      tools: {
        design: 'Design Software',
        ai: 'AI Tools',
      },
      operations: {
        analytics: 'Analytics',
        branding: 'Brand Building',
      },
    },
    internships: {
      title: 'Internship Experience',
      all: 'All',
      background: 'Background',
      role: 'My Role',
      solution: 'Solution',
      results: 'Results',
      prototype: 'Prototype',
      document: 'Documentation',
      live: 'Live Demo',
    },
    campus: {
      title: 'Campus Experience',
      all: 'All',
      goal: 'Goal',
      strategy: 'Strategy',
      execution: 'Execution',
      performance: 'Performance',
      materials: 'Materials',
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Looking forward to connecting',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      social: 'Social Media',
    },
    footer: {
      quickLinks: 'Quick Links',
      lastUpdated: 'Last Updated: May 2026',
      rights: 'All rights reserved.',
    },
  },
};

export interface PersonalInfo {
  name: {
    zh: string;
    en: string;
  };
}

export const personalInfoData: PersonalInfo = {
  name: {
    zh: '吴磊',
    en: 'Leo Wu',
  },
};
