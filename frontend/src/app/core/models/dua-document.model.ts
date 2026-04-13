import { DuaField } from './dua-field.model';

export interface DuaDocument {
  id: string;
  batchJobId: string;
  fields: DuaField[];
  createdAt: Date;
}
