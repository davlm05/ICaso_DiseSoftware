using DUA.Application.Interfaces;
using DUA.Domain.ValueObjects;

namespace DUA.Infrastructure.Services;

public class AzureOpenAiExtractionService : ISemanticExtractionService
{
    public Task<IReadOnlyList<DuaField>> ExtractFieldsAsync(string ocrText, IDictionary<string, string> fieldMappings, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
