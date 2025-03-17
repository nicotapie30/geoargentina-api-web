import { z, defineCollection } from "astro:content";

const guides = defineCollection({
  type: "data", // Indica que se trata de archivos JSON
  schema: z.object({
    id: z.number(),
    title: z.string(),
    url: z.string(),
    method: z.string(),
    description: z.string(),
    example: z.string(),
    img: z.string(),
  }),
});

export const collections = { guides };
