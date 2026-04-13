namespace DUA.Domain.Entities;

public class DuaTemplate
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Version { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string BlobUri { get; set; } = string.Empty;
    public IDictionary<string, string> FieldMappings { get; set; } = new Dictionary<string, string>();
    public DateTime CreatedAt { get; set; }
}
