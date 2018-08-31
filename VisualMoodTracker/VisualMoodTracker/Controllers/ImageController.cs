using APITestUpload.Models.Home;
using ImageAnalysis;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Primitives;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VisualMoodTracker.Contexts;
using VisualMoodTracker.Models;
using System.Drawing;
using Microsoft.EntityFrameworkCore.Query.Internal;
using System.Linq.Expressions;

namespace VisualMoodTracker.Controllers
{

    [Route("api")]
    public class ImageController : Controller
    {
        private ImageContext _dbcontext;

        private readonly IFileProvider FileProvider;

        public ImageController(IFileProvider FileProvider, IConfiguration configuration, ImageContext _dbcontext)
        {
            this.FileProvider = FileProvider;
            Configuration = configuration;
            this._dbcontext = _dbcontext;
        }

        public IConfiguration Configuration { get; }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("sessions/{sessionId}")]
        public async Task<IActionResult> UploadFile(IFormFile fileUpload, string sessionId)
        {
            if (fileUpload == null || fileUpload.Length == 0)
                return Content("file not selected");

            if (sessionId == "null")
            {
                sessionId = DateTime.Now.ToString("yyyyMMddHHmmss");

                bool exists = System.IO.Directory.Exists("wwwroot\\sessions\\" + sessionId);
                if (!exists)
                { System.IO.Directory.CreateDirectory("wwwroot\\sessions\\" + sessionId); }

                _dbcontext.Sessions.Add(
                    new Session
                    {
                        Name = sessionId,
                        CreationDate = System.DateTime.Now,
                    });
                _dbcontext.SaveChanges();
            }

            Session session = _dbcontext.Sessions.Where(s => s.Name == sessionId).First();

            int fileId = (Directory.GetFiles("wwwroot\\sessions\\" + sessionId, "*", SearchOption.AllDirectories).Length) + 1;

            string fileName = fileId + fileUpload.GetFileExtension();

            var path = Path.Combine(
                        Directory.GetCurrentDirectory(), "wwwroot\\sessions\\" + sessionId,
                        fileName);

            using (var stream = new FileStream(path, FileMode.Create))
            {
                await fileUpload.CopyToAsync(stream);
            }

            Bitmap image = new Bitmap("wwwroot\\sessions\\" + sessionId + "\\" + fileName);

            Models.Image img = new Models.Image
            {
                Session = _dbcontext.Sessions.Last(),
                Path = "wwwroot\\sessions\\" + sessionId + "\\" + fileName,
                SessionId = session.SessionId,
                CreationDate = System.DateTime.Now,
                Width = image.Width,
                Height = image.Height,
            };
            _dbcontext.Images.Add(img);

            string imagePath = img.Path;

            List<FaceResult> facesList = GetResultFromImageAnalysis(Directory.GetCurrentDirectory() +
                "\\wwwroot\\sessions\\" + sessionId + "\\" + fileName);

            foreach (FaceResult faces in facesList)
            {
                Face face = new Face
                {
                    Width = faces.faceRectangle.width,
                    Height = faces.faceRectangle.height,
                    Top = faces.faceRectangle.top,
                    Left = faces.faceRectangle.left,
                    Anger = (float)faces.faceEmotion.anger,
                    Contempt = (float)faces.faceEmotion.contempt,
                    Disgust = (float)faces.faceEmotion.disgust,
                    Fear = (float)faces.faceEmotion.fear,
                    Happiness = (float)faces.faceEmotion.happiness,
                    Neutral = (float)faces.faceEmotion.neutral,
                    Sadness = (float)faces.faceEmotion.sadness,
                    Surprise = (float)faces.faceEmotion.surprise,
                    ImageId = img.ImageId,
                    Image = img
                };
                _dbcontext.Faces.Add(face);
            }

            _dbcontext.SaveChanges();

            var res = _dbcontext.Sessions
                .Include(s => s.Images)
                .ThenInclude(i => i.Faces)
                .Where(s => s.Name == sessionId).First();

            res.Images = res.Images.OrderBy(i => i.CreationDate);

            foreach (var imageFromDB in res.Images)
            {
                imageFromDB.Path = imageFromDB.Path.Replace("wwwroot\\", "");
            }

            return Ok(res);
        }

        [HttpPost("sessions/webcam")]
        public IActionResult UploadFromWebcam(string base64Img, string sessionId)
        {

            if (sessionId == "null")
            {
                sessionId = DateTime.Now.ToString("yyyyMMddHHmmss");

                bool exists = Directory.Exists("wwwroot\\sessions\\" + sessionId);
                if (!exists)
                { System.IO.Directory.CreateDirectory("wwwroot\\sessions\\" + sessionId); }

                _dbcontext.Sessions.Add(
                    new Session
                    {
                        Name = sessionId,
                        CreationDate = DateTime.Now,
                    });
                _dbcontext.SaveChanges();
            }

            Session session = _dbcontext.Sessions.Where(s => s.Name == sessionId).Last();

            base64Img = base64Img.Replace("data:image/jpeg;base64,", string.Empty);
            //byte[] imageBytes = Convert.FromBase64String(base64Img);

            System.Drawing.Image IMG = Base64ToImage(base64Img);

            int fileId = (Directory.GetFiles("wwwroot\\sessions\\" + sessionId, "*", SearchOption.AllDirectories).Length) + 1;
            string fileName = fileId + ".jpg";

            //MemoryStream stream = new MemoryStream();
            //stream.Write(imageBytes, 0, imageBytes.Length);
            using (MemoryStream stream = new MemoryStream())
            {
               
                IMG.Save(stream, System.Drawing.Imaging.ImageFormat.Jpeg);

                using (var test = new FileStream("wwwroot\\sessions\\" + sessionId + "\\" + fileId + ".jpg", FileMode.Create))
                {
                    stream.WriteTo(test);
                }
            }

            Bitmap image = new Bitmap("wwwroot\\sessions\\" + sessionId + "\\" + fileName);

            Models.Image img = new Models.Image
            {
                Session = _dbcontext.Sessions.Last(),
                Path = "wwwroot\\sessions\\" + sessionId + "\\" + fileName,
                SessionId = session.SessionId,
                CreationDate = DateTime.Now,
                Width = image.Width,
                Height = image.Height,
            };
            _dbcontext.Images.Add(img);

            List<FaceResult> facesList = GetResultFromImageAnalysis(Directory.GetCurrentDirectory() +
                "\\wwwroot\\sessions\\" + sessionId + "\\" + fileName);

            foreach (FaceResult faces in facesList)
            {
                Face face = new Face
                {
                    Width = faces.faceRectangle.width,
                    Height = faces.faceRectangle.height,
                    Top = faces.faceRectangle.top,
                    Left = faces.faceRectangle.left,
                    Anger = (float)faces.faceEmotion.anger,
                    Contempt = (float)faces.faceEmotion.contempt,
                    Disgust = (float)faces.faceEmotion.disgust,
                    Fear = (float)faces.faceEmotion.fear,
                    Happiness = (float)faces.faceEmotion.happiness,
                    Neutral = (float)faces.faceEmotion.neutral,
                    Sadness = (float)faces.faceEmotion.sadness,
                    Surprise = (float)faces.faceEmotion.surprise,
                    ImageId = img.ImageId,
                    Image = img
                };
                _dbcontext.Faces.Add(face);
            }

            _dbcontext.SaveChanges();

            var res = _dbcontext.Sessions
               .Include(s => s.Images)
               .ThenInclude(i => i.Faces)
               .Where(s => s.Name == sessionId).First();

            res.Images = res.Images.OrderBy(i => i.CreationDate);

            foreach (var imageFromDB in res.Images)
            {
                imageFromDB.Path = imageFromDB.Path.Replace("wwwroot\\", "");
            }

            return Ok(res);
        }

        public List<FaceResult> GetResultFromImageAnalysis(string fileLocation)
        {
            ImageAnalyze analyzer = new ImageAnalyze(Configuration["key"], Configuration["url"]);
            List<FaceResult> lst = analyzer.GetResult(fileLocation);
            return lst;
        }

        [HttpGet("sessions")]
        public IEnumerable<Session> GetSessions(string columnName, string sortKey)
        {
            var parameter = Expression.Parameter(typeof(Session), "x"); //{x}
            var body = Expression.Convert(Expression.Property(parameter, columnName), typeof(object)); //{x.SessionId} converted to object
            var lambda = Expression.Lambda<Func<Session, object>>(body, parameter).Compile();
            if (sortKey == "asc")
            {
                return _dbcontext.Sessions.OrderBy(lambda).ToList();
            }
            else
            {
                return _dbcontext.Sessions.OrderByDescending(lambda).ToList();
            }
        }


        [HttpGet("sessions/{sessionId}")]
        public IActionResult GetImageFromSession(string sessionId)
        {
            try
            {
                var res = _dbcontext.Sessions
                    .Include(s => s.Images)
                    .ThenInclude(i => i.Faces)
                    .Where(s => s.Name == sessionId).First();

                res.Images = res.Images.OrderBy(i => i.CreationDate);

                foreach (var image in res.Images)
                {
                    image.Path = image.Path.Replace("wwwroot\\", "");
                }

                return Ok(res);

            }
            catch (Exception ex)
            {
                return Ok(new Session() { Name = null, Images = new List<VisualMoodTracker.Models.Image>() });
            }

        }


        [HttpGet("sessions/{sessionID}/summary")]
        public IActionResult GetFacesFromImagesFromSession(int sessionId)
        {

                var GraphPointList = _dbcontext.Faces.Where(f => f.Image.SessionId == sessionId)
                   .GroupBy(f=>f.ImageId)
                   .Select(g => new GraphPoint
                   {
                       ImageId = g.Key,
                       FeelingAverages = {
                       new KeyValuePair<string, float>("Anger", g.Average(f=>f.Anger)),
                       new KeyValuePair<string, float>("Contempt",  g.Average(f=>f.Contempt)),
                       new KeyValuePair<string, float>("Fear",  g.Average(f=>f.Fear)),
                       new KeyValuePair<string, float>("Happiness",  g.Average(f=>f.Happiness)),
                       new KeyValuePair<string, float>("Neutral",  g.Average(f=>f.Neutral)),
                       new KeyValuePair<string, float>("Sadness",  g.Average(f=>f.Sadness)),
                       new KeyValuePair<string, float>("Surprise",  g.Average(f=>f.Surprise)),
                       new KeyValuePair<string, float>("Disgust",  g.Average(f=>f.Disgust)),
                       }
                   }).ToList();
            
                return Ok(GraphPointList);
            
        }

        public System.Drawing.Image Base64ToImage(string base64String)
        {
            // Convert base 64 string to byte[]
            byte[] imageBytes = Convert.FromBase64String(base64String);
            // Convert byte[] to Image
            var ms = new MemoryStream(imageBytes, 0, imageBytes.Length);
           
                System.Drawing.Image image = System.Drawing.Image.FromStream(ms, true);
                return image;
         
        }

        //private IEnumerable<GraphPoint> GetFeelingsAverage(IEnumerable<GraphPoint> graphPoints)
        //{
        //    foreach (GraphPoint graphPoint in graphPoints)
        //    {
        //        int noOfFeelings = 0;
        //        graphPoint.FeelingAverage = 0;
        //        foreach (Feeling feeling in graphPoint.FeelingFromEveryImage)
        //        {
        //            graphPoint.FeelingAverage = graphPoint.FeelingAverage + feeling.ValueOfTheFeeling;
        //            noOfFeelings++;
        //        }
        //        graphPoint.FeelingAverage = graphPoint.FeelingAverage / noOfFeelings;
        //    }
        //    return graphPoints;
        //}


        public IConfigurationSection GetSection(string key)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<IConfigurationSection> GetChildren()
        {
            throw new NotImplementedException();
        }

        public IChangeToken GetReloadToken()
        {
            throw new NotImplementedException();
        }
    }
}
