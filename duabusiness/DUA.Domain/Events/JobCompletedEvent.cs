using DUA.Domain.Enums;

namespace DUA.Domain.Events;

public class JobCompletedEvent
{
    public Guid JobId { get; set; }
    public JobStatus FinalStatus { get; set; }
    public DateTime CompletedAt { get; set; }
}
