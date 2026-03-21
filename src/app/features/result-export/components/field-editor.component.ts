import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DuaField } from '../../../../core/models/dua-field.model';

/** Dumb — renders an editable DUA field; emits correction on change. */
@Component({ selector: 'app-field-editor', standalone: true, template: `` })
export class FieldEditorComponent {
  @Input() field!: DuaField;
  @Output() corrected = new EventEmitter<{ code: string; value: string }>();
}
