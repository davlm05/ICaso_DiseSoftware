import { Component, Input } from '@angular/core';

/** Dumb — renders per-document error log with cause and retry action. */
@Component({ selector: 'app-error-log', standalone: true, template: `` })
export class ErrorLogComponent {
  @Input() errors: { fileId: string; cause: string }[] = [];
}
