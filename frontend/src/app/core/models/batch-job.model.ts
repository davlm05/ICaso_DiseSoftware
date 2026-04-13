import { BatchStatus } from './batch-status.enum';
import { ProcessingStage } from './processing-stage.enum';

export interface BatchJob {
  id: string;
  status: BatchStatus;
  currentStage: ProcessingStage;
  totalFiles: number;
  processedFiles: number;
  startedAt: Date;
  completedAt: Date | null;
}
