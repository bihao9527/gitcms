# 玄易阁 - 专业风水命理知识平台

玄易阁是一个基于GitBase技术架构构建的专业风水命理知识平台，传承中华传统文化精髓，融合现代科学理念，为用户提供专业的风水理论、八字命理、家居布局、办公环境等知识。

![玄易阁](https://toimg.xyz/file/5aa892c8e8385232fcdf3.png)


## 在Vercel上部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fqiayue%2Fgitbase&project-name=玄易阁&repository-name=玄易阁&external-id=https%3A%2F%2Fgithub.com%2Fqiayue%2Fgitbase%2Ftree%2Fmain)


## 项目特色

- **无数据库架构**: 利用GitHub作为内容存储和管理系统，无需传统数据库
- **动态内容渲染**: 使用Next.js服务端渲染技术，内容动态更新
- **Markdown支持**: 支持Markdown格式编写内容，便于编辑和版本控制
- **管理后台**: 内置管理面板，方便内容管理
- **响应式设计**: 使用Tailwind CSS构建，完全响应式设计
- **SEO友好**: 针对搜索引擎优化，支持动态元数据
- **易于部署**: 一键部署到Vercel平台，简单快捷

## 环境要求

- Node.js (版本14或更高)
- npm (随Node.js一起安装)
- Git
- GitHub账户
- Vercel账户 (用于部署)

## 安装步骤

1. 克隆仓库:
   ```
   git clone https://github.com/qiayue/gitbase.git
   cd gitbase
   
   git clone https://github.com/bihao9527/gitcms.git
   cd gitcms
   ```

2. 安装依赖:
   ```
   npm install
   ```

3. 在根目录创建 `.env.local` 文件，并添加以下内容:
   ```
   DOMAIN=你的域名
   GITHUB_TOKEN=你的github个人访问令牌
   GITHUB_OWNER=你的github用户名
   GITHUB_REPO=你的仓库名称
   ACCESS_PASSWORD=你的安全访问密码
   JWT_SECRET=your_jwt_secret
   ```

4. 设置GitHub仓库:
   - 在GitHub上创建一个新仓库
   - 在仓库中创建两个文件夹: `data/json` 和 `data/md`
   - 在 `data/json` 中创建一个名为 `resources.json` 的文件，内容为空数组: `[]`

5. 运行开发服务器:
   ```
   npm run dev
   ```

访问 `http://localhost:3000` 查看你的玄易阁实例在本地运行。

## 部署说明

1. 将代码推送到GitHub。
2. 登录Vercel，从你的GitHub仓库创建新项目。
3. 在Vercel中配置环境变量:
   - `GITHUB_TOKEN`
   - `GITHUB_OWNER`
   - `GITHUB_REPO`
   - `ACCESS_PASSWORD`
4. 部署项目。

详细的部署指南，请参考我们的 [安装和部署指南](https://gitbase.app/posts/gitbase-install-guide)。

## 使用说明

- 访问 `/admin` 路径，使用你的 `ACCESS_PASSWORD` 进入管理后台。
- 通过管理界面创建和编辑文章。
- 在管理面板中管理资源。
- 所有更改都会自动同步到你的GitHub仓库。

## 贡献指南

我们欢迎对玄易阁项目的贡献！请阅读我们的 [贡献指南](https://gitbase.app/posts/how-to-contributing-to-gitbase) 了解我们的行为准则和提交拉取请求的流程。

## 许可证

玄易阁是基于 [MIT许可证](https://github.com/qiayue/gitbase/?tab=MIT-1-ov-file) 的开源软件。

## 技术支持

如果你遇到任何问题或有疑问，请在GitHub仓库上提交issue。

## 致谢

玄易阁基于以下开源库构建:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)

我们感谢这些项目的维护者和贡献者。