const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect DB
mongoose.connect('mongodb://localhost/clean-blog-db');

// Create Schema
const PostSchema = new Schema({
  name: String,
  message: String,
});

const Posts = mongoose.model('posts', PostSchema);
/*
// Create a posts
Posts.create({
  name: 'Alaa',
  message: 'Merhabaa',
});

*/

/*
// Read a post using promise-based approach
Posts.find({})
  .then(data => {
    console.log("Posts found:", data);
  })
  .catch(err => {
    console.error("Error occurred while reading posts:", err);
  });
*/

function updatePost() {
    const id = '65e362499886427ae51a385c';
    Posts.findByIdAndUpdate(
      id,
      {
        name: 'Alaa Elddin',
        message: 'New post for his',
      },
      {
        new: true,
      }
    )
      .then(updatedPost => {
        console.log('Updated post:', updatedPost);
      })
      .catch(err => {
        console.error('Error occurred while updating post:', err);
      });
  }
  
  updatePost();
  

/*
// Delete a post
const id = '65e3629f347eea5505246393';
Posts.findByIdAndDelete(id)
  .then(data => {
    console.log('Post is removed:', data);
  })
  .catch(err => {
    console.error("Error occurred while deleting post:", err);
  });

*/