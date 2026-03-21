import { signal } from '@angular/core';
import { UserSession } from '../models/user-session.model';

/** Angular Signals store for authentication state. */
export const authState = {
  session: signal<UserSession | null>(null),
};
