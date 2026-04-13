namespace DUA.Domain.Enums;

public enum JobStatus
{
    Created,
    Queued,
    Processing,
    MappingCompleted,
    Completed,
    CompletedWithObservations,
    Failed
}
