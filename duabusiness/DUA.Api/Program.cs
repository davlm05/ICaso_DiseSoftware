namespace DUA.Api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // --- Service registration placeholders ---
        // builder.Services.AddScoped<IOcrService, AzureDocumentIntelligenceService>();
        // builder.Services.AddScoped<ISemanticExtractionService, AzureOpenAiExtractionService>();
        // builder.Services.AddScoped<IBlobStorageService, AzureBlobStorageService>();
        // builder.Services.AddScoped<IMessageBroker, AzureServiceBusPublisher>();
        // builder.Services.AddScoped<IIdentityService, AzureEntraIdService>();
        // builder.Services.AddScoped<IAuditLogSink, ApplicationInsightsSink>();
        // builder.Services.AddScoped<IKeyVaultClient, AzureKeyVaultClient>();
        // builder.Services.AddScoped<IJobRepository, JobRepository>();
        // builder.Services.AddScoped<ITemplateRepository, TemplateRepository>();
        // builder.Services.AddScoped<IAuditLogRepository, AuditLogRepository>();
        // builder.Services.AddScoped<JobService>();
        // builder.Services.AddScoped<TemplateService>();
        // builder.Services.AddScoped<DuaProcessingPipeline>();
        // builder.Services.AddScoped<DuaDocumentGenerator>();

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        // app.UseMiddleware<ExceptionHandlingMiddleware>();

        app.UseHttpsRedirection();
        app.UseAuthorization();
        app.MapControllers();

        app.Run();
    }
}
