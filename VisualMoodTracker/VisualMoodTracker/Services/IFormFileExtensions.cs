using Microsoft.AspNetCore.Http;
using System.Net.Http.Headers;

namespace APITestUpload.Models.Home
{
    public static class IFormFileExtensions
    {
        public static string GetFilename(this IFormFile file)
        {
            return ContentDispositionHeaderValue.Parse(
                            file.ContentDisposition).FileName.ToString().Trim('"');
        }

        public static string GetFileExtension(this IFormFile file)
        {
            string ext = ContentDispositionHeaderValue.Parse(
                            file.ContentDisposition).FileName.ToString().Trim('"');
            return ext.Substring(ext.IndexOf('.'));
        }
    }
}
