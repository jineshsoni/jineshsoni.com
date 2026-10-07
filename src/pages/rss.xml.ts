import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { BLOG_ENABLED, SITE } from '@/consts';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => BLOG_ENABLED && !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  return rss({
    title: `${SITE.name} — Blog`,
    description: 'Flutter, mobile architecture, on-device AI and engineering leadership.',
    site: context.site!,
    trailingSlash: true,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      categories: p.data.tags,
      link: `/blog/${p.id}/`,
    })),
    customData: '<language>en</language>',
  });
}
