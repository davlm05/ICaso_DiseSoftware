import { signal } from '@angular/core';
import { BatchJob } from '../models/batch-job.model';

/** Angular Signals store for active batch job state. */
export const batchState = {
  activeJob: signal<BatchJob | null>(null),
};
