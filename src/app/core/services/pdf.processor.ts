import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PdfProcessor {
  extract(_filePath: string): Observable<Record<string, unknown>> { return of({}); }
}
