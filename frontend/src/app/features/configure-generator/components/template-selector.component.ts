import { Component, EventEmitter, Output } from '@angular/core';

/** Dumb — renders DUA template selector and emits the selected template ID. */
@Component({ selector: 'app-template-selector', standalone: true, template: `` })
export class TemplateSelectorComponent {
  @Output() templateSelected = new EventEmitter<string>();
}
