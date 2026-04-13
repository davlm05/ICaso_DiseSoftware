using DUA.Application.Interfaces;

namespace DUA.Infrastructure.Persistence;

public class AuditLogRepository : IAuditLogRepository
{
    public Task SaveAsync(string action, string userId, object? details = null, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyList<object>> GetByJobIdAsync(Guid jobId, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
