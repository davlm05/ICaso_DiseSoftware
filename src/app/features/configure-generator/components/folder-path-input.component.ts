import { Component, EventEmitter, Output } from '@angular/core';

/** Dumb — renders folder path input and emits the validated path. */
@Component({ selector: 'app-folder-path-input', standalone: true, template: `` })
export class FolderPathInputComponent {
  @Output() pathChanged = new EventEmitter<string>();
}
