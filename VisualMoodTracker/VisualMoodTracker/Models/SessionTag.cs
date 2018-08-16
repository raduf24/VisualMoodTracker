using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VisualMoodTracker.Models
{
    public class SessionTag
    {
        public Guid SessionId { get; set; }
        public Guid TagId { get; set; }

        public Session Session { get; set; }

        public Tag Tag { get; set; }
    }
}
