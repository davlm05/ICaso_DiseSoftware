namespace DUA.Application.Interfaces;

public interface IOcrService
{
    Task<string> ExtractTextAsync(Stream fileStream, string fileName, CancellationToken cancellationToken = default);
}
