import { Injectable } from '@angular/core';
import { FileType } from '../models/file-type.enum';
import { ExcelProcessor } from './excel.processor';
import { WordProcessor } from './word.processor';
import { PdfProcessor } from './pdf.processor';
import { ImageOcrProcessor } from './image-ocr.processor';

/** Factory — returns the correct document processor for the given FileType. */
@Injectable({ providedIn: 'root' })
export class DocumentProcessorFactory {
  constructor(
    private excel: ExcelProcessor,
    private word: WordProcessor,
    private pdf: PdfProcessor,
    private ocr: ImageOcrProcessor,
  ) {}

  create(type: FileType): ExcelProcessor | WordProcessor | PdfProcessor | ImageOcrProcessor {
    const map = {
      [FileType.XLSX]: this.excel,
      [FileType.DOCX]: this.word,
      [FileType.PDF]: this.pdf,
      [FileType.IMAGE]: this.ocr,
    };
    return map[type];
  }
}
