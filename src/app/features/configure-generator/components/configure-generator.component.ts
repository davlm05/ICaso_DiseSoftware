import { Component } from '@angular/core';
import { DuaGenerationFacade } from '../../../application/facades/dua-generation.facade';

/** Smart — orchestrates generator configuration; calls DuaGenerationFacade. */
@Component({ selector: 'app-configure-generator', standalone: true, imports: [], template: `` })
export class ConfigureGeneratorComponent {
  constructor(private facade: DuaGenerationFacade) {}
}
