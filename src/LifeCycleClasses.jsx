import React, { Component } from 'react'
import CounterClass from './CounterClass';

//using classes 

//1)constructor()
//2)componentdidmount()
//3)componentdidupdate()
//4)render()
//5)componentwillunmount()

export default class LifeCycle extends Component {

  constructor(){ //it is used in cases when we want to do something before rendering a page
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    console.log("componentDidMount: when component renders for first time")
  }

  // increment(){
  //   this.setState({count: this.state.count+1}) 
  // } will not update bcuz its not getting "this"

  increment(){
    this.setState({count: this.state.count+1})
  }

  componentWillUnmount(){
    console.log("componentWillUnmount: Component removed")
  }
  
  render() { //for understanding jsx by the browers we have transpilers like babel since browsers do not understand jsx
    return (
      <>
        <CounterClass number={this.state.count}/>  
       {/* <h1>{this.state.count}</h1>  */}
       {/* <button onClick={()=>(this.increment())}>Click me</button> arrow func / without binding "or" */}
       <button onClick={this.increment.bind(this)}>Click me</button>
      </>
    )
  }
}

// export default LifeCycle