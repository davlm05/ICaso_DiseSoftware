import { z } from 'zod';

/** Zod schema for validating BatchJob API responses at system boundaries. */
export const BatchJobSchema = z.object({
  id: z.string(),
  status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED', 'COMPLETED_WITH_OBSERVATIONS', 'FAILED']),
  currentStage: z.enum(['READING', 'OCR', 'SEMANTIC_EXTRACTION', 'MAPPING', 'VALIDATION']),
  totalFiles: z.number(),
  processedFiles: z.number(),
  startedAt: z.coerce.date(),
  completedAt: z.coerce.date().nullable(),
});
