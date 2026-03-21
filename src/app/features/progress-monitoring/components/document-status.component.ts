import { Component, Input } from '@angular/core';
import { SourceFile } from '../../../../core/models/source-file.model';

/** Dumb — renders individual document processing status. */
@Component({ selector: 'app-document-status', standalone: true, template: `` })
export class DocumentStatusComponent {
  @Input() file!: SourceFile;
  @Input() status = '';
}
