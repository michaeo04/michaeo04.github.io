import { getCollection, type CollectionEntry } from 'astro:content';

export async function getAllProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) =>
    b.data.date.getTime() - a.data.date.getTime()
  );
}

export async function getFeaturedProjects() {
  const projects = await getAllProjects();
  return projects.filter(p => p.data.featured);
}

export async function getProjectsByTag(tag: string) {
  const projects = await getAllProjects();
  return projects.filter(p => p.data.tags?.includes(tag));
}

export async function getAllMemories() {
  const memories = await getCollection('memories');
  return memories.sort((a, b) =>
    b.data.date.getTime() - a.data.date.getTime()
  );
}

export async function getAllMovies() {
  const movies = await getCollection('movies');
  return movies.sort((a, b) =>
    b.data.watchedDate.getTime() - a.data.watchedDate.getTime()
  );
}

export async function getAllMusic() {
  const music = await getCollection('music');
  return music;
}

export async function getAbout() {
  const about = await getCollection('about');
  return about[0]; // Only one about page
}

export function formatDate(date: Date): string {
  try {
    return new Intl.DateFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  } catch {
    // Fallback for environments where Intl is not available
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }
}
