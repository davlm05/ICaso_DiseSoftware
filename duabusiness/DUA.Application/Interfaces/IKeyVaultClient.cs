namespace DUA.Application.Interfaces;

public interface IKeyVaultClient
{
    Task<string> GetSecretAsync(string secretName, CancellationToken cancellationToken = default);
}
