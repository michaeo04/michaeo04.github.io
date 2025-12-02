# Media Guide: Images and Videos

## Quick Reference

### Image Syntax
```markdown
![Alt text](/images/category/filename.jpg)
![Alt text](/images/category/filename.jpg "Hover title")
```

### Video Syntax
```markdown
<video controls width="100%">
  <source src="/videos/category/filename.mp4" type="video/mp4">
  Your browser doesn't support video playback.
</video>
```

## Folder Structure

```
public/
├── images/
│   ├── projects/    # Project screenshots, diagrams
│   ├── memories/    # Personal photos from memories
│   ├── movies/      # Movie posters, stills
│   └── music/       # Album covers, artist photos
└── videos/
    ├── projects/    # Project demos, tutorials
    └── memories/    # Personal video clips
```

## File Naming Conventions

- Use lowercase letters
- Use hyphens instead of spaces: `beach-sunset.jpg`
- Be descriptive: `portfolio-homepage-screenshot.png`
- Add dates for memories: `2024-07-15-danang-beach.jpg`

## Recommended Image Sizes

- **Full-width images**: 1200-1600px width
- **Thumbnails**: 400-600px width
- **Max file size**: Try to keep under 500KB per image

## Recommended Video Formats

- **Format**: MP4 (H.264 codec)
- **Resolution**: 720p or 1080p
- **Max file size**: Keep under 50MB for web performance

## Video Attributes

```markdown
<!-- Autoplay (muted required for autoplay) -->
<video autoplay muted loop width="100%">
  <source src="/videos/demo.mp4" type="video/mp4">
</video>

<!-- With poster image (shows before play) -->
<video controls poster="/images/video-poster.jpg" width="100%">
  <source src="/videos/demo.mp4" type="video/mp4">
</video>
```

## External Videos

### YouTube
```markdown
<iframe width="100%" height="400"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0" allowfullscreen>
</iframe>
```

### Vimeo
```markdown
<iframe width="100%" height="400"
  src="https://player.vimeo.com/video/VIDEO_ID"
  frameborder="0" allowfullscreen>
</iframe>
```

## Image Compression Tools

Before uploading, compress your images:
- **Online**: tinypng.com, squoosh.app
- **Desktop**: ImageOptim (Mac), FileOptimizer (Windows)

## Example: Complete Memory Post

```markdown
---
title: "Summer Trip to Da Nang"
date: 2024-07-15
location: "Da Nang, Vietnam"
description: "Beach vacation with friends"
---

## Day 1: Arrival

We arrived just in time for sunset.

![Sunset view](/images/memories/2024-07-15-sunset.jpg "Sunset at My Khe Beach")

## Beach Activities

![Beach volleyball](/images/memories/2024-07-15-volleyball.jpg)
![Swimming](/images/memories/2024-07-15-swimming.jpg)

## Video Highlights

<video controls width="100%">
  <source src="/videos/memories/2024-07-15-beach-day.mp4" type="video/mp4">
</video>

## Final Thoughts

An unforgettable trip with amazing people.
```

## Tips

1. **Always use forward slashes** in paths: `/images/...` (not `\images\...`)
2. **Paths start with `/`** to reference from the public directory root
3. **Test locally** before deploying to ensure images/videos load correctly
4. **Use alt text** for accessibility and SEO
5. **Compress media files** to keep your site fast

## GitHub Pages Deployment

When you push to GitHub, all files in the `public` directory will be deployed automatically. Large files (>100MB) may have issues - use external hosting for very large videos if needed.
