namespace DUA.Application.Interfaces;

public interface IAuditLogSink
{
    Task WriteAsync(string action, string userId, object? details = null, CancellationToken cancellationToken = default);
}
