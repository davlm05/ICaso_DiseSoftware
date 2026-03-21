import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  template: `<div class="w-full bg-gray-200 rounded"><div class="bg-blue-600 h-2 rounded" [style.width.%]="value"></div></div>`,
})
export class ProgressBarComponent {
  @Input() value = 0;
}
