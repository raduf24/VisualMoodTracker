using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VisualMoodTracker.Models
{
    public class GraphPoint
    {
        public int ImageId { get; set; }
        public IList<KeyValuePair<string, float>> FeelingAverages { get; set; }

        public GraphPoint()
        {
            FeelingAverages = new List<KeyValuePair<string, float>>();
        }
    }


}