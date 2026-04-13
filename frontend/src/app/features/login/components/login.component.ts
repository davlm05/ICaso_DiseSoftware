import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormComponent } from './login-form.component';
import { AuthFacade } from '../../../application/facades/auth.facade';

/** Smart — manages login flow; delegates rendering to LoginFormComponent. */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent],
  template: `<app-login-form (submitted)="onSubmit($event)" />`,
})
export class LoginComponent {
  constructor(private auth: AuthFacade, private router: Router) {}
  onSubmit(_credentials: { identifier: string; password: string }): void {
    this.router.navigate(['/configure']);
  }
}
