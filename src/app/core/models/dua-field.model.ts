import { ConfidenceLevel } from './confidence-level.enum';

export interface DuaField {
  code: string;
  label: string;
  value: string | null;
  confidence: ConfidenceLevel;
  requiresReview: boolean;
}
