using DUA.Domain.Enums;

namespace DUA.Domain.Entities;

public class SourceFile
{
    public Guid Id { get; set; }
    public Guid JobId { get; set; }
    public string BlobUri { get; set; } = string.Empty;
    public string FileName { get; set; } = string.Empty;
    public FileType FileType { get; set; }
    public DateTime UploadedAt { get; set; }
}
