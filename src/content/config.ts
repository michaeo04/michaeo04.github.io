import { defineCollection, z } from 'astro:content';

// Projects collection
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    thumbnail: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

// Memories collection
const memories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string().optional(),
    photos: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

// Movies collection - Individual film reviews
const movies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // Movie title
    director: z.string(), // Director name
    year: z.number(), // Release year
    watchedDate: z.date(), // When you watched it
    rating: z.number().min(0).max(10), // Your rating out of 10
    thumbnail: z.string().optional(), // Movie poster/thumbnail path
    genre: z.array(z.string()).optional(), // Genres: drama, comedy, etc.
    runtime: z.string().optional(), // e.g., "2h 28min"
    description: z.string(), // Short description/tagline
  }),
});

// Music collection
const music = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    artist: z.string().optional(),
    spotifyUrl: z.string().url().optional(),
    description: z.string().optional(),
    type: z.enum(['playlist', 'album', 'track']).default('playlist'),
  }),
});

// About collection
const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    bio: z.string().optional(),
    socialLinks: z.array(z.object({
      platform: z.string(),
      url: z.string().url(),
    })).optional(),
  }),
});

export const collections = {
  projects,
  memories,
  movies,
  music,
  about,
};
