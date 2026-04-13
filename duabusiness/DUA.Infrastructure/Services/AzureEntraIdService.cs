using DUA.Application.Interfaces;

namespace DUA.Infrastructure.Services;

public class AzureEntraIdService : IIdentityService
{
    public Task<string> GetCurrentUserIdAsync(CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<bool> ValidateTokenAsync(string token, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
