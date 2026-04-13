using Microsoft.AspNetCore.Mvc;

namespace DUA.Api.Controllers;

[ApiController]
[Route("jobs")]
public class JobsController : ControllerBase
{
    // POST /jobs
    [HttpPost]
    public Task<IActionResult> CreateJob()
    {
        throw new NotImplementedException();
    }

    // POST /jobs/{id}/files
    [HttpPost("{id:guid}/files")]
    public Task<IActionResult> UploadFile(Guid id)
    {
        throw new NotImplementedException();
    }

    // POST /jobs/{id}/start
    [HttpPost("{id:guid}/start")]
    public Task<IActionResult> StartProcessing(Guid id)
    {
        throw new NotImplementedException();
    }

    // GET /jobs/{id}/status
    [HttpGet("{id:guid}/status")]
    public Task<IActionResult> GetStatus(Guid id)
    {
        throw new NotImplementedException();
    }

    // GET /jobs/{id}/result
    [HttpGet("{id:guid}/result")]
    public Task<IActionResult> GetResult(Guid id)
    {
        throw new NotImplementedException();
    }

    // PATCH /jobs/{id}/fields
    [HttpPatch("{id:guid}/fields")]
    public Task<IActionResult> ApplyCorrections(Guid id)
    {
        throw new NotImplementedException();
    }

    // POST /jobs/{id}/export
    [HttpPost("{id:guid}/export")]
    public Task<IActionResult> ExportDua(Guid id)
    {
        throw new NotImplementedException();
    }
}
