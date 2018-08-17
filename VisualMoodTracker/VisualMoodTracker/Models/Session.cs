using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace VisualMoodTracker.Models
{
    public class Session
    {
        [Key]
        public int SessionId { get; set; }
        [MaxLength(400)]
        public string Name { get; set; }

        public DateTime CreationDate { get; set; }
        [MaxLength(400)]
        public string Description { get; set; }

        public IEnumerable<Image> Images { get; set; }

        public IEnumerable<SessionTag> SessionTags { get; set; }
    }
}
