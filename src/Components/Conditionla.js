import React, { Component } from 'react'

 class Conditionla extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false 

      }
    }
    


  render() {

    // if(this.state.isLoggedIn){

    //     return(
    //         <div>
    //             <h3>
    //                 sameer
    //             </h3>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h3>
    //                 guests
    //             </h3>
    //         </div>
    //     )
    // }

    //second approacg



    // let Message
    // if ((this.state.isLoggedIn)) {
    //     Message=<div>Sameer</div>
        
    // }

    // else{
    //     Message = <div>Guests</div>

    // }

    // return(
    //     <div>{Message}</div>
    // )

    return this.state.isLoggedIn?(
        <div>sameer</div>
    ):(
        <div>guests </div>
    )

  }
}

export default Conditionla
