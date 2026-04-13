import { BatchJob } from '../../core/models/batch-job.model';
import { BatchJobSchema } from '../../core/data-validation/batch.schema';

/** Transforms raw backend JSON into a validated BatchJob domain model. */
export function adaptBatchJob(raw: unknown): BatchJob {
  return BatchJobSchema.parse(raw) as BatchJob;
}
