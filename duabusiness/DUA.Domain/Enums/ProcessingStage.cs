namespace DUA.Domain.Enums;

public enum ProcessingStage
{
    Reading,
    Ocr,
    SemanticExtraction,
    Mapping,
    Validation,
    DocumentGeneration
}
