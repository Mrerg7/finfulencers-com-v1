import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Placeholder collection for future content (blog posts, resources, etc.)
// Currently unused on the landing page but ready for expansion.
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { resources };
