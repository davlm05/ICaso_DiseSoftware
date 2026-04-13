namespace DUA.Application.Interfaces;

public interface IIdentityService
{
    Task<string> GetCurrentUserIdAsync(CancellationToken cancellationToken = default);
    Task<bool> ValidateTokenAsync(string token, CancellationToken cancellationToken = default);
}
