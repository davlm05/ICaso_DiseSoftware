import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BatchMonitoringFacade } from '../../../application/facades/batch-monitoring.facade';

/** Smart — subscribes to batch progress streams and feeds Dumb child components. */
@Component({
  selector: 'app-progress-monitoring',
  standalone: true,
  imports: [],
  template: `
    <div style="min-height:100vh;background:#f1f5f9;padding:2rem">
      <div style="max-width:640px;margin:0 auto">
        <h1 style="font-size:1.25rem;font-weight:700;margin-bottom:1.5rem">Progress Monitoring</h1>

        <div style="background:white;padding:1.5rem;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-bottom:1rem">
          <p style="font-size:.875rem;font-weight:600;margin-bottom:1rem">Batch status: <span style="color:#16a34a">In progress</span></p>
          @for (s of stages; track s.label) {
            <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.5rem">
              <span style="font-size:.8rem;width:180px;color:#475569">{{ s.label }}</span>
              <div style="flex:1;background:#e2e8f0;border-radius:4px;height:8px">
                <div [style.width]="s.pct + '%'" style="background:#1e40af;height:8px;border-radius:4px;transition:width .3s"></div>
              </div>
              <span style="font-size:.75rem;color:#64748b">{{ s.pct }}%</span>
            </div>
          }
        </div>

        <button (click)="next()"
          style="padding:.625rem 1.5rem;background:#1e40af;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:600">
          View result →
        </button>
      </div>
    </div>
  `,
})
export class ProgressMonitoringComponent {
  stages = [
    { label: 'Reading',             pct: 100 },
    { label: 'OCR',                 pct: 100 },
    { label: 'Semantic extraction', pct: 80  },
    { label: 'Mapping',             pct: 40  },
    { label: 'Validation',          pct: 0   },
  ];
  constructor(private facade: BatchMonitoringFacade, private router: Router) {}
  next(): void { this.router.navigate(['/result']); }
}
