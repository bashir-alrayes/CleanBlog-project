const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort('-dateCreated');
  res.render('index', {
    posts: posts,
  });
};

exports.getPost = async (req, res) => {
  //res.sendFile(path.resolve(__dirname,'temp/index.html'));
  //console.log(req.params.id);
  const post = await Post.findById(req.params.id);
  res.render('postview', {
    post,
  });
};

exports.updatepost = async (req, res) => {
  const post = await Photo.findOne({ _id: req.params.id });
  post.name = req.body.name;
  post.message = req.body.message;
  post.save();

  res.redirect(`/posts/${req.params.id}`);
};

exports.deletePost = (req, res) => {
  console.log(req.params.id);
};


exports.createPost = async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
  }