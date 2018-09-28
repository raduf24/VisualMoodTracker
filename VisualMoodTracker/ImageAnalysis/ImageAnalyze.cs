using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace ImageAnalysis
{
    public class ImageAnalyze
    {
        public string Key { get; set; }
        public string Url { get; set; }
        public ImageAnalyze(string key, string url)
        {
            Key = key;
            Url = url;
        }

        public List<FaceResult> GetResult(string imageFilePath)
        {
            string result = MakeRequest(imageFilePath, this.Key, this.Url).Result;


            // Processing the JSON into manageable objects.
            JToken test = JArray.Parse(result);
            List<FaceResult> faces = new List<FaceResult>();
            foreach (JToken item in test)
            {
                string id = (string)item["faceId"];
                int top = (int)item["faceRectangle"]["top"];
                int left = (int)item["faceRectangle"]["left"];
                int width = (int)item["faceRectangle"]["width"];
                int height = (int)item["faceRectangle"]["height"];
                double anger = (double)item["faceAttributes"]["emotion"]["anger"];
                double contempt = (double)item["faceAttributes"]["emotion"]["contempt"];
                double disgust = (double)item["faceAttributes"]["emotion"]["disgust"];
                double fear = (double)item["faceAttributes"]["emotion"]["fear"];
                double happiness = (double)item["faceAttributes"]["emotion"]["happiness"];
                double neutral = (double)item["faceAttributes"]["emotion"]["neutral"];
                double sadness = (double)item["faceAttributes"]["emotion"]["sadness"];
                double surprise = (double)item["faceAttributes"]["emotion"]["surprise"];
                FaceResult face = new FaceResult(id, new FaceRectangle(top, left, width, height),
                    new FaceEmotion(anger, contempt, disgust, fear, happiness, neutral, sadness, surprise));
                faces.Add(face);
            }
            return faces;

        }

        static byte[] GetImageAsByteArray(string imageFilePath)
        {
            FileStream fileStream = new FileStream(imageFilePath, FileMode.Open, FileAccess.Read);
            BinaryReader binaryReader = new BinaryReader(fileStream);
            return binaryReader.ReadBytes((int)fileStream.Length);
        }

        static async Task<string> MakeRequest(string imageFilePath, string key, string url)
        {
            var client = new HttpClient();

            string responseContent = string.Empty;

            // Request headers - replace this example key with your valid key.
            client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", key);

            string uri = url;
            HttpResponseMessage response;
            //string responseContent;

            byte[] byteData = GetImageAsByteArray(imageFilePath);

            using (var content = new ByteArrayContent(byteData))
            {
                // This example uses content type "application/octet-stream".
                // The other content types you can use are "application/json" and "multipart/form-data".
                content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                response = await client.PostAsync(uri, content);
                responseContent = response.Content.ReadAsStringAsync().Result;
            }
            return responseContent;
        }
    }
}