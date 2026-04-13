import { Component, Input } from '@angular/core';
import { SourceFile } from '../../../core/models/source-file.model';

/** Dumb — displays the list of compatible source files detected in the folder. */
@Component({ selector: 'app-file-list', standalone: true, template: `` })
export class FileListComponent {
  @Input() files: SourceFile[] = [];
}
