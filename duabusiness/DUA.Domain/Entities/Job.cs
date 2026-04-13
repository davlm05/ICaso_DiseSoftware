using DUA.Domain.Enums;
using DUA.Domain.ValueObjects;

namespace DUA.Domain.Entities;

public class Job
{
    public Guid Id { get; set; }
    public string UserId { get; set; } = string.Empty;
    public Guid TemplateId { get; set; }
    public JobStatus Status { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? CompletedAt { get; set; }
    public ICollection<SourceFile> SourceFiles { get; set; } = new List<SourceFile>();
    public ICollection<DuaField> DuaFields { get; set; } = new List<DuaField>();
}
