import { glob } from 'astro/loaders';
import { defineCollection, z, type ImageFunction } from 'astro:content';

const imageSchema = (image: ImageFunction) =>
    z.object({
        src: image(),
        alt: z.string().optional()
    });

const seoSchema = (image: ImageFunction) =>
    z.object({
        title: z.string().min(5).max(120).optional(),
        description: z.string().min(15).max(160).optional(),
        image: imageSchema(image).optional(),
        pageType: z.enum(['website', 'article']).default('website')
    });

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            excerpt: z.string().optional(),
            publishDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            isFeatured: z.boolean().default(false),
            tags: z.array(z.string()).default([]),
            seo: seoSchema(image).optional()
        })
});

const pages = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            seo: seoSchema(image).optional()
        })
});

const projects = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            publishDate: z.coerce.date(),
            isFeatured: z.boolean().default(false),
            seo: seoSchema(image).optional()
        })
});

const papers = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/papers' }),
    schema: z.object({
        title: z.string(),
        authors: z.string(),
        venue: z.string().optional(),
        paperUrl: z.string().url().optional(),
        publishDate: z.coerce.date(),
        note: z.string().optional(),
        selected: z.boolean().optional(),
    })
});

const datasets = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/datasets' }),
    schema: z.object({
        title: z.string(),
        authors: z.string(),
        site: z.string().optional(),
        url: z.string().url().optional(),
        publishDate: z.coerce.date(),
        note: z.string().optional(),
    })
});

const patents = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/patents' }),
    schema: z.object({
        title: z.string(),
        inventors: z.string(),
        country: z.string().optional(),
        patentNumber: z.string().optional(),
        url: z.string().url().optional(),
        publishDate: z.coerce.date(),
        note: z.string().optional(),
    })
});

export const collections = { blog, pages, projects, papers, datasets, patents };