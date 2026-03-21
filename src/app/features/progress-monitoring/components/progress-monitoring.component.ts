import { Component } from '@angular/core';
import { BatchMonitoringFacade } from '../../../application/facades/batch-monitoring.facade';

/** Smart — subscribes to batch progress streams and feeds Dumb child components. */
@Component({ selector: 'app-progress-monitoring', standalone: true, imports: [], template: `` })
export class ProgressMonitoringComponent {
  constructor(private facade: BatchMonitoringFacade) {}
}
