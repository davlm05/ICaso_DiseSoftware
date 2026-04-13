namespace DUA.Api.Configuration;

public class FileValidationPolicy
{
    public long MaxFileSizeBytes { get; set; }
    public IReadOnlyList<string> AllowedExtensions { get; set; } = new List<string>();
    public int MaxFilesPerJob { get; set; }
}
