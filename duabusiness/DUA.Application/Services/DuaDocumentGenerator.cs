using DUA.Domain.Entities;
using DUA.Domain.ValueObjects;

namespace DUA.Application.Services;

public class DuaDocumentGenerator
{
    public Task<Stream> BuildFromTemplateAsync(DuaTemplate template, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<Stream> ApplyFieldValuesAsync(Stream documentStream, IEnumerable<DuaField> fields, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<Stream> EmbedConfidenceAsync(Stream documentStream, IEnumerable<DuaField> fields, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<byte[]> ProduceDocxAsync(Stream documentStream, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
