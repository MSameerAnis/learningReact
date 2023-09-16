import React, { Component } from 'react'

export class Event_binding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'hellow'
      }
    }
    Click_handel(){
        this.setState(
            {
                message:'Good bye'
            }
            
        )

    };

    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.Click_handel.bind(this)}>Click me</button>
        
      </div>
    )
  }
}

export default Event_binding
