namespace DUA.Api.Configuration;

public class RateLimiterOptions
{
    public int PermitLimit { get; set; }
    public int WindowSeconds { get; set; }
    public int QueueLimit { get; set; }
}
