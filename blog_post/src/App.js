import React, {Component} from 'react'
import './App.css';

class Post extends Component {

  render() {
    return(
      <div>
        <h1> Hi {this.props.name}</h1>
        <h3>{this.props.author}</h3>
        <p>{this.props.content}</p>
        <p>{this.props.comment[2]}</p>
      </div>
    )
  }
}

export default Post
