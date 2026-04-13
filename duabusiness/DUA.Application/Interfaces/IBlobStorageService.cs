namespace DUA.Application.Interfaces;

public interface IBlobStorageService
{
    Task<string> UploadAsync(Stream content, string containerName, string blobName, CancellationToken cancellationToken = default);
    Task<Stream> DownloadAsync(string blobUri, CancellationToken cancellationToken = default);
    Task DeleteAsync(string blobUri, CancellationToken cancellationToken = default);
}
