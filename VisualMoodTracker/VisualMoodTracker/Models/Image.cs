using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VisualMoodTracker.Models
{
    public class Image
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [MaxLength(400)]
        public string Path { get; set; }
        [Required]
        public int SessionId { get; set; }
        [Required]
        public float Width { get; set; }
        [Required]
        public float Height { get; set; }
        [Required]
        public DateTime CreationDate { get; set; }
        [MaxLength(400)]
        public string Description { get; set; }

        public IEnumerable<Face> Faces { get; set; }

        public Session Session { get; set; }
    }
}
