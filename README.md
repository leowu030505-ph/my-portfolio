# 个人作品集网站

这是一个现代化的个人作品集网站，专门为前端产品经理和品牌运营角色设计。

## 技术栈

- **React 18** - 前端框架
- **TypeScript** - 类型安全的JavaScript
- **Vite** - 快速的构建工具
- **Tailwind CSS v3** - 实用优先的CSS框架
- **Framer Motion** - 流畅的动画库
- **Lucide React** - 美观的图标库
- **clsx & tailwind-merge** - 类名工具

## 功能特性

### 1. 导航系统
- 固定顶部导航栏，滚动时背景渐变模糊
- 导航项高亮显示当前区域
- 移动端汉堡菜单，全屏滑入动画
- 右上角下载简历按钮
- 深色/浅色主题切换

### 2. 首页Hero区域
- 全屏高度设计
- 个人信息展示
- 双CTA按钮（产品案例/运营案例）
- 微交互动画
- 向下滚动提示

### 3. 关于我
- 个人照片
- 个人介绍
- 关键数据卡片
- 联系方式信息

### 4. 核心能力
- 标签页切换（产品经理/品牌运营）
- 能力分类展示
- 进度条可视化
- 悬停显示详情

### 5. 产品案例
- 响应式网格布局
- 标签筛选功能
- 点击展开详情模态框
- 完整的项目信息展示（背景、职责、方案、数据成果）

### 6. 运营案例
- 时间线布局
- 平台筛选
- 数据可视化
- 物料展示

### 7. 职业经历
- 垂直时间线
- 可展开的详细信息
- 成就列表

### 8. 联系我
- 联系表单
- 联系方式信息
- 社交媒体链接
- 预约电话沟通按钮

### 9. 页脚
- 快速导航
- 版权信息
- 回到顶部按钮
- 最后更新时间

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # 导航栏组件
│   │   ├── Hero.tsx             # Hero区域组件
│   │   ├── About.tsx            # 关于我组件
│   │   ├── Skills.tsx           # 核心能力组件
│   │   ├── ProductProjects.tsx  # 产品案例组件
│   │   ├── OperationCases.tsx   # 运营案例组件
│   │   ├── Experience.tsx       # 职业经历组件
│   │   ├── Contact.tsx          # 联系我组件
│   │   └── Footer.tsx           # 页脚组件
│   ├── data.ts                  # 示例数据
│   ├── types.ts                 # TypeScript类型定义
│   ├── utils.ts                 # 工具函数
│   ├── App.tsx                  # 主应用组件
│   ├── main.tsx                 # 应用入口
│   └── index.css                # 全局样式
├── index.html                   # HTML模板
├── package.json                 # 项目配置
├── tsconfig.json                # TypeScript配置
├── vite.config.ts               # Vite配置
├── tailwind.config.js           # Tailwind CSS配置
└── postcss.config.js            # PostCSS配置
```

## 自定义内容

### 1. 修改个人信息

编辑 `src/data.ts` 中的 `personalInfo` 对象：

```typescript
export const personalInfo = {
  name: '您的姓名',
  title: '您的职位',
  slogan: '您的个人标语',
  avatar: '头像URL',
  location: '所在城市',
  status: '工作状态',
  email: '邮箱地址',
  phone: '电话号码',
  linkedin: 'LinkedIn链接',
  github: 'GitHub链接'
};
```

### 2. 更新产品案例

编辑 `src/data.ts` 中的 `productProjects` 数组，添加或修改项目信息。

### 3. 更新运营案例

编辑 `src/data.ts` 中的 `operationCases` 数组，添加或修改案例信息。

### 4. 更新职业经历

编辑 `src/data.ts` 中的 `experiences` 数组，更新工作经历信息。

### 5. 更新技能

编辑 `src/data.ts` 中的 `productSkills` 和 `operationSkills` 数组，自定义技能信息。

### 6. 更新关键数据

编辑 `src/data.ts` 中的 `keyMetrics` 数组，更新个人数据卡片。

## 配色方案

- **主色**: 深青色 (#0EA5E9) - 专业、信任
- **产品模块**: 蓝色 (#3B82F6)
- **运营模块**: 橙色 (#F97316)
- **数据强调**: 绿色 (#10B981)
- **错误**: 红色 (#EF4444)

## 部署

### Vercel 部署（推荐）

1. 登录或注册 [Vercel](https://vercel.com)
2. 导入您的Git仓库
3. 点击"Deploy"

### 其他部署方式

项目构建后的 `dist` 目录可以部署到任何静态网站托管服务：

- Netlify
- GitHub Pages
- Cloudflare Pages
- 传统的Web服务器（Nginx、Apache等）

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

MIT License
