import { Component, EventEmitter, Output } from '@angular/core';

/** Dumb — renders login form; emits credentials on submit. */
@Component({
  selector: 'app-login-form',
  standalone: true,
  template: `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f1f5f9">
      <div style="background:white;padding:2rem;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.1);width:360px">
        <h1 style="font-size:1.25rem;font-weight:700;margin-bottom:1.5rem">DUA Streamliner — Login</h1>
        <label style="display:block;margin-bottom:1rem">
          <span style="font-size:.875rem;font-weight:500">Identifier</span>
          <input #id type="text" placeholder="user@example.com"
            style="display:block;width:100%;margin-top:.25rem;padding:.5rem;border:1px solid #cbd5e1;border-radius:4px" />
        </label>
        <label style="display:block;margin-bottom:1rem">
          <span style="font-size:.875rem;font-weight:500">Password</span>
          <input #pw type="password"
            style="display:block;width:100%;margin-top:.25rem;padding:.5rem;border:1px solid #cbd5e1;border-radius:4px" />
        </label>
        <button (click)="submitted.emit({ identifier: id.value, password: pw.value })"
          style="width:100%;padding:.625rem;background:#1e40af;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:600">
          Sign in
        </button>
      </div>
    </div>
  `,
})
export class LoginFormComponent {
  @Output() submitted = new EventEmitter<{ identifier: string; password: string }>();
}
