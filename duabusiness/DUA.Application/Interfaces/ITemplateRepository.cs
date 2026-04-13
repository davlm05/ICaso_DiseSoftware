using DUA.Domain.Entities;

namespace DUA.Application.Interfaces;

public interface ITemplateRepository
{
    Task<DuaTemplate?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<DuaTemplate>> GetAllAsync(CancellationToken cancellationToken = default);
    Task AddAsync(DuaTemplate template, CancellationToken cancellationToken = default);
}
