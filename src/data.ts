import { ProductProject, OperationCase, Experience as ExperienceType, Skill } from './types';

export const internshipExperiences: ProductProject[] = [
  {
    id: '1',
    title: '品牌公关实习生',
    role: '中兴通讯股份有限公司',
    date: '2024.06 - 2024.09',
    tags: ['品牌建设', '平面设计', '展会对接'],
    image: '/interships/中兴通讯.jpg',
    background: '对接产品线与品牌部，负责液冷数据中心官网更新及平面设计相关工作，精准同步多方需求。',
    responsibility: '品牌建设、展会对接、竞标内容输出。',
    solution: '利用Figma、PS等工具完成数字能源官网核心内容更新，独立负责对接2项行业展会，协助完成竞标物料筹备。',
    results: [
      { metric: '独立设计作品', value: '10项' },
      { metric: '展会对接', value: '2项' },
      { metric: '竞标物料', value: '6份' },
    ],
    links: {
      prototype: '#',
      document: '#',
      live: '#',
    },
  },
  {
    id: '2',
    title: '交流处实习生',
    role: '中共山西省委台湾事务办公室',
    date: '2022.06 - 2022.09',
    tags: ['对台交流', '活动管理', '文件整理'],
    image: '/interships/山西省委台办.jpg',
    background: '推动晋台两地交流合作、规范对台港澳活动管理。',
    responsibility: '负责企事业单位对台港澳活动报备审批文件整理工作，协助梳理活动策划方案、对接参与方、跟进活动执行细节。',
    solution: '建立规范的文件整理流程，精准对接多方需求，确保活动顺利落地。',
    results: [
      { metric: '对台交流活动', value: '3场' },
    ],
    links: {
      prototype: '#',
      document: '#',
    },
  },
];

export const campusExperiences: OperationCase[] = [
  {
    id: '1',
    title: '宣传部部长',
    date: '2022.10 - 2025.06',
    platform: '西安交通大学哲思社',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    goal: '负责公众号运营及社团品牌建设，提升社团影响力。',
    strategy: '定期策划公众号图文选题、撰写编辑优质内容，优化排版设计；借助AI工具输出系列品牌内容；参与设计社团标识及主要icon。',
    execution: '累计输出优质图文内容15篇左右，参与落地世界哲学日等3场活动，设计兴庆哲思系列题图。',
    data: [
      { metric: '图文内容', value: '15篇' },
      { metric: '粉丝增长', value: '150人' },
      { metric: '活动参与', value: '150余人' },
    ],
    materials: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    ],
  },
  {
    id: '2',
    title: '辅导员学生助理',
    date: '2021.10 - 2024.06',
    platform: '西安交通大学崇实书院',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
    goal: '参与书院公众号运营及综能课程建设，服务师生需求。',
    strategy: '精准对接书院宣传需求，筛选优质选题、撰写文案，优化排版布局；深度参与综能课程的需求研究、对接开发、执行与宣传全流程。',
    execution: '累计输出优质文案10余篇，协助开设3个学期15门综能课程。',
    data: [
      { metric: '文案输出', value: '10余篇' },
      { metric: '最高阅读', value: '1000+' },
      { metric: '综能课程', value: '15门' },
      { metric: '覆盖师生', value: '300余人' },
    ],
    materials: [],
  },
];

export const experiences: ExperienceType[] = [];

export const operationCases: OperationCase[] = [];

export const productProjects: ProductProject[] = [];

export const productSkills: Skill[] = [
  { category: '设计软件', name: 'Photoshop', level: 95, description: '精通图像处理和平面设计' },
  { category: '设计软件', name: 'Adobe Illustrator', level: 95, description: '精通矢量图形设计' },
  { category: '设计软件', name: 'Figma', level: 88, description: '熟练使用Figma进行UI/UX设计' },
  { category: '设计软件', name: 'Premiere', level: 75, description: '熟悉视频剪辑和制作' },
  { category: 'AI工具', name: '即梦/海螺', level: 90, description: '利用AI工具生成视频图片' },
  { category: 'AI工具', name: 'Claude', level: 88, description: '搭建自动图文内容输出流程' },
  { category: '统计分析', name: '文案写作', level: 90, description: '公众号、文案编辑与排版' },
  { category: '品牌建设', name: '平面设计', level: 92, description: '宣传图、专题页配图等设计' },
];

export const operationSkills: Skill[] = [
  { category: '公众号运营', name: '内容策划', level: 92, description: '策划选题、撰写编辑优质内容' },
  { category: '公众号运营', name: '排版设计', level: 90, description: '优化排版布局，提升阅读体验' },
  { category: '活动策划', name: '活动组织', level: 88, description: '策划落地校园活动' },
  { category: '活动策划', name: '执行管理', level: 85, description: '跟进活动执行细节，确保顺利落地' },
  { category: '品牌构建', name: '视觉设计', level: 92, description: '社团标识、系列题图设计' },
  { category: '品牌构建', name: 'AI内容生成', level: 88, description: '借助AI工具输出系列品牌内容' },
  { category: '项目管理', name: '需求调研', level: 85, description: '调研课程需求、梳理核心要点' },
  { category: '项目管理', name: '跨部门协作', level: 90, description: '对接多方需求，协调资源' },
];

export const keyMetrics = [
  { label: '实习经历', value: '2', suffix: '份' },
  { label: '校园经历', value: '2', suffix: '份' },
  { label: '图文内容', value: '25', suffix: '+' },
  { label: '覆盖人群', value: '500', suffix: '+' },
];

export const portfolioWorks = [
  {
    id: 1,
    title: '世界哲学日题图',
    image: '/portfolio/世界哲学日题图.png',
    category: 'content',
  },
  {
    id: 2,
    title: '亚洲铁塔论坛邀请函',
    image: '/portfolio/亚洲铁塔论坛邀请函-复制.png',
    category: 'content',
  },
  {
    id: 3,
    title: '哲思社讲座海报',
    image: '/portfolio/哲思社讲座海报.jpg',
    category: 'content',
  },
  {
    id: 4,
    title: '崇实赛艇招新易拉宝',
    image: '/portfolio/崇实赛艇招新易拉宝.png',
    category: 'content',
  },
  {
    id: 5,
    title: '崇实赛艇招新海报',
    image: '/portfolio/崇实赛艇招新海报.png',
    category: 'content',
  },
  {
    id: 6,
    title: '数据中心液冷海报',
    image: '/portfolio/数据中心液冷海报.png',
    category: 'content',
  },
  {
    id: 7,
    title: '西交哲思社招新题图',
    image: '/portfolio/西交哲思社招新题图.png',
    category: 'content',
  },
  {
    id: 8,
    title: '西交哲思社活动海报',
    image: '/portfolio/西交哲思社活动海报.png',
    category: 'content',
  },
  {
    id: 9,
    title: '非洲铁塔论坛',
    image: '/portfolio/非洲铁塔论坛.png',
    category: 'ai',
  },
  {
    id: 10,
    title: '非洲铁塔论坛邀请函',
    image: '/portfolio/非洲铁塔论坛邀请函.jpg',
    category: 'ai',
  },
  {
    id: 11,
    title: 'ComfyUI工作流搭建',
    image: '/AI运用/Comfyui工作流搭建.png',
    category: 'ai',
  },
];

export const personalInfo = {
  name: '吴磊',
  title: '品牌公关 & 产品设计',
  slogan: '具备审美素养与创作能力，工作细致认真、逻辑性强，对困难问题有强烈的探索心和学习能力。',
  avatar: '/吴磊简历照.jpg',
  location: '西安',
  status: '在读，寻找实习机会',
  email: '1131516293@qq.com',
  phone: '13152863007',
  linkedin: 'https://linkedin.com/in/example',
  github: 'https://github.com/example',
};
