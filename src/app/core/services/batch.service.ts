import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BatchJob } from '../models/batch-job.model';

@Injectable({ providedIn: 'root' })
export class BatchService {
  submit(_folderPath: string, _templateId: string): Observable<BatchJob> { return of({} as BatchJob); }
  getProgress(_jobId: string): Observable<BatchJob> { return of({} as BatchJob); }
}
