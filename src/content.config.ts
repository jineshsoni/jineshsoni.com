import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/** Case studies — one Markdown file per flagship project. */
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      /** The core tension of the project, in one or two sentences. */
      tension: z.string(),
      /** Exactly what I owned — keeps credit honest on team projects. */
      scope: z.string(),
      /** Used as meta description — keep it under ~160 characters. */
      summary: z.string().max(170),
      company: z.string(),
      role: z.string(),
      period: z.string(),
      order: z.number(),
      featured: z.boolean().default(true),
      /** Brand colour used for the card wash and accents. */
      brand: z.string(),
      platforms: z.array(z.string()),
      tech: z.array(z.string()),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      links: z
        .object({
          website: z.url().optional(),
          playStore: z.url().optional(),
          appStore: z.url().optional(),
        })
        .default({}),
      icon: image().optional(),
      /** Phone screenshots (portrait). */
      screens: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      /** Wide website / marketing screenshot. */
      website: z.object({ src: image(), alt: z.string() }).optional(),
    }),
});

/** Work history, newest first. */
const jobs = defineCollection({
  loader: file('./src/content/jobs.json'),
  schema: z.object({
    company: z.string(),
    /** One-line description of the company / product. */
    tagline: z.string(),
    url: z.url().optional(),
    role: z.string(),
    location: z.string(),
    start: z.string(),
    end: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()),
    tech: z.array(z.string()).default([]),
  }),
});

/** Smaller / older projects shown in the archive table on /work/. */
const projects = defineCollection({
  loader: file('./src/content/projects.json'),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    madeAt: z.string().optional(),
    description: z.string(),
    tech: z.array(z.string()),
    links: z
      .object({
        github: z.url().optional(),
        website: z.url().optional(),
        playStore: z.url().optional(),
        appStore: z.url().optional(),
      })
      .default({}),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(170),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { work, jobs, projects, blog };
