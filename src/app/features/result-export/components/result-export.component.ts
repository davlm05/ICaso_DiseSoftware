import { Component } from '@angular/core';
import { DuaGenerationFacade } from '../../../application/facades/dua-generation.facade';

/** Smart — manages result review and export flow. */
@Component({ selector: 'app-result-export', standalone: true, imports: [], template: `` })
export class ResultExportComponent {
  constructor(private facade: DuaGenerationFacade) {}
}
