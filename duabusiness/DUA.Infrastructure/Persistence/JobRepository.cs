using DUA.Application.Interfaces;
using DUA.Domain.Entities;

namespace DUA.Infrastructure.Persistence;

public class JobRepository : IJobRepository
{
    public Task<Job?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyList<Job>> GetByUserIdAsync(string userId, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task AddAsync(Job job, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task UpdateAsync(Job job, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
