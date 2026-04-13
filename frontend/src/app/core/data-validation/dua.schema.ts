import { z } from 'zod';

/** Zod schema for validating DUA API responses at system boundaries. */
export const DuaFieldSchema = z.object({
  code: z.string(),
  label: z.string(),
  value: z.string().nullable(),
  confidence: z.enum(['HIGH', 'MEDIUM', 'LOW']),
  requiresReview: z.boolean(),
});

export const DuaDocumentSchema = z.object({
  id: z.string(),
  batchJobId: z.string(),
  fields: z.array(DuaFieldSchema),
  createdAt: z.coerce.date(),
});
