using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace VisualMoodTracker.Models
{
    public class Face
    {
        [Key]
        public int FaceId { get; set; }

        public float Width { get; set; }

        public float Height { get; set; }

        public float Top { get; set; }

        public float Left { get; set; }

        public float Anger { get; set; }

        public float Contempt { get; set; }

        public float Disgust { get; set; }

        public float Fear { get; set; }

        public float Happiness { get; set; }

        public float Neutral { get; set; }

        public float Sadness { get; set; }

        public float Surprise { get; set; }

        public int ImageId { get; set; }
        [JsonIgnore]
        public Image Image { get; set; }
    }
}
