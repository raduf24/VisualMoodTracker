using System;

namespace ImageAnalysis
{
    public class FaceResult
    {
        public string faceId { get; }
        public FaceRectangle faceRectangle { get; }
        public FaceEmotion faceEmotion { get; }

        public FaceResult(string id, FaceRectangle faceRectangle, FaceEmotion faceEmotion)
        {
            this.faceId = id;
            this.faceRectangle = faceRectangle;
            this.faceEmotion = faceEmotion;
        }

        public override string ToString()
        {
            return String.Format("Id: {0} \n {1} \n {2}", this.faceId, this.faceRectangle.ToString(), this.faceEmotion.ToString());
        }

    }
}
