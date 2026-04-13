import { Component, Input } from '@angular/core';
import { ConfidenceLevel } from '../../../core/models/confidence-level.enum';

/** Renders Green / Yellow / Red badge based on ConfidenceLevel. */
@Component({
  selector: 'app-confidence-indicator',
  standalone: true,
  template: `<span [class]="colorClass">{{ level }}</span>`,
})
export class ConfidenceIndicatorComponent {
  @Input() level!: ConfidenceLevel;
  get colorClass(): string {
    return { HIGH: 'text-green-600', MEDIUM: 'text-yellow-500', LOW: 'text-red-600' }[this.level];
  }
}
