using APITestUpload.Models.Home;
using AutoMapper;
using ImageAnalysis;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using VisualMoodTracker.Entities;
using VisualMoodTracker.Models;

namespace VisualMoodTracker.Controllers
{
    [Route("api/sessions")]
    public class ImageController : Controller
    {
        private readonly IFileProvider fileProvider;

        public ImageController(IFileProvider fileProvider)
        {
            this.fileProvider = fileProvider;
        }
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

            //return ID of image format from dateTime
            List<FaceResult> facesList = GetResultFromImageAnalysis(Directory.GetCurrentDirectory() + "\\wwwroot\\sessions\\" + sessionId + "\\" + fileName);

            string json = JsonConvert.SerializeObject(facesList.ToArray());

            json = AddTooJson(json, sessionId, fileId, fileUpload.GetFileExtension());
            System.IO.File.WriteAllText("wwwroot\\sessions\\" + sessionId + "\\" + fileId + ".json", json);

            return Ok(json);
        }

        public List<FaceResult> GetResultFromImageAnalysis(string fileLocation)
        {           
            ImageAnalyze analyzer = new ImageAnalyze();
            List<FaceResult> lst = analyzer.GetResult(fileLocation);
            return lst;
        }

        [HttpGet]
        public IActionResult GetImagesFromSession(string sessionId, string fileId)
        {
            bool exists = System.IO.File.Exists("wwwroot\\sessions\\" + sessionId + "\\" + fileId + ".json");
            if (exists)
            {
                string result = System.IO.File.ReadAllText("wwwroot\\sessions\\" + sessionId + "\\" + fileId + ".json");
                
                //return json of session
                return Ok(result);
            }
            else
            {
                return Ok(null);
            }
        }

        //TASK NR 5
        [HttpGet("{sessionId}")]
        public IActionResult GetImageFromSession(string sessionId)
        {
            return Ok(sessionId);
        }

        private string AddTooJson(string json, string sessionId, int fileId, string extension)
        {
            json = "{" + "\"" + "sessionId" + "\"" + ":" + "\"" + sessionId + "\"" + ","
                + "\"" + "lastImageId" + "\"" + ":" + "\"" + fileId + "\"" + ","
                + "\"" + "imageExtension" + "\"" + ":" + "\"" + extension + "\"" + ","
                + "\"" + "faces" + "\"" + ":" + json + "}";
            return json;
        }

    }
}
