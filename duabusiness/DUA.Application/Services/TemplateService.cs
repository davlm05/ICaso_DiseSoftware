using DUA.Domain.Entities;

namespace DUA.Application.Services;

public class TemplateService
{
    public Task<DuaTemplate> CreateTemplateAsync(DuaTemplate template, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyList<DuaTemplate>> GetAllTemplatesAsync(CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<bool> ValidateTemplateAsync(Guid templateId, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
