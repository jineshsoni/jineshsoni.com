import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { getPosts, getWork } from '@/lib/content';
import { BLOG_ENABLED, SITE } from '@/consts';

type Card = {
  eyebrow: string;
  title: string;
  subtitle: string;
  brand?: string;
};

export const getStaticPaths = (async () => {
  const work = await getWork();
  const posts = await getPosts();
  const pages: { route: string; card: Card }[] = [
    {
      route: 'index',
      card: {
        eyebrow: 'jineshsoni.com',
        title: 'Software that works after the demo.',
        subtitle: 'AI & mobile architect · On-device AI in production · 600K+ downloads',
      },
    },
    {
      route: 'work',
      card: {
        eyebrow: 'Work',
        title: 'Apps I’ve architected, built and shipped.',
        subtitle: work.map((w) => w.data.title).join(' · '),
      },
    },
    ...(BLOG_ENABLED
      ? [
          {
            route: 'blog',
            card: {
              eyebrow: 'Blog',
              title: 'Notes from the build.',
              subtitle: 'Flutter, mobile architecture, on-device AI and engineering leadership.',
            },
          },
        ]
      : []),
    ...work.map((w) => ({
      route: `work/${w.id}`,
      card: {
        eyebrow: `Case study · ${w.data.role}`,
        title: w.data.title,
        subtitle: w.data.tagline,
        brand: w.data.brand,
      },
    })),
    ...posts.map((p) => ({
      route: `blog/${p.id}`,
      card: { eyebrow: 'Blog', title: p.data.title, subtitle: p.data.description },
    })),
  ];
  return pages.map(({ route, card }) => ({ params: { route }, props: card }));
}) satisfies GetStaticPaths;

const require = createRequire(import.meta.url);
const font = (pkg: string, file: string) => readFile(require.resolve(`${pkg}/files/${file}`));

let fonts: Awaited<ReturnType<typeof loadFonts>> | undefined;
async function loadFonts() {
  const [display, body, bodyBold] = await Promise.all([
    font('@fontsource/instrument-serif', 'instrument-serif-latin-400-normal.woff'),
    font('@fontsource/inter', 'inter-latin-400-normal.woff'),
    font('@fontsource/inter', 'inter-latin-600-normal.woff'),
  ]);
  return [
    { name: 'Display', data: display, weight: 400 as const, style: 'normal' as const },
    { name: 'Inter', data: body, weight: 400 as const, style: 'normal' as const },
    { name: 'Inter', data: bodyBold, weight: 600 as const, style: 'normal' as const },
  ];
}

// Tiny hyperscript helper so we don't need React/JSX for satori.
type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, ...children: (Node | string)[]): Node => ({
  type,
  props: { style: { display: 'flex', ...style }, children },
});

export const GET: APIRoute = async ({ props }) => {
  const { eyebrow, title, subtitle, brand = '#3f37c9' } = props as Card;
  fonts ??= await loadFonts();

  const titleSize = title.length > 60 ? 76 : title.length > 30 ? 96 : 124;

  const svg = await satori(
    h(
      'div',
      {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        backgroundColor: '#faf9f7',
        backgroundImage: `radial-gradient(circle at 100% 0%, ${brand}22 0%, transparent 50%)`,
        fontFamily: 'Inter',
        color: '#121214',
      },
      h(
        'div',
        { alignItems: 'center', justifyContent: 'space-between' },
        h(
          'div',
          { alignItems: 'center', gap: '18px' },
          h(
            'div',
            {
              width: '64px',
              height: '64px',
              borderRadius: '999px',
              backgroundColor: '#121214',
              color: '#faf9f7',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Display',
              fontSize: '30px',
            },
            'js',
          ),
          h('div', { fontSize: '28px', fontWeight: 600 }, SITE.name),
        ),
        h(
          'div',
          {
            fontSize: '22px',
            fontWeight: 600,
            padding: '10px 22px',
            borderRadius: '999px',
            border: '2px solid #e6e3dc',
            backgroundColor: '#ffffff',
            color: '#33333b',
          },
          eyebrow,
        ),
      ),
      h(
        'div',
        { flexDirection: 'column', gap: '24px' },
        h(
          'div',
          {
            fontFamily: 'Display',
            fontSize: `${titleSize}px`,
            lineHeight: 1,
            letterSpacing: '-0.015em',
            maxWidth: '1000px',
          },
          title,
        ),
        h(
          'div',
          { fontSize: '30px', color: '#64646e', maxWidth: '980px', lineHeight: 1.35 },
          subtitle,
        ),
      ),
      h(
        'div',
        {
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '22px',
          color: '#64646e',
        },
        h('div', {}, 'jineshsoni.com'),
        h('div', { width: '220px', height: '14px', borderRadius: '999px', backgroundColor: brand }),
      ),
    ),
    { width: 1200, height: 630, fonts },
  );

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
