using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace VisualMoodTracker.Models
{
    public class Tag
    {
        [Key]
        public int TagId { get; set; }
        [MaxLength(400)]
        public string Name { get; set; }

        public IEnumerable<SessionTag> SessionTags { get; set; }
    }
}
