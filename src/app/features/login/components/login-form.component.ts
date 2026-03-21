import { Component, EventEmitter, Output } from '@angular/core';

/** Dumb — renders login form; emits credentials on submit. */
@Component({
  selector: 'app-login-form',
  standalone: true,
  template: ``,
})
export class LoginFormComponent {
  @Output() submitted = new EventEmitter<{ identifier: string; password: string }>();
}
