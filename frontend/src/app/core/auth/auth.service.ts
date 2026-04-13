import { Injectable, signal } from '@angular/core';

/** Manages Azure Entra ID MSAL flow, token retrieval, and session lifecycle. */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private _session = signal<string | null>(null);

  hasValidSession(): boolean { return !!this._session(); }
  hasPermission(_permission: string): boolean { return false; }
  login(): Promise<void> { return Promise.resolve(); }
  logout(): Promise<void> { this._session.set(null); return Promise.resolve(); }
  getToken(): string | null { return this._session(); }
}
