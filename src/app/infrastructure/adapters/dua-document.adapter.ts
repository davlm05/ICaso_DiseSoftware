import { DuaDocument } from '../../core/models/dua-document.model';
import { DuaDocumentSchema } from '../../core/data-validation/dua.schema';

/** Transforms raw backend JSON into a validated DuaDocument domain model. */
export function adaptDuaDocument(raw: unknown): DuaDocument {
  return DuaDocumentSchema.parse(raw) as DuaDocument;
}
