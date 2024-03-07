const Post = require('../models/Post');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.editPost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('editpost', {
    post,
  });
};

exports.addPost = (req, res) => {
  //res.sendFile(path.resolve(__dirname,'temp/index.html'));
  res.render('addpost');
};
