import { signal } from '@angular/core';
import { DuaDocument } from '../models/dua-document.model';

/** Angular Signals store for DUA result and user corrections. */
export const duaResultState = {
  document: signal<DuaDocument | null>(null),
};
