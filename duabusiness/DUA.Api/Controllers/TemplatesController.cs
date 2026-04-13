using Microsoft.AspNetCore.Mvc;

namespace DUA.Api.Controllers;

[ApiController]
[Route("templates")]
public class TemplatesController : ControllerBase
{
    // POST /templates
    [HttpPost]
    public Task<IActionResult> CreateTemplate()
    {
        throw new NotImplementedException();
    }

    // GET /templates
    [HttpGet]
    public Task<IActionResult> GetAllTemplates()
    {
        throw new NotImplementedException();
    }

    // GET /templates/{id}
    [HttpGet("{id:guid}")]
    public Task<IActionResult> GetTemplate(Guid id)
    {
        throw new NotImplementedException();
    }
}
