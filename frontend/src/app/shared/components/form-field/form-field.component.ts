import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  standalone: true,
  template: `<label class="block"><span class="text-sm font-medium">{{ label }}</span><ng-content /></label>`,
})
export class FormFieldComponent {
  @Input() label = '';
}
