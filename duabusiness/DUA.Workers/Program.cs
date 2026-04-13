namespace DUA.Workers;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = Host.CreateDefaultBuilder(args)
            .ConfigureServices((context, services) =>
            {
                // --- Service registration placeholders ---
                // services.AddHostedService<JobProcessingWorker>();
            });

        var host = builder.Build();
        host.Run();
    }
}
