using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VisualMoodTracker.Models
{
    public class Tag
    {
        [Key]
        public Guid TagId { get; set; }
        [MaxLength(400)]
        public string Name { get; set; }

        public IEnumerable<Session> Sessions { get; set; }

        public IEnumerable<SessionTag> SessionTags { get; set; }
    }
}
