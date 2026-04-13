namespace DUA.Workers;

public class JobProcessingWorker : BackgroundService
{
    private readonly ILogger<JobProcessingWorker> _logger;

    public JobProcessingWorker(ILogger<JobProcessingWorker> logger)
    {
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        throw new NotImplementedException();
    }
}
