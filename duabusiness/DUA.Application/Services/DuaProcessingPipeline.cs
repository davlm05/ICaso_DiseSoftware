using DUA.Domain.ValueObjects;

namespace DUA.Application.Services;

public class DuaProcessingPipeline
{
    public Task<string> RunOcrAsync(Guid jobId, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyList<DuaField>> RunExtractionAsync(Guid jobId, string ocrText, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task MapFieldsAsync(Guid jobId, IReadOnlyList<DuaField> extractedFields, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<bool> ValidateCoherenceAsync(Guid jobId, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<Stream> GenerateDocumentAsync(Guid jobId, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
