import { Injectable } from '@angular/core';
import { DuaField } from '../models/dua-field.model';
import { ConfidenceLevel } from '../models/confidence-level.enum';

@Injectable({ providedIn: 'root' })
export class ConfidenceLevelService {
  evaluate(_field: DuaField): ConfidenceLevel { return ConfidenceLevel.LOW; }
}
