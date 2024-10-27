import React, { Component } from 'react'

export default class Counter extends Component {

  componentDidUpdate(prevprops, prevstates){
    if (prevprops.number !== this.props.number) { //default would be 0 count so if state increases than we will get to know if it is updated or not
      console.log("componentDidUpdate: Component updated")
    }
  }
  
  render() {
    return (
      <h1>
        {this.props.number}
      </h1>
    )
  }
}
