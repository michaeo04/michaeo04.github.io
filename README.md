# Michael Eo - Personal Portfolio

My personal portfolio built with Astro and deployed on GitHub Pages.

## Tech Stack

- **Astro 5.x** - Modern static site generator
- **TypeScript** - Type-safe development
- **Pure CSS** - No framework overhead, full control
- **GitHub Pages** - Free hosting with CI/CD

## Features

- **Content Collections**: Type-safe Markdown content with Zod validation
- **Category-Based Navigation**: Projects, Movies, Music, Memories, About
- **Responsive Design**: Works beautifully on all devices
- **Warm Aesthetic**: Cozy beige color palette
- **SEO Optimized**: Proper meta tags, sitemap, and semantic HTML

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:3000`

## Project Structure

```
michaeo04.github.io/
├── .github/workflows/   # GitHub Actions deployment
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── layout/      # Layout components
│   │   ├── ui/          # UI components
│   │   └── content/     # Content-specific components
│   ├── content/         # Markdown content
│   │   ├── projects/
│   │   ├── movies/
│   │   ├── music/
│   │   ├── memories/
│   │   └── about/
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes (file-based routing)
│   ├── styles/          # Global styles and design tokens
│   └── utils/           # Helper functions
├── astro.config.mjs     # Astro configuration
└── package.json
```

## Adding Content

### New Project

1. Create file: `src/content/projects/my-project.md`
2. Add frontmatter:
   ```yaml
   ---
   title: "Project Title"
   description: "Brief description"
   date: 2024-12-01
   tags: ["tag1", "tag2"]
   featured: true
   github: "https://github.com/..."
   ---
   ```
3. Write content in Markdown
4. Commit and push - auto-deploys!

### New Memory

1. Create file: `src/content/memories/my-memory.md`
2. Add frontmatter with title, date, location, photos
3. Write your story in Markdown
4. Add images to `public/images/memories/`
5. Commit and push

**No coding required** - just create Markdown files and push to GitHub!

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### GitHub Pages Setup

1. Go to repository **Settings** → **Pages**
2. Source: **GitHub Actions**
3. The workflow will run automatically on every push

The site will be live at: `https://michaeo04.github.io`

## Design System

The site uses CSS custom properties for consistent styling:

- **Colors**: Warm beige palette (#FAF8F5, #D4A574, #3E3832)
- **Typography**: Georgia (headings), System fonts (body)
- **Spacing**: 4px base unit with consistent scale
- **Layout**: 3-column grid (desktop), responsive breakpoints

## Phase 2 (Future)

- Category-aware AI chatbot
- Integration with Cloudflare Workers
- RAG (Retrieval-Augmented Generation) for intelligent responses
- Chat history per category

## License

This is a personal portfolio project.
