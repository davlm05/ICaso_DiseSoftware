import { Component, Input } from '@angular/core';
import { DuaDocument } from '../../../core/models/dua-document.model';

/** Dumb — renders the pre-filled DUA with confidence-level color coding. */
@Component({ selector: 'app-dua-preview', standalone: true, template: `` })
export class DuaPreviewComponent {
  @Input() document!: DuaDocument;
}
