using System;

namespace VisualMoodTracker.Models
{
    public class SessionTag
    {
        public int SessionId { get; set; }
        public int TagId { get; set; }

        public Session Session { get; set; }

        public Tag Tag { get; set; }
    }
}
