import { getCollection, type CollectionEntry } from 'astro:content';
import { BLOG_ENABLED } from '@/consts';

export async function getWork() {
  const work = await getCollection('work');
  return work.sort((a, b) => a.data.order - b.data.order);
}

/** Published posts, newest first. Drafts are visible only in `astro dev`. */
export async function getPosts() {
  if (!BLOG_ENABLED) return [];
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

export const readingTime = (post: CollectionEntry<'blog'>) =>
  Math.max(1, Math.round((post.body ?? '').split(/\s+/).length / 220));
