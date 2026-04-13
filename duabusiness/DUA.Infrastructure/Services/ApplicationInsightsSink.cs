using DUA.Application.Interfaces;

namespace DUA.Infrastructure.Services;

public class ApplicationInsightsSink : IAuditLogSink
{
    public Task WriteAsync(string action, string userId, object? details = null, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
