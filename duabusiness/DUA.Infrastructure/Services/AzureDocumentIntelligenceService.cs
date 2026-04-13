using DUA.Application.Interfaces;

namespace DUA.Infrastructure.Services;

public class AzureDocumentIntelligenceService : IOcrService
{
    public Task<string> ExtractTextAsync(Stream fileStream, string fileName, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
