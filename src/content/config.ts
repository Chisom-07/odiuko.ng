import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().default('Ruth Ayogu'),
  }),
});

export const collections = {
  blog: blogCollection,
};