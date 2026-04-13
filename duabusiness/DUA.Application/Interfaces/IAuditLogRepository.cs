namespace DUA.Application.Interfaces;

public interface IAuditLogRepository
{
    Task SaveAsync(string action, string userId, object? details = null, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<object>> GetByJobIdAsync(Guid jobId, CancellationToken cancellationToken = default);
}
