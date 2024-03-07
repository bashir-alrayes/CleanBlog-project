const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');
const app = express();
const postController = require('./Controllers/postController');
const pageController = require('./Controllers/pageController');

// connect DB
mongoose.connect('mongodb://localhost/clean-blog-db');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'Get'],
  })
);

//Template Engine
app.set('view engine', 'ejs');

/*
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
app.use(myLogger)
*/

app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.put('/posts/:id', postController.updatepost);
app.delete('/posts/:id', postController.deletePost);
app.post('/posts', postController.createPost);

app.get('/about', pageController.getAboutPage);
app.get('/addpost', pageController.addPost);
app.get('/posts/editpost/:id', pageController.editPost);

const port = 3000;
app.listen(port, () => {
  console.log(`The server is started ${port}....`);
});
