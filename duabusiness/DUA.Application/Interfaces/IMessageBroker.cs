namespace DUA.Application.Interfaces;

public interface IMessageBroker
{
    Task PublishAsync<T>(T message, string topic, CancellationToken cancellationToken = default) where T : class;
}
