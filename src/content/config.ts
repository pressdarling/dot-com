import { defineCollection, z } from 'astro:content';

const portfolioItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()),
  image: z.string().optional(),
  url: z.string().url().optional(),
  featured: z.boolean().default(false),
});

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const cvCollection = defineCollection({
  type: 'data',
  schema: z.object({
    summary: z.string(),
    experience: z.array(
      z.object({
        title: z.string(),
        company: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        responsibilities: z.array(z.string()),
      })
    ),
    skills: z.array(z.string()),
    education: z.array(
      z.object({
        degree: z.string(),
        field: z.string(),
        institution: z.string(),
        graduationYear: z.number(),
      })
    ),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  portfolio: defineCollection({
    schema: portfolioItemSchema,
  }),
  projects: projectCollection,
  cv: cvCollection,
};
