# Tauffer Consulting Website

Portfolio and services website for Tauffer Consulting, built with Next.js and deployed as a static site on GitHub Pages.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | Google Analytics tracking ID |

For GitHub Actions deployment, add this as a repository secret in **Settings > Secrets and variables > Actions**.

## Development

```bash
# Install dependencies
yarn install

# Run the development server
yarn dev

# Open http://localhost:3000
```

## Building

```bash
# Build static site (produces `out/` directory)
yarn build

# To preview locally:
npx serve out
```

## Publishing

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch, via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Custom Domain Setup

The `public/CNAME` file is configured for `www.taufferconsulting.com`. To use this custom domain:

1. In your domain registrar's DNS settings, add a CNAME record pointing `www` to `<your-github-username>.github.io`
2. In the GitHub repository, go to **Settings > Pages** and verify the custom domain
3. Enable "Enforce HTTPS"

For an apex domain (`taufferconsulting.com`), add A records pointing to GitHub Pages IPs (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

## Adding Portfolio Content

Portfolio articles are stored as Markdown files in the `_portfolio/` directory. To add a new article:

1. Create a new `.md` file in `_portfolio/` (e.g., `my_new_project.md`)
2. Add the required YAML frontmatter:

```yaml
---
title: 'Project Title'
excerpt: 'Short description of the project'
coverImage: '/assets/portfolio/my-image.jpg'
date: '2024-01-15T10:00:00.000Z'
tags:
  - Data Science
  - Cloud Solutions
author:
  name: Author Name
ogImage:
  url: '/assets/portfolio/my-image.jpg'
version: 'published'
---

Your article content in Markdown here...
```

3. Place the cover image in `public/assets/portfolio/`
4. Set `version: 'published'` to make it visible (use `'draft'` to hide it)
5. Push to `main` to trigger automatic deployment
