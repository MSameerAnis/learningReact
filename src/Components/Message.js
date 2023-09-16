import React, { Component } from 'react'


 class Message extends Component {

  constructor(){

    super()
    this.state={
      message:'welcome visitor'
    }
  }

  changeMessage(){

    this.setState({

      message:'thanks'
    })
  }
  render() {
    return (
      
      <div>

<h1>{this.state.message} </h1>
<button className='btn'  onClick={()=>this.changeMessage()}>subscribe</button>

      </div>
      
 
    )
  }
}

export default Message
