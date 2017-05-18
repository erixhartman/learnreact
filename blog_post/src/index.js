import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';

var post = {
  postTitle: "Dinosaurs are awesome",
  author: "Stealthy Steg",
  postBody: "body property",
  comments: [
    "But emails!",
    "First",
    "By your logic.."
  ]
}

ReactDOM.render(
  <Post
    name={post.postTitle}
    author={post.author}
    content={post.postBody}
    comment={post.comments}
   />,
  document.getElementById('root')
);
