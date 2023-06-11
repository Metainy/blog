# Metainy Blog

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
[![Astro](https://img.shields.io/static/v1?style=for-the-badge&label=Astro&message=2.0&logo=astro&color=orange&labelColor=white&logoColor=black)](https://astro.build/)
[![License](https://img.shields.io/github/license/metainy/blog?color=31373b&style=for-the-badge)](LICENSE)
[![GitHub Workflow](https://img.shields.io/github/actions/workflow/status/metainy/blog/deploy.yml?color=green&logo=github&style=for-the-badge)]((https://github.com/Metainy/blog/actions/workflows/deploy.yml))
[![Blog](https://img.shields.io/badge/Metainy%20Blog-167794?style=for-the-badge)](https://metainy.me)

This is my personal corner of the internet where I document what I am working on and share my thoughts,
ideas, and all sorts of random stuff that comes to mind.

It is also intended as an exploration of the front-end world and a way for me to tinker with
some of the tools and frameworks that I find interesting.

## 💻 Tech Stack

- **Main Framework** - [Astro](https://astro.build/)
- **Type Checking** - [TypeScript](https://www.typescriptlang.org/)
- **Component Framework** - [Vue.JS](https://vuejs.org/)
- **Styling** - [TailwindCSS](https://tailwindcss.com/)
- **Icons** - [Iconify](https://iconify.design/)
- **Search** - [PageFind](https://pagefind.app/)
- **Comments** - [Giscus](https://giscus.app/)
- **Headless CMS** - [Tina](https://tina.io/)
- **Deployment** - [DigitalOcean](https://www.digitalocean.com/)

## 🔥 Features

- [x] Type-safe markdown
- [x] Highly customizable
- [x] Fully responsive on desktops, tablets, and smartphones
- [x] Light and dark mode support
- [x] SEO-friendly with dynamic OG image support
- [x] Sitemap and automatic RSS feed
- [x] Fast performance
- [x] Similar post suggestion
- [x] Tags and categories support
- [x] Post comments through Giscus
- [x] Support for draft posts and pagination
- [x] Search functionality with PageFind
- [x] Post social media sharing
- [x] Google Analytics implemented
- [x] Followed best practices (debatable)

## 📌 Roadmap

- [ ] Optimize posts search
- [ ] Switch to Pretty Code plugin
- [ ] Add skills section in about Page
- [ ] Add similar posts for every blog post
- [ ] Implement custom resources section
- [ ] Implement custom snippets section
- [ ] Isolate blog categories into a separate collection with added customization based on category
- [ ] Re-enable and create a custom style for Giscus comments
- [ ] Some styling touches and redistribute components
- [ ] Switch to Nuxt with Nuxt Content maybe? Too soon?

## 👷 Development

The source wasn't meant to be a template or theme.
It's mainly customized to suit my needs, but you're welcome to take anything that might be useful for you.

## 💻 Commands

All commands are run from the root of the project.

| Command            | Action                                       |
|:-------------------|:---------------------------------------------|
| `npm install`      | Installs dependencies                        |
| `npm run dev`      | Starts Astro local dev server                |
| `npm run dev:tina` | Starts Tina dev server along with astro      |
| `npm run build`    | Build your production site to `./dist/`      |
| `npm run preview`  | Preview your build locally, before deploying |

## 📃 Project Structure

Inside Astro project, you'll see the following folders and files:

```
/
├── .github/
│
├── public/
│   ├── admin/
│   ├── uploads/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── config/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   └── types.ts
│
├── tina/
│
└── package.json
```

## 🎗️ Acknowledgements

Design inspired by AstroWind template created by [onWidget](https://onwidget.com).  
Thanks to [Kevin Lee Drum](https://github.com/kevinleedrum) for the amazing animated table of content guide.

## 📜 License

This project is open source and available under the MIT [license](LICENSE).
