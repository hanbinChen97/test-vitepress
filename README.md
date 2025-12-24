# 上海安保服务集团网站项目

本项目是基于 VitePress 构建的上海安保服务集团官方网站，提供全方位的安保服务信息展示平台。

## 项目架构

### 目录结构
```
├── .vitepress/           # VitePress 配置和自定义主题
│   ├── cache/           # 缓存文件
│   ├── theme/           # 自定义主题
│   │   ├── components/  # 自定义组件
│   │   │   ├── Footer.vue
│   │   │   └── Header.vue
│   │   ├── MyLayout.vue  # 主布局组件
│   │   └── index.ts      # 主题入口文件
│   └── config.mts        # 站点配置文件
├── public/              # 静态资源文件
│   └── background.png
├── README.md            # 项目说明文档
├── index.md             # 首页内容
├── api-examples.md      # API 示例页面
└── markdown-examples.md # Markdown 示例页面
```

## Layout 结构

### 自定义布局 (MyLayout.vue)
项目使用了自定义的布局组件 `MyLayout.vue`，它扩展了 VitePress 的默认布局，并添加了自定义的头部和底部组件：

```vue
<template>
  <DefaultTheme.Layout>
    <template #nav-bar-before>
      <Header />
    </template>
    <template #footer>
      <Footer />
    </template>
  </DefaultTheme.Layout>
</template>
```

### 主题入口 (index.ts)
```typescript
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout
}
```

### 页面布局
- **首页**：使用 `layout: home` 布局，并通过自定义 HTML 和 CSS 实现了复杂的页面结构
- **其他页面**：默认使用 VitePress 的文档布局，包含侧边栏导航

## 如何修改项目

### 修改站点配置
编辑 `.vitepress/config.mts` 文件，可以修改：
- 站点标题、描述和语言
- 导航栏菜单项
- 侧边栏配置
- 其他主题配置

### 修改布局
编辑 `.vitepress/theme/MyLayout.vue` 文件，可以：
- 修改页面整体布局结构
- 调整自定义组件的位置
- 添加或删除布局元素

### 修改组件
编辑 `.vitepress/theme/components/` 目录下的组件文件：
- `Header.vue`：修改网站头部
- `Footer.vue`：修改网站底部

### 修改样式
样式主要通过以下方式管理：
1. 在组件内部使用 `<style scoped>`
2. 在 Markdown 文件中直接添加 `<style>` 标签（如首页 `index.md`）
3. 可以考虑添加全局样式文件

## 如何添加内容

### 添加新页面
1. 在根目录下创建新的 Markdown 文件，如 `new-page.md`
2. 在文件头部添加 Frontmatter 配置：
   ```markdown
   ---
   title: 新页面标题
   ---
   ```
3. 编写页面内容
4. 在 `.vitepress/config.mts` 中添加导航或侧边栏链接

### 添加新栏目
1. 创建新的目录，如 `news/`
2. 在目录中创建 `index.md` 作为栏目首页
3. 创建其他 Markdown 文件作为子页面
4. 在 `.vitepress/config.mts` 中配置侧边栏

### 添加静态资源
1. 将资源文件放入 `public/` 目录
2. 在页面中使用绝对路径引用，如 `/background.png`

## 开发流程

### 安装依赖
```bash
pnpm install
```

### 启动开发服务器
```bash
pnpm dlx vitepress dev
```

### 构建生产版本
```bash
pnpm dlx vitepress build
```

### 预览生产版本
```bash
pnpm dlx vitepress preview
```

## 技术栈
- **VitePress**：基于 Vue 3 的静态站点生成器
- **Vue 3**：前端框架
- **TypeScript**：类型安全的 JavaScript 超集
- **Markdown**：内容编写格式

## 注意事项
- 修改配置后需要重新启动开发服务器
- 自定义组件需要遵循 Vue 3 的 Composition API
- 静态资源请放入 `public/` 目录
- 首页的自定义 HTML 和 CSS 较多，修改时请谨慎
