import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BatchService } from '../../core/services/batch.service';
import { BatchJob } from '../../core/models/batch-job.model';

/** Orchestrates file validation, batch submission, progress subscription, and state init. */
@Injectable({ providedIn: 'root' })
export class DuaGenerationFacade {
  constructor(private batch: BatchService) {}

  startGeneration(folderPath: string, templateId: string): Observable<BatchJob> {
    return this.batch.submit(folderPath, templateId);
  }
}
