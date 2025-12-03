# Portfolio

Personal portfolio website showcasing projects, experience, and skills. Built with Next.js and Once UI, featuring an MDX-based content system for projects and blog posts, an about / CV page, and a gallery.

**Live Site:** [jesusaguilar.net](https://jesusaguilar.net)

![Portfolio Home Page](public/images/og/home.jpg)

## Overview

This portfolio features a clean, modern design with:

- **Top Navigation Bar**: Easy access to Home, About, Work, Gallery sections with dark mode toggle
- **Left Sidebar**: Quick navigation to different sections (Introduction, Work Experience, Education, Activities & Leadership, Technical Skills)
- **Main Content Area**: Profile header with avatar, name, role, and social links (GitHub, LinkedIn, Email)
- **Responsive Layout**: Optimized for all screen sizes with a timeless design
- **Professional Presentation**: Clean aesthetic focused on clearly presenting professional information

Built using the [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) template by [Once UI](https://once-ui.com), customized with personal projects, work experience, and technical skills.

## Getting started

**1. Install dependencies**
```
npm install
```

**2. Run dev server**
```
npm run dev
```

**3. Edit config**
```
src/resources/once-ui.config.ts
```

**4. Edit content**
```
src/resources/content.tsx
```

**5. Create blog posts / projects**
```
Add a new .mdx file to src/app/blog/posts or src/app/work/projects
```

This portfolio was built with [Once UI](https://once-ui.com) for [Next.js](https://nextjs.org). It requires Node.js v18.17+.

## Deployment

The portfolio is configured for static export and deployed on Netlify. See `DEPLOY.md` for deployment instructions.

## Documentation

Docs available at: [docs.once-ui.com](https://docs.once-ui.com/docs/magic-portfolio/quick-start)

## Features

### Once UI
- All tokens, components & features of [Once UI](https://once-ui.com)

### SEO
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

### Design
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

### Content
- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

### Localization
- A localized, earlier version of Magic Portfolio is available with the next-intl library
- To use localization, switch to the 'i18n' branch

## About

Portfolio of Jesus Aguilar-Andrade - Software Engineer specializing in Full-Stack Development, Machine Learning, and Computer Vision.

- **Website:** [jesusaguilar.net](https://jesusaguilar.net)
- **GitHub:** [Cetykon](https://github.com/Cetykon)
- **LinkedIn:** [jesusaguilardev](https://www.linkedin.com/in/jesusaguilardev)

## Credits

Built with [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) template by [Once UI](https://once-ui.com).

## License

Distributed under the CC BY-NC 4.0 License.
- Attribution is required.
- Commercial usage is not allowed.
- You can extend the license to [Dopler CC](https://dopler.app/license) by purchasing a [Once UI Pro](https://once-ui.com/pricing) license.

See `LICENSE.txt` for more information.
