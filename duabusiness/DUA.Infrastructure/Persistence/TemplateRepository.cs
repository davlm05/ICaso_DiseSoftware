using DUA.Application.Interfaces;
using DUA.Domain.Entities;

namespace DUA.Infrastructure.Persistence;

public class TemplateRepository : ITemplateRepository
{
    public Task<DuaTemplate?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyList<DuaTemplate>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task AddAsync(DuaTemplate template, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
