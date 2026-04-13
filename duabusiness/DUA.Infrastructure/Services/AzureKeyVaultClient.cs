using DUA.Application.Interfaces;

namespace DUA.Infrastructure.Services;

public class AzureKeyVaultClient : IKeyVaultClient
{
    public Task<string> GetSecretAsync(string secretName, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
