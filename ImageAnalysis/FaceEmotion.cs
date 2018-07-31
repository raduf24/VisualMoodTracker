using System;

namespace ImageAnalysis
{
    public class FaceEmotion
    {
        public double anger { get; }
        public double contempt { get; }
        public double disgust { get; }
        public double fear { get; }
        public double happiness { get; }
        public double neutral { get; }
        public double sadness { get; }
        public double surprise { get; }

        public FaceEmotion(double anger, double contempt, double disgust,
            double fear, double happiness, double neutral, double sadness, double surprise)
        {
            this.anger = anger;
            this.contempt = contempt;
            this.disgust = disgust;
            this.fear = fear;
            this.happiness = happiness;
            this.neutral = neutral;
            this.sadness = sadness;
            this.surprise = surprise;
        }

        public override string ToString()
        {
            return String.Format("Anger: {0} \n Contempt: {1} \n Disgust: {2} \n Fear: {3} " +
                "\n Happiness: {4} \n Neutral: {5} \n Sadness: {6} \n Surprise: {7} \n",
                this.anger, this.contempt, this.disgust, this.fear, this.happiness, this.neutral, this.sadness, this.surprise);
        }

    }
}
