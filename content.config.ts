// content.config.ts
import { defineCollection, defineContentConfig, z } from '@nuxt/content' // Ensure imports are present

export default defineContentConfig({
  collections: {
    rfcs: defineCollection({
      type: 'page',
      source: 'rfcs/**/*.md',
      // Note: 'path', 'description', 'body', 'navigation' are automatically added by Nuxt Content for 'page'; no need for explicit definition unless overriding.
      schema: z.object({
        // expected frontmatter fields with Zod types and validation
        title: z.string(),
        rfcId: z.string().optional(),
        dateCreated: z.string().optional(),
        lastUpdated: z.string().optional(),
        related: z.string().optional(),
      }),
    }),
  },
})
