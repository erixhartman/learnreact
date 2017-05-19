import React, {Component} from 'react';

class Author extends Component {
  render () {
    return (
      <div>
        <h3>Written by:</h3>
        <p>{this.props.author}</p>
      </div>
    )
  }
}

export default Author
