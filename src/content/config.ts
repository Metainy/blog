import { z, defineCollection } from "astro:content";
import { BLOG } from "@/config";

const blogCollection = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        publishDate: z.string().or(z.date()).transform((str) => new Date(str)),
        description: z.string().optional(),
        excerpt: z.string().optional(),
        cover: z.string().optional().default(BLOG.defaultCover),
        category: z.string().optional().default(BLOG.defaultCategory),
        tags: z.array(z.string()).optional().default([BLOG.defaultTag]),
        side: z.boolean().optional().default(true),
        featured: z.boolean().optional(),
        draft: z.boolean().optional(),
        comments: z.boolean().optional().default(true),
        // cover: image().refine((img) => img.width >= 1080, {
        //     message: "Cover image must be at least 1080 pixels wide!",
        // }).optional(),
    })
});

export const collections = {
    blog: blogCollection,
};
