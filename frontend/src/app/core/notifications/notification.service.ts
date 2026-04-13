import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type NotificationEvent =
  | 'batchStageCompleted'
  | 'lowConfidenceDetected'
  | 'documentProcessingFailed'
  | 'exportReady';

/** Publish-subscribe hub for cross-layer events using RxJS Subjects. */
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private _events$ = new Subject<{ type: NotificationEvent; payload?: unknown }>();
  readonly events$ = this._events$.asObservable();

  emit(type: NotificationEvent, payload?: unknown): void {
    this._events$.next({ type, payload });
  }
}
