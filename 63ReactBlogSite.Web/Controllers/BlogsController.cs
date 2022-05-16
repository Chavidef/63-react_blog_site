using _63ReactBlogSite.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _63ReactBlogSite.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
        private string _connectionString;

        public BlogsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("getall")]
        public List<Post> GetAll()
        {
            var repo = new BlogRepository(_connectionString);
            return repo.GetAll();
        }

        [HttpPost]
        [Route("addpost")]
        public void AddPost(Post post)
        {
            var repo = new BlogRepository(_connectionString);
            //post.DatePosted = DateTime.Now;
            repo.AddPost(post);
        }
    }
}
