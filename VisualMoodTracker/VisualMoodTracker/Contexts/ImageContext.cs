using Microsoft.EntityFrameworkCore;
using VisualMoodTracker.Models;

namespace VisualMoodTracker.Contexts
{
    public class ImageContext : DbContext
    {
        public DbSet<Session> Sessions { get; set; }

        public DbSet<Tag> Tags { get; set; }

        public DbSet<Image> Images { get; set; }

        public DbSet<Face> Faces { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SessionTag>()
                .HasKey(s => new { s.SessionId, s.TagId });
            base.OnModelCreating(modelBuilder);
        }
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    ////base.OnConfiguring(optionsBuilder);
        //    //optionsBuilder.UseSqlServer(
        //    //    "Server = (localdb)\\mssqllocaldb; Database = VMTData; Trusted_Connection = true");
        //}
        public ImageContext(DbContextOptions<ImageContext> options) : base(options)
        {
        }
    }
}
