import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LogService } from '../logging/log.service';
import { NotificationService } from '../notifications/notification.service';

/** Captures unhandled errors and HTTP failures; routes to Logs and Notifications. */
@Injectable({ providedIn: 'root' })
export class ExceptionHandlingService {
  constructor(
    private log: LogService,
    private notifications: NotificationService,
  ) {}

  handle(error: HttpErrorResponse | Error): void {
    this.log.error(error);
    if (error instanceof HttpErrorResponse) {
      if (error.status === 403) this.notifications.emit('documentProcessingFailed', error);
    }
  }
}
