using System;

namespace ImageAnalysis
{
    public class FaceRectangle
    {
        public int top { get; }
        public int left { get; }
        public int width { get; }
        public int height { get; }

        public FaceRectangle(int top, int left, int width, int height)
        {
            this.top = top;
            this.left = left;
            this.width = width;
            this.height = height;
        }

        public override string ToString()
        {
            return String.Format("Top: {0} \n Left: {1} \n Width: {2} \n Height: {3} \n", this.top, this.left, this.width, this.height);
        }
    }
}
