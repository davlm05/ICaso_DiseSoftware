import { Component, Input } from '@angular/core';
import { ProcessingStage } from '../../../core/models/processing-stage.enum';

/** Dumb — renders per-stage progress indicator. */
@Component({ selector: 'app-stage-progress', standalone: true, template: `` })
export class StageProgressComponent {
  @Input() stage!: ProcessingStage;
  @Input() complete = false;
}
