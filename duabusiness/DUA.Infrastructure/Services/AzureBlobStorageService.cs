using DUA.Application.Interfaces;

namespace DUA.Infrastructure.Services;

public class AzureBlobStorageService : IBlobStorageService
{
    public Task<string> UploadAsync(Stream content, string containerName, string blobName, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task<Stream> DownloadAsync(string blobUri, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync(string blobUri, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
