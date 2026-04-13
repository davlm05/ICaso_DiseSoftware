import { FileType } from './file-type.enum';

export interface SourceFile {
  id: string;
  name: string;
  type: FileType;
  path: string;
  sizeBytes: number;
}
