import React, {Component} from 'react'
import './App.css';
import Comment from './Comment.js';


class Post extends Component {

  render() {
    return(
      <div>
        <h1> Hi {this.props.name}</h1>
        <h3>{this.props.author}</h3>
        <p>{this.props.content}</p>
        <Comment body={this.props.comments[0]} />
      </div>
    )
  }
}

export default Post
