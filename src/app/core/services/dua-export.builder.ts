import { DuaDocument } from '../models/dua-document.model';

/** Builder — assembles the DUA export payload step by step. */
export class DuaExportBuilder {
  private _doc!: DuaDocument;

  from(doc: DuaDocument): this { this._doc = { ...doc }; return this; }
  applyCorrections(_corrections: Record<string, string>): this { return this; }
  runCoherenceValidation(): this { return this; }
  attachConfidenceMetadata(): this { return this; }
  generateAuditEntry(): this { return this; }
  build(): DuaDocument { return this._doc; }
}
