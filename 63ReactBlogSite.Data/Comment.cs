using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace _63ReactBlogSite.Data
{
   public class Comment
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string CommentorName { get; set; }
        public DateTime DatePosted { get; set; }
        public int PostId { get; set; }
        [JsonIgnore]
        public Post Post { get; set; }
    }
}
