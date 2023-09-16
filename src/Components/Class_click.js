import React, { Component } from 'react'

 class Class_click extends Component {
    click_handel(){
        console.log("Clicked from class component")
    }


  render() {

 
    return (
      <div>
        <button onClick={this.click_handel}>click me !!!</button>
        
      </div>
    )
  }
}

export default Class_click
