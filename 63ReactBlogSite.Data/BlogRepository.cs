using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _63ReactBlogSite.Data
{
    public class BlogRepository
    {
        private readonly string _connectionString;

        public BlogRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Post> GetAll()
        {
            using var context = new BlogDataContext(_connectionString);
            return context.Posts.ToList();
        }
        public int AddPost(Post post)
        {
            using var context = new BlogDataContext(_connectionString);
            context.Posts.Add(post);
            context.SaveChanges();
            return post.Id;
        }
    }
}
