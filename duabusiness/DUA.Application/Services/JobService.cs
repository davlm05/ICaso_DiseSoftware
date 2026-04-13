using DUA.Domain.Entities;
using DUA.Domain.ValueObjects;

namespace DUA.Application.Services;

public class JobService
{
    public Task<Job> CreateJobAsync(Guid templateId, string userId, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<SourceFile> UploadFileAsync(Guid jobId, Stream fileStream, string fileName, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task StartProcessingAsync(Guid jobId, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<Job> GetStatusAsync(Guid jobId, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<Job> GetResultAsync(Guid jobId, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task ApplyCorrectionsAsync(Guid jobId, IEnumerable<DuaField> corrections, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<Stream> ExportDuaAsync(Guid jobId, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
