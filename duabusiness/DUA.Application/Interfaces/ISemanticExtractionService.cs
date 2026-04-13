using DUA.Domain.ValueObjects;

namespace DUA.Application.Interfaces;

public interface ISemanticExtractionService
{
    Task<IReadOnlyList<DuaField>> ExtractFieldsAsync(string ocrText, IDictionary<string, string> fieldMappings, CancellationToken cancellationToken = default);
}
