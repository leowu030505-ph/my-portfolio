# Figma MCP 对接指南

## 什么是 Figma MCP？

Figma MCP (Model Context Protocol) 让 AI 可以直接读取和理解您的 Figma 设计文件，从而将设计稿自动转换为代码。

## 两种配置方式

### 1. 本地 MCP 服务器（推荐个人使用）

#### 前置要求
- 安装 Figma 桌面应用程序（不是网页版！）
- 确保 Figma 版本是最新的

#### 步骤

1. 打开 Figma 桌面应用
2. 进入任意一个设计文件
3. 点击顶部菜单栏的 **Figma** → **Preferences**（偏好设置）
4. 勾选 **"Enable local MCP server"**（启用本地 MCP 服务器）
5. 重启 Figma 桌面应用

### 2. 远程 MCP 服务器（团队/企业）

需要 Figma Professional、Organization 或 Enterprise 订阅计划。

## 如何与 Trae 对接？

当您在 Trae 中设置好 Figma MCP 后，您可以：

1. 在 Figma 中选择您想要实现的组件或页面
2. 右键 → **Copy Link**（复制链接）
3. 在 Trae 中粘贴这个链接
4. 告诉 AI："把这个设计稿转换为 React 组件"
5. AI 会自动读取设计文件并生成代码

## 常用提示词示例

```
"把这个 Figma 设计稿转换成 React + Tailwind CSS 组件"
"实现这个 Hero 区域的视觉效果"
"为这个页面添加动画，要保持设计稿的样式"
```

## 替代方案：Pixso MCP（免费）

如果您没有 Figma 订阅，可以使用国产工具 **Pixso**，它提供完全免费的 MCP 功能：

1. 下载 Pixso 桌面客户端（版本 ≥ 2.2.0）
2. 在 Pixso 中打开设计文件
3. 点击左上角的 **Pixso** → **Pixso MCP** → **打开本地 MCP 服务器**
4. 在 Trae 中添加 Pixso MCP 配置

## 注意事项

- 确保设计文件有清晰的图层命名
- 使用组件和 Auto Layout 会让代码生成质量更高
- 复杂的动画效果可能需要手动调整
