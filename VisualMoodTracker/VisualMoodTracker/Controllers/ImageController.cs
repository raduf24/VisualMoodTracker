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
using System.Text;
using System.Threading.Tasks;

namespace VisualMoodTracker.Controllers
{


    [Route("api/sessions")]
    public class ImageController : Controller
    {
        private readonly IFileProvider FileProvider;

        public ImageController(IFileProvider FileProvider, IConfiguration configuration)
        {
            this.FileProvider = FileProvider;
            Configuration = configuration;
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
            }

            int fileId = (Directory.GetFiles("wwwroot\\sessions\\" + sessionId, "*", SearchOption.AllDirectories).Length/2) + 1;

            string fileName = fileId + fileUpload.GetFileExtension();

            var path = Path.Combine(
                        Directory.GetCurrentDirectory(), "wwwroot\\sessions\\" + sessionId,
                        fileName);

            using (var stream = new FileStream(path, FileMode.Create))
            {
                await fileUpload.CopyToAsync(stream);
            }

            List<FaceResult> facesList = GetResultFromImageAnalysis(Directory.GetCurrentDirectory() + 
                "\\wwwroot\\sessions\\" + sessionId + "\\" + fileName);

            string json = JsonConvert.SerializeObject(facesList.ToArray());

            json = AddToJson(json, sessionId, fileId, fileUpload.GetFileExtension());
            System.IO.File.WriteAllText("wwwroot\\sessions\\" + sessionId + "\\" + fileId + ".json", json);

            return Ok(json);
        }

        public List<FaceResult> GetResultFromImageAnalysis(string fileLocation)
        {
            ImageAnalyze analyzer = new ImageAnalyze(Configuration["key"], Configuration["url"]);
            List<FaceResult> lst = analyzer.GetResult(fileLocation);
            return lst;
        }

        [HttpGet]
        public IActionResult GetSessions()
        {
            bool folderexists = System.IO.Directory.Exists("wwwroot\\sessions\\");
            if (folderexists)
            {
                string path = Directory.GetCurrentDirectory() + "\\wwwroot\\sessions\\";
                List<string> resultDirNames = new List<string>();

                foreach (string s in Directory.GetDirectories(path))
                {
                    resultDirNames.Add(s.Remove(0, path.Length));
                    Console.WriteLine(s.Remove(0, path.Length));
                }
                return Ok(resultDirNames);
            }
            else
            {
                return Ok(null);
            }
        }

        [HttpGet("json")]
        public IActionResult GetJsonFromSession(string sessionId, string fileId)
        {
            StringBuilder jsonAccess = new StringBuilder();
            jsonAccess.Append("wwwroot\\sessions\\").Append(sessionId);
            jsonAccess.Append("\\").Append(fileId).Append(".json");

            bool exists = System.IO.File.Exists(jsonAccess.ToString());
            if (exists)
            {
                string result = System.IO.File.ReadAllText(jsonAccess.ToString());
                
                //return json of session
                return Ok(result);
            }
            else
            {
                //if there wasn't created a session (no json file will be returned)
                return Ok(null);
            }
        }

        //TASK NR 5
        [HttpGet("{sessionId}")]
        public IActionResult GetImageFromSession(string sessionId)
        {
            //we have to return the images with the list of faces and properties from the session folder 
            return Ok(sessionId);
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
