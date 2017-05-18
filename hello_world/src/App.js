import React, {Component} from 'react'

class Hello extends Component {

  render () {
    return(
      <div>
        <h1> Hello {this.props.name}!</h1>
        <h3> It is time for tea. </h3>
      </div>
    )
  }
}
export default Hello
