namespace DUA.Domain.Events;

public class LowConfidenceDetectedEvent
{
    public Guid JobId { get; set; }
    public Guid FieldId { get; set; }
    public string FieldName { get; set; } = string.Empty;
    public double ConfidenceScore { get; set; }
    public DateTime DetectedAt { get; set; }
}
