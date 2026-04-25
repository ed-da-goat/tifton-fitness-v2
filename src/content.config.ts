import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const staffCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/staff' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    credentials: z.array(z.string()),
    bio: z.string(),
    image: z.string().optional(),
  }),
});

const membershipCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/membership' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    price: z.number(),
    period: z.string(),
    tagline: z.string(),
    features: z.array(z.string()),
    cta: z.string(),
    featured: z.boolean().default(false),
  }),
});

const faqCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faq' }),
  schema: z.object({
    order: z.number(),
    category: z.string(),
    question: z.string(),
    answer: z.string(),
  }),
});

export const collections = {
  staff: staffCollection,
  membership: membershipCollection,
  faq: faqCollection,
};
