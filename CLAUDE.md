# 昕禾居家清潔官方網站

## 技術架構

- **框架**: Quasar v2 + Vue 3 (Options API + Composition API)
- **建置工具**: @quasar/app-webpack
- **模式**: SSG (Static Site Generation) — 使用 `quasar-app-extension-ssg`
- **CSS**: SCSS, Quasar 內建元件樣式
- **圖示**: MDI v7 (Material Design Icons)
- **SEO**: Quasar Meta plugin, 每頁獨立 meta 標籤, sitemap.xml, robots.txt

## 常用指令

```bash
npm run dev          # 一般 SPA 開發模式
npm run dev:ssg      # SSG 開發模式
npm run build:ssg    # 產生 SSG 靜態頁面到 dist/ssg/
```

## 部署流程 (GitHub Pages)

### 自動部署

已設定 GitHub Actions (`.github/workflows/deploy.yml`)，push 到 `main` 分支會自動：

1. `npm ci` 安裝依賴
2. `npx quasar ssg generate` 產生靜態頁面
3. 部署 `dist/ssg/` 到 GitHub Pages

### GitHub Pages 設定

- **Repo**: `git@github.com:nightsea324/home-cleaning-website.git`
- **網址**: https://nightsea324.github.io/home-cleaning-website/
- **Pages Source**: GitHub Actions（在 repo Settings > Pages 中設定）
- **publicPath**: `/home-cleaning-website/`（在 `quasar.config.js` 的 `build.publicPath` 設定，對應 GitHub Pages 子路徑）

### 手動部署 / 除錯

```bash
# 本機產生靜態頁面
npx quasar ssg generate

# 本機預覽產生的靜態頁面
npx quasar ssg serve dist/ssg

# 推送觸發自動部署
git push origin main
```

### 注意事項

- `sitemap.xml` 和 `robots.txt` 在 `public/` 目錄中，網域已設為 `nightsea324.github.io/home-cleaning-website`
- 如果未來綁定自訂網域，需同步更新 `sitemap.xml`、`robots.txt` 以及 `quasar.config.js` 的 `publicPath`
- SSG 路由在 `quasar.config.js` 的 `ssg.routes` 中定義，新增頁面時記得加入

## 專案結構

```
src/
├── layouts/MainLayout.vue   # 共用佈局（Header + Footer + Drawer）
├── pages/
│   ├── IndexPage.vue        # 首頁
│   ├── ServicesPage.vue     # 服務項目
│   ├── AboutPage.vue        # 關於我們
│   ├── ContactPage.vue      # 聯絡/預約
│   └── ErrorNotFound.vue    # 404
├── css/
│   ├── app.scss             # 全域樣式 + 手機 RWD
│   └── quasar.variables.scss # 主題色彩變數
└── router/routes.js         # 路由定義
```
