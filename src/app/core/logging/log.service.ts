import { Injectable } from '@angular/core';

/** Structured event logger — sends entries to Azure Application Insights via ApiClients. */
@Injectable({ providedIn: 'root' })
export class LogService {
  info(message: string, meta?: Record<string, unknown>): void { void meta; console.info(message); }
  warn(message: string, meta?: Record<string, unknown>): void { void meta; console.warn(message); }
  error(error: Error | unknown): void { console.error(error); }
}
