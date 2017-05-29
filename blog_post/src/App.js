import React, {Component} from 'react'
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';


class Post extends Component {

  constructor (props) {
    super()
    this.state = {
      body: props.content
    }
  }
  changeBody (e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }

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
        <p>{this.state.body}</p>
        <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
        <Comment body={this.props.comments[0]} />
      </div>
    )
  }
}

export default Post
