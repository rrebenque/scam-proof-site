import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const scams = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/scams' }),
  schema: z.object({
    episode: z.number(),
    title: z.string(),
    pageTitle: z.string(),
    answer: z.string(),
    rightMove: z.string(),
    markets: z.array(z.string()),
    videoId: z.string().optional(),
    videoShort: z.boolean().default(false),
    steps: z.array(z.string()).default([]),
    redFlags: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    reviewed: z.string(),
  }),
});

export const collections = { scams };
