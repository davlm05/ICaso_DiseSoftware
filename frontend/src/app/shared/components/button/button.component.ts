import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `<button [class]="classes" (click)="clicked.emit()"><ng-content /></button>`,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<void>();
  get classes(): string { return `btn btn-${this.variant}`; }
}
