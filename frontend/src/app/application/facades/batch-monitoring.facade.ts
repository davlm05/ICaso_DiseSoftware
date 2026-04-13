import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BatchService } from '../../core/services/batch.service';
import { BatchJob } from '../../core/models/batch-job.model';

/** Exposes batch progress streams to Progress Monitoring smart component. */
@Injectable({ providedIn: 'root' })
export class BatchMonitoringFacade {
  constructor(private batch: BatchService) {}

  getProgress(jobId: string): Observable<BatchJob> {
    return this.batch.getProgress(jobId);
  }
}
