import { Injectable } from '@angular/core';
import { DuaDocument } from '../models/dua-document.model';

@Injectable({ providedIn: 'root' })
export class CoherenceValidationService {
  validate(_doc: DuaDocument): boolean { return true; }
}
