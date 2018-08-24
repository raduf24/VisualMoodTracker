using APITestUpload.Models.Home;
using ImageAnalysis;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Primitives;
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
using System.Linq.Expressions;

namespace VisualMoodTracker.Controllers
{

    [Route("api/sessions")]
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

        [HttpPost]
        public async Task<IActionResult> UploadFile(IFormFile fileUpload, string sessionId)
        {
            if (fileUpload == null || fileUpload.Length == 0)
                return Content("file not selected");

            if (sessionId == null)
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

            Session session = _dbcontext.Sessions.Last();

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

            //string json = JsonConvert.SerializeObject(facesList.ToArray());

            //json = AddToJson(json, sessionId, fileId, fileUpload.GetFileExtension());
            //System.IO.File.WriteAllText("wwwroot\\sessions\\" + sessionId + "\\" + fileId + ".json", json);

            _dbcontext.SaveChanges();
            //Getting the faces with the last image id
            var facesPresent = _dbcontext.Faces.Where(x => x.Image == img);
            //Serializing them to a Json
            string json = JsonConvert.SerializeObject(facesPresent);
            //Adding the proprties we need
            json = AddToJson(json, sessionId, fileId, fileUpload.GetFileExtension());

            return Ok(json);
        }

        public List<FaceResult> GetResultFromImageAnalysis(string fileLocation)
        {
            ImageAnalyze analyzer = new ImageAnalyze(Configuration["key"], Configuration["url"]);
            List<FaceResult> lst = analyzer.GetResult(fileLocation);
            return lst;
        }

        [HttpGet]
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
        private string AddToJson(string json, string sessionId, int fileId, string extension)
        {
            StringBuilder jsonBuilder = new StringBuilder();
            jsonBuilder.Append("{\"sessionId\":\"").Append(sessionId).Append("\",");
            jsonBuilder.Append("\"lastImageId\":\"").Append(fileId).Append("\",");
            jsonBuilder.Append("\"imageExtension\":\"").Append(extension).Append("\",");
            jsonBuilder.Append("\"faces\":").Append(json).Append("}");
            return jsonBuilder.ToString();
        }

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
