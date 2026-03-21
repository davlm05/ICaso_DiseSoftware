import { Injectable } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

/** Exposes login(), logout(), getSession() to components — hides AuthService complexity. */
@Injectable({ providedIn: 'root' })
export class AuthFacade {
  constructor(private auth: AuthService) {}

  login(): Promise<void> { return this.auth.login(); }
  logout(): Promise<void> { return this.auth.logout(); }
  getSession() { return this.auth.getToken(); }
}
