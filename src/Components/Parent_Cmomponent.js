import React, { Component } from 'react'
import Child_Componet from './Child_Componet'

export class Parent_Cmomponent extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       
      ParentName:'Anees'
    }

    this.greetHandler=this.greetHandler.bind(this)
  }

  greetHandler(){
    console.log(`Hello ${this.state.ParentName}`)
  }
  
  render() {
    return (
      <div>

        <Child_Componet  greet={this.greetHandler} />
        
      </div>
    )       
  }
}

export default Parent_Cmomponent
