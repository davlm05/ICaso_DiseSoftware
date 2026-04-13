using DUA.Application.Interfaces;

namespace DUA.Infrastructure.Services;

public class AzureServiceBusPublisher : IMessageBroker
{
    public Task PublishAsync<T>(T message, string topic, CancellationToken cancellationToken = default) where T : class
    {
        throw new NotImplementedException();
    }
}
