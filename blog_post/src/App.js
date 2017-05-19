import React, {Component} from 'react'
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';


class Post extends Component {

  render() {
    let authors = [
      < Author author={this.props.allAuthors[0]}/>,
      < Author author={this.props.allAuthors[1]}/>,
      < Author author={this.props.allAuthors[2]}/>
    ]
    return(
      <div>
        <h1> Hi {this.props.name}</h1>
        {authors}
        <p>{this.props.content}</p>
        <Comment body={this.props.comments[0]} />
      </div>
    )
  }
}

export default Post
