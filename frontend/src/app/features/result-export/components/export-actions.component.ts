import { Component, EventEmitter, Output } from '@angular/core';

/** Dumb — renders export-to-DOCX action; emits export trigger. */
@Component({ selector: 'app-export-actions', standalone: true, template: `` })
export class ExportActionsComponent {
  @Output() export = new EventEmitter<void>();
}
