using DUA.Domain.Entities;

namespace DUA.Infrastructure.Persistence;

public class AppDbContext
{
    // Placeholder for EF Core DbContext.
    // Will inherit from Microsoft.EntityFrameworkCore.DbContext once packages are added.

    public object Jobs { get; set; } = null!;       // DbSet<Job>
    public object SourceFiles { get; set; } = null!; // DbSet<SourceFile>
    public object Templates { get; set; } = null!;   // DbSet<DuaTemplate>
}
