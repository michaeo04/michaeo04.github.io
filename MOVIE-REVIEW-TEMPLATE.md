# Movie Review Template

This is a guide for creating movie reviews in your blog. Each review is a separate markdown file in `src/content/movies/`.

## File Naming Convention

Use kebab-case (lowercase with hyphens):
- ✅ `the-dark-knight.md`
- ✅ `parasite.md`
- ✅ `spirited-away.md`
- ❌ `The Dark Knight.md`
- ❌ `PARASITE.md`

## Required Frontmatter

```markdown
---
title: "Movie Title"
director: "Director Name"
year: 2024
watchedDate: 2024-12-03
rating: 8.5
thumbnail: "/images/movies/movie-poster.jpg"
genre: ["Drama", "Thriller", "Action"]
runtime: "2h 28min"
description: "A brief one-sentence description or tagline of the film"
---
```

### Field Explanations

- **title**: The official movie title (use quotes)
- **director**: The film's director name (use quotes)
- **year**: Release year (number, no quotes)
- **watchedDate**: When YOU watched it in YYYY-MM-DD format
- **rating**: Your rating from 0-10 (can use decimals like 8.5)
- **thumbnail**: Path to movie poster image (optional, but recommended)
  - Place images in `public/images/movies/`
  - Reference as `/images/movies/filename.jpg`
- **genre**: Array of genres in square brackets
  - Common genres: Drama, Comedy, Action, Thriller, Horror, Sci-Fi, Fantasy, Romance, Animation, Documentary
- **runtime**: Movie length in format "Xh Ymin" (optional)
- **description**: Short tagline or description (1-2 sentences max)

## Review Content Structure

After the frontmatter, write your review using markdown. Here's a suggested structure:

```markdown
## First Impressions

Your initial thoughts when you first watched the film...

## What Stood Out

### Subsection 1
Details about what impressed you...

### Subsection 2
More specific observations...

## Favorite Scenes

1. **Scene Name** - Why this scene matters
2. **Another Scene** - Your thoughts

## My Thoughts

Your personal reflection on the film...

## Why It Matters to Me

Personal connection to the movie...

## Recommendation

**Who should watch:** Target audience...

**When to watch:** Best context for viewing...

**Final Verdict:** Summary of your overall opinion...
```

## Writing Tips

1. **Be Personal**: This is YOUR reflection, not a professional review
2. **Use Quotes**: Include memorable lines from the film
3. **Add Context**: Explain when/why you watched it
4. **Be Honest**: Rate authentically - don't all have to be 10/10
5. **Include Details**: Specific scenes, performances, cinematography
6. **Markdown Formatting**:
   - Use `##` for main sections
   - Use `###` for subsections
   - Use `**bold**` for emphasis
   - Use `> Quote` for movie quotes
   - Use numbered or bulleted lists

## Example Frontmatter Variations

### Minimal (without thumbnail/genre)
```markdown
---
title: "The Matrix"
director: "The Wachowskis"
year: 1999
watchedDate: 2024-01-15
rating: 9
description: "A hacker discovers reality is a simulation and joins a rebellion"
---
```

### Complete (all fields)
```markdown
---
title: "Parasite"
director: "Bong Joon-ho"
year: 2019
watchedDate: 2024-11-20
rating: 9.5
thumbnail: "/images/movies/parasite.jpg"
genre: ["Drama", "Thriller", "Dark Comedy"]
runtime: "2h 12min"
description: "A poor family schemes to become employed by a wealthy family by posing as unrelated, highly qualified individuals"
---
```

## Where to Find Movie Posters

1. **IMDb** - High quality official posters
2. **The Movie Database (TMDb)** - Great selection
3. **Google Images** - Search "movie title poster high resolution"
4. Save as JPG to `public/images/movies/`
5. Recommended size: 400-600px width

## File Location

Place all movie review files in:
```
src/content/movies/your-movie-name.md
```

Place all movie posters in:
```
public/images/movies/your-movie-poster.jpg
```

## Quick Start Template

Copy this into a new `.md` file:

```markdown
---
title: ""
director: ""
year:
watchedDate: 2024-12-03
rating:
thumbnail: "/images/movies/.jpg"
genre: ["", ""]
runtime: ""
description: ""
---

## First Impressions

## What Stood Out

## My Thoughts

## Final Verdict
```

## Access Your Reviews

After creating a review file:
1. Run `npm run build` to generate the site
2. Visit `/movies` to see all reviews
3. Click any review card to read the full review
4. Reviews are automatically sorted by watch date (newest first)

## Tips for Great Reviews

- **Write soon after watching** - Capture fresh impressions
- **Include spoiler warnings** if needed: `⚠️ **Spoiler Warning**`
- **Compare to other films** - Reference similar movies
- **Discuss themes** - What the film is really about
- **Note technical aspects** - Cinematography, score, editing
- **Share emotional impact** - How did it make you feel?
- **Recommend (or don't)** - Who would enjoy this?

Happy reviewing! 🎬
