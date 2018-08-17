using System;

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
