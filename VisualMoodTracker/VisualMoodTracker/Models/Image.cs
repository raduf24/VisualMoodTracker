using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace VisualMoodTracker.Models
{
    public class Image
    {
        [Key]
        public int ImageId { get; set; }
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
        [JsonIgnore]
        public Session Session { get; set; }
    }
}
