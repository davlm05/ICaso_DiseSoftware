using DUA.Domain.Enums;

namespace DUA.Domain.ValueObjects;

public class DuaField
{
    public Guid FieldId { get; set; }
    public string FieldName { get; set; } = string.Empty;
    public string Value { get; set; } = string.Empty;
    public ConfidenceLevel ConfidenceLevel { get; set; }
    public string? ReviewerNote { get; set; }
    public bool IsCorrected { get; set; }
}
