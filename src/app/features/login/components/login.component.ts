import { Component } from '@angular/core';
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
  constructor(private auth: AuthFacade) {}
  onSubmit(_credentials: { identifier: string; password: string }): void {}
}
