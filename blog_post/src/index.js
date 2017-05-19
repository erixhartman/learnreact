import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';

var post = {
  postTitle: "Dinosaurs are awesome",
  authors: [
    "Stealthy Steg",
    "Steve Davidson",
    "Dave Stevenson"
  ],
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
    allAuthors={post.authors}
    content={post.postBody}
    comments={post.comments}
   />,
  document.getElementById('root')
);
